import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Tooltip } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ paddingLeft: '$3' }}>
      <Tooltip content="hi there">
        <button>Hello</button>
      </Tooltip>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
