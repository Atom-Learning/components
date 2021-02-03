import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css, Input } from '../dist'
import { Sandbox } from './Sandbox'

css.global(reset)()

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
       <Input defaultValue="hello"/>
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
