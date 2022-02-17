import * as React from 'react'

import { Context, StepperProviderProps } from '../types'

const StepperContext = React.createContext<Context>({
  steps: [],
  goToPreviousStep: () => null,
  goToNextStep: () => null,
  goToStep: () => null,
  activeStep: 0,
  viewedSteps: [],
  allowSkip: false
})

export const StepperProvider: React.FC<StepperProviderProps> = ({
  children,
  stepCount,
  allowSkip,
  onComplete
}) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const [viewedSteps, setviewedSteps] = React.useState<number[]>([0])

  React.useEffect(() => {
    setviewedSteps((prev) =>
      prev.includes(activeStep) ? prev : [...prev, activeStep]
    )
  }, [activeStep])

  const goToNextStep = () => {
    if (onComplete && activeStep === stepCount - 1) {
      onComplete()
    }
    setActiveStep((current) => current + 1)
  }

  const goToPreviousStep = () => {
    setActiveStep((current) => current - 1)
  }

  const goToStep = (index: number) => {
    setActiveStep(index)
  }

  return (
    <StepperContext.Provider
      value={{
        steps: Array(stepCount).fill(''),
        goToPreviousStep,
        goToNextStep,
        goToStep,
        activeStep,
        viewedSteps,
        allowSkip
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
