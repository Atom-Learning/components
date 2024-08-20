import { DialogContent } from '@radix-ui/react-dialog'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Menu, Flex, globalCss, ColorScheme, DropdownMenu, HighlightMatch, Heading, Divider, Input, Combobox, Dialog, KeyboardShortcut, TileInteractive } from '../src'
import { useWindowSize } from '../src/utilities/hooks/useWindowSize'
globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const MenuImplementation = () => (

  <Menu.Content>
    <Menu.Group>
      <Menu.Label>Hello</Menu.Label>
      <Menu.Link onClick={() => console.log(123)}>Link 1</Menu.Link>
      <Menu.Link href="#">Link 2</Menu.Link>
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
  </Menu.Content>

)

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [dialogContentEl, setDialogContentEl] = React.useState(null)
  const handleSetDialogContentEl = React.useCallback((el) => el && setDialogContentEl(el), [])

  const { width: windowWidth } = useWindowSize()
  console.log(isOpen, dialogContentEl)

  return (
    <ColorScheme base="primary1" accent="grey2" interactive="loContrast" asChild>
      <Flex
        css={{
          minHeight: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <KeyboardShortcut onKeydown={(e) => console.log(e)} targetRef={dialogContentEl}> Any key</KeyboardShortcut>
        <HighlightMatch as={Heading} pattern="h">Hey I wrote a highlight matcher</HighlightMatch>
        <HighlightMatch pattern={/(My|he)/g} size="sm" noCapsize>Myrto is here!</HighlightMatch>
        <HighlightMatch pattern="My">Myrto is here! <br />
          works with new lines etc oh my</HighlightMatch>
        <Divider />
        <Menu open modal={false}>
          {windowWidth <= 700 ? (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Trigger>TRIGGER</Dialog.Trigger>
              <Dialog.Content ref={handleSetDialogContentEl} forceMount css={{ position: 'relative !important' }} >
                <MenuImplementation />
              </Dialog.Content>
            </Dialog>
          ) : (
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenu.TypeaheadTrigger>TypeaheadTrigger</DropdownMenu.TypeaheadTrigger>
              <DropdownMenu.Content >
                <MenuImplementation />

                {/* <DropdownMenu.Group>
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
              </DropdownMenu.Group> */}

              </DropdownMenu.Content>

            </DropdownMenu>
          )}
        </Menu>

        roving-focus worked better. where is the damn menu
        <Menu modal={false} dir='ltr' open defaultOpen forceMount forceOpen >
          <Menu.Content forceMount>

            <Menu.Group>
              <Menu.Label>Hello</Menu.Label>
              <Menu.Link onClick={() => console.log(123)}>Link 1</Menu.Link>
              <Menu.Link href="#">Link 2</Menu.Link>
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
          </Menu.Content>

        </Menu>
        {/*
      <Input placeholder="Eyo" />

      <Combobox aria-label="Combobox" onSelect={console.log} openOnFocus>
        <Combobox.Input id="someid" />
        <Combobox.Popover>
          <Combobox.List>
            <Combobox.Option value="Apple" />
            <Combobox.Option value="Banana" />
            <Combobox.Option value="Cranberry" />
            <Combobox.Option value="Dragon fruit" />

            <Flex css={{ alignItems: 'center', p: '$2' }}>
              <Input size="sm" placeholder="New fruit" /> {/*** MenuAdd: IF I need it/}

    </Flex>
  </Combobox.List>
        </Combobox.Popover >
      </Combobox > */}


      </Flex >
    </ColorScheme >)
}


ReactDOM.render(<App />, document.getElementById('root'))
