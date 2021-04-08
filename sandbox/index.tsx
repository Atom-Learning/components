import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, globalCss, Toast, toast } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ padding: 10 }}>
      <Button onClick={() => toast.error('Wow so easy!')}>Hello</Button>
      <Toast />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
