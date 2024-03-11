/* eslint-disable react/jsx-key */
'use client';
import { ICourseLabel, courseIntakes, courses } from '@/.includes/courses';
import { apiClient } from '@/apiClient';
import useMultistepForm from '@/hooks/multistep-form';
import { useAuth } from '@clerk/nextjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { v4 as generateUuid } from 'uuid';
import ErrorAnimation from '../ErrorAnimation';
import SuccessAnimation from '../SuccessAnimation';
import ContactDetails from './ContactDetails';
import ProductDetails from './CourseDetails';
import PaymentStep from './PaymentStep';
import SignUpSummary from './SignUpSummary';

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
  batchCode: string,
};

type CourseSignUpFlowProps = {};

type CourseSignUpWorkflows = "Sign up for course" | "Pay with PayHere" | "Get Bank Details";

export default function CourseSignUpFlow({}: CourseSignUpFlowProps) {
  const { getToken } = useAuth();

  const [data, setData] = useState({} as FormData);
  const [successMessage, setSuccessMessage] = useState<ReactNode>();
  const [errorMessage, setErrorMessage] = useState<ReactNode>();
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
        orderId: orderId,
        currency: currency,
        batchCode: intakeData?.batchCode,
        productName: intakeData?.title,
      } as any;
    });
  }

  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, nextStep, previousStep } = useMultistepForm<CourseSignUpWorkflows>([
    { element: (<ProductDetails {...data} updateFields={updateFields} />), nextButtonLabel: "Sign up" },
    { element: (<ContactDetails {...data} updateFields={updateFields} />) },
    { element: (<SignUpSummary {...data} updateFields={updateFields} />), nextButtonLabel: "Submit", shouldSubmit: true, workflow: "Sign up for course" },
    { element: (<></>) },
    { element: (<PaymentStep {...data} updateFields={updateFields} />), nextButtonLabel: "Pay", shouldSubmit: true, workflow: "Pay with PayHere", backDisabled: true },
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

  const queryClient = useQueryClient();

  const createCourseSignUpMutation = useMutation({
    mutationFn: async (profileData) => {
      return await apiClient(await getToken()).post("/v1/courses/sign-up", profileData);
    },
    onSuccess: (data) => {
      console.log("CourseSignUpFlow Result", data);
      setSuccessMessage(
        <>
          <p>You have signed up successfully!</p>
        </>
      );
      nextStep();
    },
    onError: (error) => {
      console.error(error);
      setErrorMessage(() => (
        <>
          <p>An error occurred!</p>
          <p>Please try again.</p>
        </>
      ));
    },
  });

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSuccessMessage(undefined);
    setErrorMessage(undefined);
    console.log("CourseSignUpFlow Data:", data); // Do something with the data
    if (!currentStep.shouldSubmit && !isLastStep) nextStep();
    switch (currentStep.workflow) {
      case "Pay with PayHere":
        payWithPayHere();
        break;
      case "Sign up for course":
        createCourseSignUpMutation.mutate(data as any);
        break;
    }
  }

  function handleBackButton() {
    previousStep();
    setSuccessMessage(undefined);
    setErrorMessage(undefined);
  }

  return (
    <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body -mt-2">
        <form onSubmit={onSubmit}>
          {errorMessage && <ErrorAnimation message={errorMessage} />}
          {successMessage && <SuccessAnimation message={successMessage} />}
          {!successMessage && !errorMessage && <div>{currentStep.element}</div>}
          <div className="form-control mt-4">
            <button type='submit' className='btn btn-primary my-2'>{currentStep.nextButtonLabel ?? "Next"}</button>
            {!currentStep.backDisabled && !isFirstStep && !successMessage && <button type='button' className='btn my-2' onClick={handleBackButton}>{currentStep.backButtonLabel ?? "Back"}</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
