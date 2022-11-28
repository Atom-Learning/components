import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, Flex, Stack, globalCss } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()


const App = () => {

  const [state, setState] = React.useState(true)
  return (
  <Flex
    css={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <Stack>
      <Button onClick={() => setState(false)}>Yolo</Button>
      {state && <Button>Yolo</Button>}
      <Button>Yolo</Button>
    </Stack>
  </Flex>
)}

ReactDOM.render(<App />, document.getElementById('root'))
