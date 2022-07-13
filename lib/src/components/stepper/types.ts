import { CSS } from '~/stitches'

export enum Status {
  ACTIVE = 'active',
  VIEWED = 'viewed',
  SUCCESS = 'success',
  NORMAL = 'normal'
}
export interface Step {
  label?: string
  status: `${Status}`
}

export type Orientation = 'vertical' | 'horizontal'

export type Context = {
  steps: Step[]
  goToPreviousStep?: () => void
  goToNextStep?: () => void
  goToStep?: (index: number) => void
  activeStep: number
  viewedSteps: number[]
  allowSkip?: boolean
  orientation?: Orientation
}

export type StepperProviderProps = {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
  orientation?: Orientation
  steps: Step[]
}

export interface IStepperProps {
  css?: CSS
  stepCount?: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
  orientation?: Orientation
  steps?: Step[]
}

export interface IStepperNavigateProps {
  label?: (currentStep?: number) => string
  onClick?: (next: () => void) => void
}

export interface IStepperStepsProps {
  css?: CSS
  stepsWidth?: string
  orientation?: Orientation
}
