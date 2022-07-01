import * as React from 'react'

import { Box } from '../box/Box'
import { StepperProvider } from './stepper-context/StepperContext'
import { StepperStepBack } from './StepperStepBack'
import { StepperStepForward } from './StepperStepForward'
import { StepperSteps } from './StepperSteps'
import { IStepperProps } from './types'

export const Stepper: React.FC<IStepperProps> & {
  StepBack: typeof StepperStepBack
  StepForward: typeof StepperStepForward
  Steps: typeof StepperSteps
} = ({ children, stepCount, allowSkip, onComplete, onStepChange }) => {
  return (
    <StepperProvider
      stepCount={stepCount}
      allowSkip={allowSkip}
      onComplete={onComplete}
      onStepChange={onStepChange}
    >
      <Box
        aria-label="progress"
        css={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr'
        }}
      >
        {children}
      </Box>
    </StepperProvider>
  )
}

Stepper.StepBack = StepperStepBack
Stepper.StepForward = StepperStepForward
Stepper.Steps = StepperSteps

Stepper.displayName = 'Stepper'
