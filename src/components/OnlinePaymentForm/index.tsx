/* eslint-disable react/jsx-key */
'use client';
import useMultistepForm from '@/hooks/multistep-form';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import ContactDetails from './ContactDetails';
import ProductDetails from './ProductDetails';
import TransactionSummary from './TransactionSummary';

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

type OnlinePaymentFormProps = {};

export default function OnlinePaymentForm({}: OnlinePaymentFormProps) {
  const [data, setData] = useState({} as FormData);
  const [hasProductInfo, setHasProductInfo] = useState(false);
  const [payHereHash, setPayHereHash] = useState<string | undefined>(undefined);

  const { orderId, productId, amount, currency } = data;

  useEffect(() => {
    if (productId && amount && currency) setHasProductInfo(true);
  }, [amount, currency, data, productId]);

  useEffect(() => {
    fetch(`/api/v1/payhere/hash?merchantId=${process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID}&orderId=${orderId}&amount=${amount}&currency=${currency}`)
      .then(response => response.json())
      .then(data => { console.log(data); setPayHereHash(data.hash); })
      .catch(error => console.error('Error: Fetching PayHere hash failed', error));
  }, [orderId, amount, currency]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, nextStep, previousStep } = useMultistepForm([
    { element: (<ProductDetails {...data} updateFields={updateFields} />) },
    { element: (<ContactDetails {...data} updateFields={updateFields} />) },
    { element: (<TransactionSummary {...data} updateFields={updateFields} />) },
  ]);

  const sandbox = process.env.NEXT_PUBLIC_PAYHERE_SANDBOX === "true";

  const payment = {
    "sandbox": sandbox,
    "merchant_id": process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID,
    "return_url": sandbox ? "https://dev.engspire.lk/api/v1/payments/return" : "https://www.engspire.lk/api/v1/payments/return",     // Important
    "cancel_url": sandbox ? "https://dev.engspire.lk/api/v1/payments/cancel" : "https://www.engspire.lk/api/v1/payments/cancel",     // Important
    "notify_url": sandbox ? "https://dev.engspire.lk/api/v1/payhere/notify" : "https://www.engspire.lk/api/v1/payhere/notify", // Important: This is where the backend is updated if/when the transaction succeeds
    "order_id": data.orderId,
    "items": data.productName,
    "amount": data.amount,
    "currency": data.currency,
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
      console.log("OnlinePaymentForm Data:", data); // Do something with the data
      payWithPayHere();
    }
  }

  return (
    <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body -mt-2">
        <h1 className="text-2xl font-bold">Pay with <span className='text-[#2345d0]'>Pay</span><span className='text-[#f4a700]'>Here</span></h1>
        <figure>
          <Image src="/payhere-payment-methods.png" alt="Payhere Payment Methods" width={320} height={160} />
        </figure>
        {steps.length > 1 && (
          <div className="flex justify-center place-items-center">
            <progress className="progress progress-ghost w-full" value={Math.round((currentStepIndex / steps.length) * 100)} max="100"></progress>
          </div>
        )}
        <form onSubmit={onSubmit}>
          <div>{currentStep.element}</div>
          <div className="form-control mt-6">
            <button type='submit' className='btn btn-primary my-2' disabled={!hasProductInfo}>{!isLastStep ? 'Next' : 'Pay'}</button>
            {!isFirstStep && <button type='button' className='btn my-2' onClick={previousStep}>Back</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
