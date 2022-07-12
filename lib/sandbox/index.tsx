import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Flex, globalCss, Stepper } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <Stepper
      css={{ my: '$5' }}
      steps={[
        { label: 'Step 1', status: 'success' },
        { label: 'Step 2', status: 'success' },
        { label: 'Step 3', status: 'active' },
        { label: 'Step 4', status: 'normal' },
        { label: 'Step 5', status: 'normal' }
      ]}
    >
      <Stepper.Steps />
    </Stepper>
    <Stepper
      css={{ my: '$5' }}
      steps={[
        { label: 'This is a longer step label', status: 'viewed' },
        { label: 'This is a longer step label', status: 'viewed' },
        { label: 'This is a longer step label', status: 'viewed' },
        { label: 'This is a longer step label', status: 'active' },
        { label: 'This is a longer step label', status: 'normal' }
      ]}
    >
      <Stepper.Steps />
    </Stepper>
    <Stepper
      css={{ my: '$5' }}
      orientation="vertical"
      steps={[
        { label: 'Step 1', status: 'success' },
        { label: 'Step 2', status: 'active' },
        { label: 'Step 3', status: 'normal' }
      ]}
    >
      <Stepper.Steps />
    </Stepper>
    <Stepper
      css={{ my: '$5', display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}
      allowSkip
      stepCount={3}
    >
      <Stepper.StepBack>Back</Stepper.StepBack>
      <Stepper.Steps />
      <Stepper.StepForward>Next</Stepper.StepForward>
    </Stepper>
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
