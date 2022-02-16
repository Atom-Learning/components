import * as React from 'react'

import { Flex } from '~/components/flex'

import { ProgressIndicatorProvider } from './progress-indicator-context/ProgressIndicatorContext'
import { ProgressIndicatorNavigateNext } from './ProgressIndicatorNavigateNext'
import { ProgressIndicatorNavigatePrevious } from './ProgressIndicatorNavigatePrevious'
import { ProgressIndicatorSteps } from './ProgressIndicatorSteps'
import { IProgressIndicatorProps } from './types'

export const ProgressIndicator: React.FC<IProgressIndicatorProps> & {
  NavigatePrevious: typeof ProgressIndicatorNavigatePrevious
  NavigateNext: typeof ProgressIndicatorNavigateNext
  Steps: typeof ProgressIndicatorSteps
} = ({ children, stepCount, allowSkip, onComplete }) => {
  return (
    <ProgressIndicatorProvider
      stepCount={stepCount}
      allowSkip={allowSkip}
      onComplete={onComplete}
    >
      <Flex
        aria-label="progress"
        css={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {children}
      </Flex>
    </ProgressIndicatorProvider>
  )
}

ProgressIndicator.NavigatePrevious = ProgressIndicatorNavigatePrevious
ProgressIndicator.NavigateNext = ProgressIndicatorNavigateNext
ProgressIndicator.Steps = ProgressIndicatorSteps

ProgressIndicator.displayName = 'ProgressIndicator'
