import * as React from 'react'

import { Flex } from '~/components/flex'

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
      <Flex
        aria-label="progress"
        css={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {children}
      </Flex>
    </StepperProvider>
  )
}

Stepper.StepBack = StepperStepBack
Stepper.StepForward = StepperStepForward
Stepper.Steps = StepperSteps

Stepper.displayName = 'Stepper'
