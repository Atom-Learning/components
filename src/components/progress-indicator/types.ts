export type ProgressContext = {
  steps: unknown[]
  goToNextStep: () => void
  goToPreviousStep: () => void
  goToStep: (index: number) => void
  activeStep: number
  viewedSteps: number[]
  allowSkip?: boolean
  isFinalStep: boolean
  onComplete?: () => void
}

export type ProgressIndicatorProviderProps = {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
}

export interface IProgressIndicatorProps {
  stepCount: number
  allowSkip?: boolean
  onComplete?: () => void
}

export interface IProgressIndicatorNavigateNextProps {
  outputLabel: (isFinalStep: boolean) => string
}

export interface IProgressIndicatorNavigatePreviousProps {
  outputLabel: string
}
