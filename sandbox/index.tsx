import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css } from '../dist'

css.global(reset)()

const App = () => {
  return <Box />
}

ReactDOM.render(<App />, document.getElementById('root'))
