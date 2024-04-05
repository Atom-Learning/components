import invariant from 'invariant'
import * as React from 'react'

import { Box } from '../box/Box'
import { StepperProvider } from './stepper-context/StepperContext'
import { StepperStepBack } from './StepperStepBack'
import { StepperStepForward } from './StepperStepForward'
import { StepperSteps } from './StepperSteps'
import { IStepperProps } from './types'

const StepperComponent = ({
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
}: React.PropsWithChildren<IStepperProps>) => {
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

export const Stepper = Object.assign(StepperComponent, {
  StepBack: StepperStepBack,
  StepForward: StepperStepForward,
  Steps: StepperSteps
})

StepperComponent.displayName = 'Stepper'
