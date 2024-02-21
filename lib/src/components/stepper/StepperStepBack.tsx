import * as React from 'react'

import { Button } from '../button'
import { useStepper } from './stepper-context/StepperContext'
import { IStepperNavigateProps } from './types'

export const StepperStepBack = ({
  label,
  children,
  ...rest
}: IStepperNavigateProps & React.ComponentProps<typeof Button>) => {
  const { activeStep, goToPreviousStep } = useStepper()
  return (
    <Button
      size="sm"
      appearance="outline"
      {...rest}
      disabled={activeStep === 0}
      onClick={goToPreviousStep}
    >
      {children || label?.(activeStep)}
    </Button>
  )
}
