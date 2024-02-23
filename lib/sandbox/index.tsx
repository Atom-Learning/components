import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Menu, Flex, globalCss, ColorScheme, DropdownMenu, HighlightMatch, Text, Heading, Divider, Input, Combobox } from '../src'

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
      <Heading><HighlightMatch pattern="h">Hey I wrote a highlight matcher</HighlightMatch></Heading>
      <Text><HighlightMatch pattern={/(My|he)/g}>Myrto is here!</HighlightMatch></Text>
      <Text><HighlightMatch pattern="My">Myrto is here! <br />
        works with new lines etc oh my</HighlightMatch></Text>
      <Divider />
      <DropdownMenu defaultOpen={true}>
        <DropdownMenu.TypeaheadTrigger>TypeaheadTrigger</DropdownMenu.TypeaheadTrigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
          </DropdownMenu.Group>
          <DropdownMenu.Group>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
            <DropdownMenu.Link href="http://google.com">A link</DropdownMenu.Link>
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

      <Input placeholder="Eyo" />

      <Combobox onSelect={console.log} openOnFocus>
        <Combobox.Input id="someid" />
        <Combobox.Popover>
          <Combobox.List>
            <Combobox.Option value="Apple" />
            <Combobox.Option value="Banana" />
            <Combobox.Option value="Cranberry" />
            <Combobox.Option value="Dragon fruit" />

            <Flex css={{ alignItems: 'center', p: '$2' }}>
              <Input size="sm" placeholder="New fruit" />

            </Flex>
          </Combobox.List>
        </Combobox.Popover>
      </Combobox>


    </Flex>
  </ColorScheme>
)

ReactDOM.render(<App />, document.getElementById('root'))
