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
  labels?: { back: string; next: string; start: string }
}

export type ProgressIndicatorProviderProps = {
  stepsData: unknown[]
  allowSkip?: boolean
  labels?: { back: string; next: string; start: string }
}
