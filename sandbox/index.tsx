import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css, Text } from '../dist'

css.global(reset)()

const App = () => {
  return (
    <Box>
      <Text css={{ color: '$primary500' }}>hello</Text>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
