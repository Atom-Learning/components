import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, InputField } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ p: '$3', width: '30ch' }}>
      <InputField label="Name" error="Name is a required field" name="name" />
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
