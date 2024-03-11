import { ReactElement, ReactNode, useState } from 'react';

type Step<T> = {
  element: ReactElement,
  shouldSubmit?: boolean,
  workflow?: T,
  nextDisabled?: boolean,
  nextButtonLabel?: ReactNode,
  backDisabled?: boolean,
  backButtonLabel?: ReactNode,
}

export default function useMultistepForm<T>(steps: Step<T>[]) {
  const [isLoading, setIsLoading] = useState(false);
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) {
        // If we are on the last step, stay there
        return index;
      }
      return index + 1
    });
  }

  function previousStep() {
    setCurrentStepIndex((index) => {
      if (index <= 0) {
        // If we are on the first step, stay there
        return index;
      }
      return index - 1
    });
  }

  function goToStep(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    isLoading,
    setIsLoading,
    steps,
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goToStep,
    nextStep,
    previousStep,
  };
}