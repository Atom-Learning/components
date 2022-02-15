import * as React from 'react'

import { Flex } from '~/components/flex'

import { Loader } from '..'
import { ProgressIndicatorProvider } from '.'
import { ProgressIndicatorNavigateNext } from './ProgressIndicatorNavigateNext'
import { ProgressIndicatorNavigatePrevious } from './ProgressIndicatorNavigatePrevious'
import { ProgressIndicatorSteps } from './ProgressIndicatorSteps'
import { IProgressIndicatorProps } from './types'

export const ProgressIndicator: React.FC<IProgressIndicatorProps> & {
  NavigatePrevious: typeof ProgressIndicatorNavigatePrevious
  NavigateNext: typeof ProgressIndicatorNavigateNext
  Steps: typeof ProgressIndicatorSteps
} = ({ children, stepsData, allowSkip }) => {
  return (
    <ProgressIndicatorProvider stepsData={stepsData} allowSkip={allowSkip}>
      <Flex
        aria-label="progress"
        css={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
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
