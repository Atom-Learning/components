import * as React from 'react'

import { Button } from '../button'
import { useProgressIndicator } from '.'

export const ProgressIndicatorNavigatePrevious: React.FC & typeof Button = ({
  children,
  ...rest
}) => {
  const { activeStep, goToPreviousStep } = useProgressIndicator()
  return (
    <Button
      size="sm"
      appearance="outline"
      disabled={activeStep === 0}
      onClick={goToPreviousStep}
      {...rest}
    >
      {children}
    </Button>
  )
}
