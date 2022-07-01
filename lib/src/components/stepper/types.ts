import { CSS } from '~/stitches'

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
  onStepChange?: (activeStep: number) => void
}

export interface IStepperProps {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
}

export interface IStepperNavigateProps {
  label?: (currentStep?: number) => string
  onClick?: (next: () => void) => void
}

export interface IStepperStepsProps {
  css?: CSS
  stepsWidth?: string
}
