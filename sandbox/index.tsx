import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, PasswordField } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <PasswordField
      label="Password"
      name="password"
      prompt={{ label: 'Forgot your password?', link: 'https://google.co.uk' }}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
