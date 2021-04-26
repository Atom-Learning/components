import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Combobox, globalCss, Label, Select } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ mx: 'auto', width: '400px', mt: '$3' }}>
      <Label css={{ mb: '$2' }}>What's your favourite fruit?</Label>
      <Combobox onSelect={console.log} openOnFocus persistSelection>
        <Combobox.Option value="Apple" />
        <Combobox.Option value="Banana" />
        <Combobox.Option value="Cranberry" />
        <Combobox.Option value="Dragon fruit" />
      </Combobox>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
