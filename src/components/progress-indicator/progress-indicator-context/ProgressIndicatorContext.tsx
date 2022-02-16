import * as React from 'react'

import { ProgressContext, ProgressIndicatorProviderProps } from '../types'

const ProgressIndicatorContext = React.createContext<ProgressContext>({
  steps: [],
  goToNextStep: () => null,
  goToPreviousStep: () => null,
  goToStep: () => null,
  activeStep: 0,
  viewedSteps: [],
  allowSkip: false,
  isFinalStep: false,
  onComplete: () => null
})

export const ProgressIndicatorProvider: React.FC<ProgressIndicatorProviderProps> = ({
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
    setActiveStep((current) => current + 1)
  }

  const goToPreviousStep = () => {
    setActiveStep((current) => current - 1)
  }

  const goToStep = (index: number) => {
    setActiveStep(index)
  }

  return (
    <ProgressIndicatorContext.Provider
      value={{
        steps: Array(stepCount).fill(''),
        goToNextStep,
        goToPreviousStep,
        goToStep,
        activeStep,
        viewedSteps,
        allowSkip,
        isFinalStep: activeStep === stepCount - 1,
        onComplete
      }}
    >
      {children}
    </ProgressIndicatorContext.Provider>
  )
}

export const useProgressIndicator = (): ProgressContext => {
  const context = React.useContext(ProgressIndicatorContext)
  if (!context)
    throw new Error(
      'useProgressIndicatorContext can only be called within a ProgressIndicatorContext'
    )

  return context
}
