import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Flex, globalCss } from '../src'
import { Navigation} from '../src/components/navigation'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      alignItems: 'center',
      flexDirection: 'column',
      background: '#F0F6FE'
    }}
  >
    <Navigation />
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
