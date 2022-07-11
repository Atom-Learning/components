import { CSS } from '~/stitches'

export interface Step {
  label: string
  status: 'active' | 'viewed' | 'completed' | 'normal'
}

export type Context = {
  steps: Step[]
  goToPreviousStep: () => void
  goToNextStep: () => void
  goToStep: (index: number) => void
  activeStep: number
  viewedSteps: number[]
  allowSkip?: boolean
  orientation?: 'vertical' | 'horizontal'
}

export type StepperProviderProps = {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
  orientation?: 'vertical' | 'horizontal'
  steps: Step[]
}

export interface IStepperProps {
  css?: CSS
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
  orientation?: 'vertical' | 'horizontal'
  steps?: Step[]
}

export interface IStepperNavigateProps {
  label?: (currentStep?: number) => string
  onClick?: (next: () => void) => void
}

export interface IStepperStepsProps {
  css?: CSS
  stepsWidth?: string
  orientation?: 'vertical' | 'horizontal'
}
