import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, InputField,PasswordField } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ width: '300px', margin: '0 auto' }}>
      <InputField name="username" label="Username" css={{ mb: '$3' }} />
      <PasswordField />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
