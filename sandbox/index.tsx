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
        Render whatever you like — even text in a box!!
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
