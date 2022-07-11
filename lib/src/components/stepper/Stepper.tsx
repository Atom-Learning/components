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
} = ({
  children,
  stepCount,
  allowSkip,
  onComplete,
  onStepChange,
  orientation,
  steps,
  css
}) => {
  const count = steps?.length || stepCount

  return (
    <StepperProvider
      stepCount={count}
      allowSkip={allowSkip}
      onComplete={onComplete}
      onStepChange={stepCount ? onStepChange : undefined}
      orientation={orientation}
      steps={steps || Array(count).fill('')}
    >
      <Box
        aria-label="progress"
        aria-orientation={orientation}
        data-testid={orientation}
        css={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          ...css
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
