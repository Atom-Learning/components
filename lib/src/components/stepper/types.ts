import { CSS } from '~/stitches'

export enum Status {
  ACTIVE = 'active',
  VIEWED = 'viewed',
  SUCCESS = 'success',
  DEFAULT = 'default'
}
export interface Step {
  label?: string
  status: `${Status}`
}

export type Direction = 'vertical' | 'horizontal'

export type Context = {
  steps: Step[]
  goToPreviousStep?: () => void
  goToNextStep?: () => void
  goToStep?: (index: number) => void
  activeStep: number
  viewedSteps: number[]
  allowSkip?: boolean
  direction?: Direction
  hideLabels: boolean
}

export type StepperProviderProps = {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
  direction?: Direction
  steps: Step[]
  hideLabels: boolean
}

export interface IStepperProps {
  css?: CSS
  stepCount?: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
  direction?: Direction
  steps?: Step[]
  hideLabels?: boolean
}

export interface IStepperNavigateProps {
  label?: (currentStep?: number) => string
  onClick?: (next: () => void) => void
}

export interface IStepperStepsProps {
  css?: CSS
}
