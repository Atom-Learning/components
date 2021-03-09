import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss } from '../dist'
globalCss(reset)()

const App = () => {
  return <Box />
}

ReactDOM.render(<App />, document.getElementById('root'))
