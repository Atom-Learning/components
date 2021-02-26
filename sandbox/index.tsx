import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Loader } from '../dist'

globalCss(reset)()

const App = () => {
  return <Loader />
}

ReactDOM.render(<App />, document.getElementById('root'))
