/* eslint-disable react/jsx-key */
'use client';
import useMultistepForm from '@/hooks/multistep-form';
import { FormEvent, useEffect, useState } from 'react';
import ContactDetails from './ContactDetails';
import ProductDetails from './CourseDetails';
import TransactionSummary from './TransactionSummary';
import { usePathname } from 'next/navigation';
import { ICourseLabel, courseIntakes, courses } from '@/.includes/courses';
import { v4 as generateUuid } from 'uuid';

declare global {
  interface Window {
    payhere: any;
  }
}

type FormData = {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
  orderId: string,
  productId: string,
  productName: string,
  amount: number,
  currency: string,
};

type CourseSignUpFlowProps = {};

export default function CourseSignUpFlow({}: CourseSignUpFlowProps) {
  const [data, setData] = useState({} as FormData);
  const [payHereHash, setPayHereHash] = useState<string | undefined>(undefined);

  const { amount } = data;

  const pathname = usePathname();

  const intakeData = courseIntakes.get(`${courses.get((pathname.split("/")[2] as ICourseLabel))?.nextBatchCode}`);

  const orderId = `${intakeData?.batchCode}_${generateUuid()}`;
  const currency = intakeData?.currency;

  useEffect(() => {
    fetch(`/api/v1/payhere/hash?merchantId=${process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID}&orderId=${orderId}&amount=${amount}&currency=${currency}`)
      .then(response => response.json())
      .then(data => { console.log(data); setPayHereHash(data.hash); })
      .catch(error => console.error('Error: Fetching PayHere hash failed', error));
  }, [amount]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, nextStep, previousStep } = useMultistepForm([
    <ProductDetails {...data} updateFields={updateFields} />,
    <ContactDetails {...data} updateFields={updateFields} />,
    <TransactionSummary {...data} updateFields={updateFields} />,
  ]);

  const sandbox = process.env.NEXT_PUBLIC_PAYHERE_SANDBOX === "true";

  const payment = {
    "sandbox": sandbox,
    "merchant_id": process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID,
    "return_url": sandbox ? "https://dev.engspire.lk/api/v1/payments/return" : "https://www.engspire.lk/api/v1/payments/return",     // Important
    "cancel_url": sandbox ? "https://dev.engspire.lk/api/v1/payments/cancel" : "https://www.engspire.lk/api/v1/payments/cancel",     // Important
    "notify_url": sandbox ? "https://dev.engspire.lk/api/v1/payhere/notify" : "https://www.engspire.lk/api/v1/payhere/notify", // Important: This is where the backend is updated if/when the transaction succeeds
    "order_id": orderId,
    "items": intakeData?.title,
    "amount": data.amount,
    "currency": currency,
    "hash": payHereHash, // Important: Replace with generated hash retrieved from backend
    "first_name": data.firstName,
    "last_name": data.lastName,
    "email": data.emailAddress,
    "phone": data.phoneNumber,
    "address": "N/A",
    "city": "N/A",
    "country": "N/A",
  };

  useEffect(() => {
    if (window && window.payhere) {
      // Called when user completed the payment. It can be a successful payment or failure
      window.payhere.onCompleted = function onCompleted(orderId: string) {
        console.log("Payment completed. OrderID:" + orderId);
        //Note: validate the payment and show success or failure page to the customer
      };

      // Called when user closes the payment without completing
      window.payhere.onDismissed = function onDismissed() {
        //Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
      };

      // Called when error happens when initializing payment such as invalid parameters
      window.payhere.onError = function onError(error: any) {
        // Note: show an error page
        console.log("Error:" + error);
      };
    }
  }, []);

  function payWithPayHere() {
    console.log("PayHere Payload:", payment);

    window.payhere.startPayment(payment);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isLastStep) nextStep();
    else {
      console.log("CourseSignUpFlow Data:", data); // Do something with the data
      payWithPayHere();
    }
  }

  return (
    <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body -mt-2">
        <form onSubmit={onSubmit}>
          <div>{currentStep}</div>
          <div className="form-control mt-4">
            <button type='submit' className='btn btn-primary my-2'>{!isLastStep ? 'Next' : 'Submit'}</button>
            {!isFirstStep && <button type='button' className='btn my-2' onClick={previousStep}>Back</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
