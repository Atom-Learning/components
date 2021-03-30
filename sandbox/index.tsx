import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, FieldWrapper, globalCss, Input } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Box css={{ width: '200px', mx: 'auto', p: '$2' }}>
      <FieldWrapper label="Name" htmlFor="name">
        <Input name="name" id="name" />
      </FieldWrapper>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
