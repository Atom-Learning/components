import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, globalCss } from '../src'

globalCss(reset)()

const App = () => {
  return <Box>
    <Button
      onClick={() => console.log('sdfd')}
    >
      Anything
    </Button>
  </Box>
}

ReactDOM.render(<App />, document.getElementById('root'))
