import * as React from 'react'

import { Button } from '../button'
import { useProgressIndicator } from '.'
import { IProgressIndicatorNavigateNextProps } from './types'

export const ProgressIndicatorNavigateNext: React.FC<IProgressIndicatorNavigateNextProps> &
  typeof Button = ({ children, finalAction, finalLabel, ...rest }) => {
  const { goToNextStep, isFinalStep } = useProgressIndicator()

  const handleClick = () => (isFinalStep ? finalAction() : goToNextStep())

  return (
    <Button size="sm" onClick={handleClick} {...rest}>
      {isFinalStep && finalLabel ? finalLabel : children}
    </Button>
  )
}
