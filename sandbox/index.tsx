import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Box } from '../dist'
import { Sandbox } from './Sandbox'

const App = () => {
  return (
    <Sandbox>
      <Box
        css={{
          height: '250px',
          width: '250px',
          p: '$3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          backgroundColor: 'papayawhip'
        }}
      >
        Use this app to quickly render components in an environment where you
        have more control than in Storybook. But don't commit changes to this
        app into the main branch!
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
