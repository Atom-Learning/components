import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Combobox, globalCss, Label, Button, Input, Flex } from '../dist'

globalCss(reset)()

const App = () => {
  return (
    <Box css={{ mx: 'auto', width: '400px', mt: '$3' }}>
      <Label css={{ mb: '$2' }} htmlFor="someid">
        What's your favourite fruit?
      </Label>
      <Combobox onSelect={console.log} openOnFocus>
        <Combobox.Input id="someid" />
        <Combobox.Popover>
          <Combobox.List>
            <Combobox.Option value="Apple" />
            <Combobox.Option value="Banana" />
            <Combobox.Option value="Cranberry" />
            <Combobox.Option value="Dragon fruit" />

            <Flex css={{ alignItems: 'center' }}>
              <Input placeholder="New fruit" css={{ height: '$2' }} />
              <Button
                size="sm"
                css={{ m: '$2' }}
                onClick={() =>
                  alert('Nest other interactive UI here for advanced usecases')
                }
              >
                Add a new fruit
              </Button>
            </Flex>
          </Combobox.List>
        </Combobox.Popover>
      </Combobox>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
