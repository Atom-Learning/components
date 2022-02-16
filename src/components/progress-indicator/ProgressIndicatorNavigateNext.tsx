import * as React from 'react'

import { Button } from '../button'
import { useProgressIndicator } from './progress-indicator-context/ProgressIndicatorContext'
import { IProgressIndicatorNavigateNextProps } from './types'

export const ProgressIndicatorNavigateNext: React.FC<
  IProgressIndicatorNavigateNextProps & typeof Button
> = ({ outputLabel, ...rest }) => {
  const { goToNextStep, isFinalStep, onComplete } = useProgressIndicator()

  const handleClick = () => (isFinalStep ? onComplete?.() : goToNextStep())

  return (
    <Button size="sm" {...rest} onClick={handleClick}>
      {outputLabel(isFinalStep)}
    </Button>
  )
}
