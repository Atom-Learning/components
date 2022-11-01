import invariant from 'invariant'
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
  direction = 'horizontal',
  steps,
  hideLabels = false,
  showCompletedIcons = false,
  css
}) => {
  invariant(
    !(stepCount && steps),
    '`Stepper` should only be given one of `stepCount` or `steps`. When both are provided, `steps` will be used and `stepCount` will be ignored.'
  )

  const count = steps?.length || stepCount || 0

  return (
    <StepperProvider
      stepCount={count}
      allowSkip={allowSkip}
      onComplete={onComplete}
      onStepChange={stepCount ? onStepChange : undefined}
      direction={direction}
      steps={steps || Array(count).fill('')}
      hideLabels={hideLabels}
      showCompletedIcons={showCompletedIcons}
    >
      <Box
        aria-label="progress"
        css={{
          width: '100%',
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
