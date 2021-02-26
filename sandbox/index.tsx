import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Popover } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ m: 10, p: 20 }}>
      <Popover show> Hello</Popover>
      <Popover show align="right">
        Hello from the right
      </Popover>
      <Popover show align="left">
        Hello from the left
      </Popover>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
