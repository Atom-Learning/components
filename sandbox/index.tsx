import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss } from '../dist'
import { RadioButton } from '../src/components/radio/RadioButton';
import { RadioButtonGroup } from '../src/components/radio/RadioButtonGroup';

globalCss(reset)()

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
        <RadioButton value="1" css={{m: 10}} />
        <RadioButton value="2" css={{m: 10}} />
        <RadioButton value="3" disabled />
      </RadioButtonGroup>
        
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
