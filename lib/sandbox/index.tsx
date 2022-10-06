import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, Flex, globalCss, Dialog, DropdownMenu } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content css={{ height: '300px' }}>
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button>Dropdown</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>1</DropdownMenu.Item>
            <DropdownMenu.Item>2</DropdownMenu.Item>
            <DropdownMenu.Item>3</DropdownMenu.Item>
            <DropdownMenu.Item>4</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Dialog.Content>
    </Dialog>
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
