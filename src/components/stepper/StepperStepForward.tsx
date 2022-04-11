import * as React from 'react'

import { Button } from '../button'
import { useStepper } from './stepper-context/StepperContext'
import { IStepperNavigateProps } from './types'

export const StepperStepForward: React.FC<
  IStepperNavigateProps & Omit<React.ComponentProps<typeof Button>, 'children'>
> = ({ label, children, onClick, ...rest }) => {
  const { goToNextStep, activeStep } = useStepper()

  const handleClick = () => {
    if (onClick) {
      return onClick(goToNextStep)
    }
    goToNextStep()
  }

  return (
    <Button size="sm" {...rest} onClick={handleClick} css={{ ml: 'auto' }}>
      {children || label?.(activeStep)}
    </Button>
  )
}
