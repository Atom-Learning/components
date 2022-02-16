import * as React from 'react'

import { Button } from '../button'
import { useProgressIndicator } from './progress-indicator-context/ProgressIndicatorContext'
import { IProgressIndicatorNavigatePreviousProps } from './types'

export const ProgressIndicatorNavigatePrevious: React.FC<
  IProgressIndicatorNavigatePreviousProps & typeof Button
> = ({ outputLabel, ...rest }) => {
  const { activeStep, goToPreviousStep } = useProgressIndicator()
  return (
    <Button
      size="sm"
      appearance="outline"
      {...rest}
      disabled={activeStep === 0}
      onClick={goToPreviousStep}
    >
      {outputLabel}
    </Button>
  )
}
