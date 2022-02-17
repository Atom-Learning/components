export type Context = {
  steps: unknown[]
  goToPreviousStep: () => void
  goToNextStep: () => void
  goToStep: (index: number) => void
  activeStep: number
  viewedSteps: number[]
  allowSkip?: boolean
}

export type StepperProviderProps = {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
}

export interface IStepperProps {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
}

export interface IStepperNavigateProps {
  label: (currentStep?: number) => string
}
