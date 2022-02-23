import * as React from 'react'

import { Button } from '../button'
import { useStepper } from './stepper-context/StepperContext'
import { IStepperNavigateProps } from './types'

export const StepperStepForward: React.FC<
  IStepperNavigateProps & Partial<React.ComponentProps<typeof Button>>
> = ({ label, children, ...rest }) => {
  const { goToNextStep, activeStep } = useStepper()

  return (
    <Button size="sm" {...rest} onClick={goToNextStep} css={{ ml: 'auto' }}>
      {children || label?.(activeStep)}
    </Button>
  )
}
