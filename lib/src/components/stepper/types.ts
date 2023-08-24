import { CSS } from '~/stitches'

export enum Status {
  ACTIVE = 'active',
  VIEWED = 'viewed',
  SUCCESS = 'success',
  DEFAULT = 'default',
  COMPLETED = 'completed',
  REVIEWED = 'reviewed'
}
export interface Step {
  label?: string
  status: `${Status}`
}

export type Direction = 'vertical' | 'horizontal'

export type Context = {
  steps: Step[]
  goToPreviousStep: () => void | undefined
  goToNextStep: () => void | undefined
  goToStep: (index: number) => void | undefined
  activeStep: number
  viewedSteps: number[]
  completedSteps: number[]
  allowSkip?: boolean
  direction?: Direction
  hideLabels: boolean
  showCompletedIcons: boolean
}

export type StepperProviderProps = {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
  onStepChange?: (activeStep: number) => void
  direction?: Direction
  steps: Step[]
  hideLabels: boolean
  showCompletedIcons: boolean
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
  showCompletedIcons?: boolean
}

export interface IStepperNavigateProps {
  label?: (currentStep?: number) => string
  onClick?: (next: () => void) => void
}

export interface IStepperStepsProps {
  css?: CSS
}
