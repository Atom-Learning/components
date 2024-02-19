import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Menu, Flex, globalCss, ColorScheme, DropdownMenu } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <ColorScheme base="primary1" accent="grey2" interactive="loContrast" asChild>
    <Flex
      css={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <DropdownMenu>
        <DropdownMenu.TypeaheadTrigger>TypeaheadTrigger</DropdownMenu.TypeaheadTrigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
          </DropdownMenu.Group>
          <DropdownMenu.Divider />
          <DropdownMenu.Group>

            <DropdownMenu.Link href="/logout">Log Out</DropdownMenu.Link>
            <DropdownMenu.Button href="/logout">Button</DropdownMenu.Button>
          </DropdownMenu.Group>

        </DropdownMenu.Content>
      </DropdownMenu>

      <Menu>
        <Menu.Group>
          <Menu.Label>Hello</Menu.Label>
          <Menu.Link>Link 1</Menu.Link>
          <Menu.Link>Link 2</Menu.Link>
          <Menu.Link>Link 3</Menu.Link>
        </Menu.Group>
        <Menu.Divider />
        <Menu.Group>
          <Menu.Label>Hello</Menu.Label>
          <Menu.Link>Link 4</Menu.Link>
          <Menu.Button onClick={() => console.log(123)}>Button</Menu.Button>
          <Menu.Button onClick={() => console.log(123)}>Button</Menu.Button>
          <Menu.Button onClick={() => console.log(123)}>Button</Menu.Button>
        </Menu.Group>
      </Menu>


    </Flex>
  </ColorScheme>
)

ReactDOM.render(<App />, document.getElementById('root'))
