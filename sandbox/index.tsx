import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, css, Label } from '../dist'
import { RadioButton, RadioButtonGroup } from '../src/components/radio/'

css.global(reset)()

const App = () => {
  return (
    <Box
      css={{
        border: '1px solid $primary500',
        height: '50%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        m: 10
      }}
    >
      <RadioButtonGroup>
        <Label>
          <RadioButton value="bla1" />
          hello
        </Label>
        <Label>
          <RadioButton value="bla2" />
          goodbye
        </Label>
      </RadioButtonGroup>

      <Button>Hello</Button>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
