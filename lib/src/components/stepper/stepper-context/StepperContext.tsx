import * as React from 'react'

import { Context, StepperProviderProps } from '../types'

const StepperContext = React.createContext<Context>({
  steps: [],
  goToPreviousStep: () => null,
  goToNextStep: () => null,
  goToStep: () => null,
  activeStep: 0,
  viewedSteps: [],
  allowSkip: false,
  orientation: 'horizontal'
})

export const StepperProvider: React.FC<StepperProviderProps> = ({
  children,
  stepCount,
  allowSkip,
  onComplete,
  onStepChange,
  orientation,
  steps
}) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const [viewedSteps, setviewedSteps] = React.useState<number[]>([0])

  React.useEffect(() => {
    setviewedSteps((prev) =>
      prev.includes(activeStep) ? prev : [...prev, activeStep]
    )
    onStepChange?.(activeStep)
  }, [activeStep, onStepChange])

  const goToNextStep = () => {
    if (steps[activeStep]?.status) return
    if (onComplete && activeStep === stepCount - 1) {
      return onComplete()
    }
    if (activeStep < stepCount - 1) {
      return setActiveStep((current) => current + 1)
    }
  }

  const goToPreviousStep = () => {
    if (steps[activeStep]?.status) return
    setActiveStep((current) => current - 1)
  }

  const goToStep = (index: number) => {
    if (steps[index]?.status) return
    setActiveStep(index)
  }

  return (
    <StepperContext.Provider
      value={{
        steps: steps || Array(stepCount).fill(''),
        goToPreviousStep,
        goToNextStep,
        goToStep,
        activeStep,
        viewedSteps,
        allowSkip,
        orientation
      }}
    >
      {children}
    </StepperContext.Provider>
  )
}

export const useStepper = (): Context => {
  const context = React.useContext(StepperContext)
  if (!context)
    throw new Error(
      'Ensure that you wrap any components with the root component Stepper'
    )

  return context
}
