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
  direction: 'horizontal',
  hideLabels: false,
  completedSteps: []
})

export const StepperProvider: React.FC<StepperProviderProps> = ({
  children,
  stepCount,
  allowSkip,
  onComplete,
  onStepChange,
  direction,
  steps,
  hideLabels
}) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const [viewedSteps, setviewedSteps] = React.useState<number[]>([0])
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([])

  const isControlled = !stepCount

  React.useEffect(() => {
    setviewedSteps((prev) =>
      prev.includes(activeStep) ? prev : [...prev, activeStep]
    )

    onStepChange?.(activeStep)
  }, [activeStep, onStepChange])

  const goToNextStep = () => {
    const isCompleted = onComplete && activeStep === stepCount - 1
    const isNextStep = activeStep < stepCount - 1

    if (onComplete || isNextStep) {
      setCompletedSteps((prev) =>
        prev.includes(activeStep) ? prev : [...prev, activeStep]
      )
    }

    if (isCompleted) {
      return onComplete?.()
    }
    if (isNextStep) {
      return setActiveStep((current) => current + 1)
    }
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
        steps: steps || Array(stepCount).fill(''),
        goToPreviousStep: isControlled ? undefined : goToPreviousStep,
        goToNextStep: isControlled ? undefined : goToNextStep,
        goToStep: isControlled ? undefined : goToStep,
        activeStep,
        viewedSteps,
        completedSteps,
        allowSkip,
        direction,
        hideLabels
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
