import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box } from '../src'

globalCss(reset)()

const App = () => {
  return <Box />
}

ReactDOM.render(<App />, document.getElementById('root'))
