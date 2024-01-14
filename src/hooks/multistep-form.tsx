import { ReactElement, useState } from 'react';

export default function useMultistepForm(steps: ReactElement[]) {
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