import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, globalCss, Label, Combobox } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ mx: 'auto', width: '400px', p: '$2' }}>
      <Label htmlFor="fruit" css={{ mb: '$2' }}>
        What's your favourite fruit?
      </Label>
      <Combobox openOnFocus>
        <Combobox.Input id="fruit" />
        <Combobox.Popover>
          <Combobox.List>
            <Combobox.Option value="Apple" />
            <Combobox.Option value="Banana" />
            <Combobox.Option value="Cranberry" />
            <Combobox.Option value="Dragon fruit" />
          </Combobox.List>
        </Combobox.Popover>
      </Combobox>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
