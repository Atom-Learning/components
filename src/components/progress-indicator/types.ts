export type ProgressContext = {
  steps: unknown[]
  setSteps: React.Dispatch<React.SetStateAction<unknown>[]>
  goToNextStep: () => void
  goToPreviousStep: () => void
  goToStep: (index: number) => void
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  validateViewedStep?: boolean
  viewedSteps: number[]
  allowSkip?: boolean
  isFinalStep: boolean
}

export type ProgressIndicatorProviderProps = {
  stepsData: unknown[]
  allowSkip?: boolean
}

export interface IProgressIndicatorProps {
  stepsData: unknown[]
  allowSkip?: boolean
}

export interface IProgressIndicatorNavigateNextProps {
  finalLabel?: string
  finalAction: () => void
}
