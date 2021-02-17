import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box
      css={{
        border: '1px solid $primary500',
        height: '50%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        m: 10
      }}
    >
      hello
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
