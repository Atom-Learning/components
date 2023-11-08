import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Flex, globalCss } from '../src'

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
    <Box />
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
