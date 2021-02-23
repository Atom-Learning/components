import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Text, Tooltip, Icon, Home } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ padding: '$6 $2' }}>
      <Tooltip content="Go home">
        <Icon is={Home} />
      </Tooltip>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
