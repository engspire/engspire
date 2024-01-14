'use client';
import useMultistepForm from '@/hooks/multistep-form';
import { FormEvent, useState } from 'react';
import AvailableDaysForm from './AvailableDaysForm';
import AvailableTimeSlotsForm, { TimeSlot } from './AvailableTimeSlotsForm';
import ContactDetailsForm from './ContactDetailsForm';

type FormData = {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean,
  mondaySlots: TimeSlot[],
  tuesdaySlots: TimeSlot[],
  wednesdaySlots: TimeSlot[],
  thursdaySlots: TimeSlot[],
  fridaySlots: TimeSlot[],
  saturdaySlots: TimeSlot[],
  sundaySlots: TimeSlot[],
};

type CompleteProfileFormProps = {
  header: string,
};

export default function ProfileForm({ header }: CompleteProfileFormProps) {
  const [data, setData] = useState({} as FormData);

  const {} = data;

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { steps, currentStepIndex, currentStep, isFirstStep, isLastStep, nextStep, previousStep } = useMultistepForm([
    <ContactDetailsForm {...data} updateFields={updateFields} />,
    <AvailableDaysForm {...data} updateFields={updateFields} />,
    <AvailableTimeSlotsForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isLastStep) nextStep();
    else {
      console.log("CompleteProfileForm Data:", data); // Do something with the data
    }
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold -mt-8"><span className='text-secondary'>{header}</span></h1>
      {steps.length > 1 && (
        <div className="flex justify-center place-items-center mt-4">
          <progress className="progress progress-success w-full" value={Math.round((currentStepIndex / steps.length) * 100)} max="100"></progress>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>{currentStep}</div>
        <div className="form-control mt-6">
          <button type='submit' className='btn btn-primary my-2' disabled={false}>{!isLastStep ? 'Next' : 'Submit'}</button>
          {!isFirstStep && <button type='button' className='btn my-2' onClick={previousStep}>Back</button>}
        </div>
      </form>
    </div>
  );
}
