import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Close } from '@atom-learning/icons'
import { Box, Flex, globalCss, SideBar, Expandable, NavigationMenuVertical, Icon, Brand } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      bg: 'red'
    }}
  >
    <Box css={{ bg: 'orange' }}>
      <Expandable>
        <SideBar css={{ maxWidth: 200 }}>
          <SideBar.Header>
            <Brand href="atomlearning.co.uk">
              <Brand.Logo />
              <Brand.Text>Eyo</Brand.Text>
            </Brand>
          </SideBar.Header>
          <SideBar.Main>
            <NavigationMenuVertical>
              <NavigationMenuVertical.Link active onClick={() => { console.log(1) }}><Icon is={Close} />One</NavigationMenuVertical.Link>
              <NavigationMenuVertical.Link href="google.com"><Icon is={Close} />Two</NavigationMenuVertical.Link>
            </NavigationMenuVertical>
          </SideBar.Main>
          <SideBar.Footer></SideBar.Footer>
        </SideBar>
      </Expandable>
    </Box>
    <Box css={{ bg: 'orange' }}>
      <Expandable>
        <SideBar css={{ maxWidth: 200 }}>
          <SideBar.Header></SideBar.Header>
          <SideBar.Main>
            <NavigationMenuVertical>
              <NavigationMenuVertical.Link active onClick={() => { console.log(1) }}><Icon is={Close} />One</NavigationMenuVertical.Link>
              <NavigationMenuVertical.Link href="google.com"><Icon is={Close} />Two</NavigationMenuVertical.Link>
              <NavigationMenuVertical.Accordion>
                <NavigationMenuVertical.AccordionTrigger><Icon is={Close} />Trigger 1</NavigationMenuVertical.AccordionTrigger>
                <NavigationMenuVertical.AccordionContent>
                  <NavigationMenuVertical.Link onClick={() => { console.log(1) }}><Icon is={Close} />Nested: One</NavigationMenuVertical.Link>
                  <NavigationMenuVertical.Link onClick={() => { console.log(2) }}><Icon is={Close} />Nested: Two</NavigationMenuVertical.Link>
                </NavigationMenuVertical.AccordionContent>
              </NavigationMenuVertical.Accordion>
              <NavigationMenuVertical.Accordion defaultOpen={true}>
                <NavigationMenuVertical.AccordionTrigger>Trigger 2</NavigationMenuVertical.AccordionTrigger>
                <NavigationMenuVertical.AccordionContent>
                  <NavigationMenuVertical.Link onClick={() => { console.log(3) }}><Icon is={Close} />Nested: Three</NavigationMenuVertical.Link>
                  <NavigationMenuVertical.Link onClick={() => { console.log(4) }}>Nested: Four</NavigationMenuVertical.Link>
                </NavigationMenuVertical.AccordionContent>
              </NavigationMenuVertical.Accordion>
              <NavigationMenuVertical.Accordion value={4}>
                <NavigationMenuVertical.AccordionTrigger>Trigger With Submenu</NavigationMenuVertical.AccordionTrigger>
                <NavigationMenuVertical.AccordionContent>
                  <NavigationMenuVertical.Link href="#1">Nested: #1</NavigationMenuVertical.Link>
                  <NavigationMenuVertical.Link href="#2">Nested: #2</NavigationMenuVertical.Link>
                  <NavigationMenuVertical.Link href="#3">Nested: #3</NavigationMenuVertical.Link>
                  <NavigationMenuVertical.Accordion value='nested-trigger-1'>
                    <NavigationMenuVertical.AccordionTrigger >Nested</NavigationMenuVertical.AccordionTrigger>
                    <NavigationMenuVertical.AccordionContent>
                      <NavigationMenuVertical.Link href="#4">Nested: #4</NavigationMenuVertical.Link>
                      <NavigationMenuVertical.Accordion value='nested-trigger-2'>
                        <NavigationMenuVertical.AccordionTrigger>Nested Nested</NavigationMenuVertical.AccordionTrigger>
                        <NavigationMenuVertical.AccordionContent>
                          <NavigationMenuVertical.Link href="#5">Nested: #5</NavigationMenuVertical.Link>
                        </NavigationMenuVertical.AccordionContent>
                      </NavigationMenuVertical.Accordion>
                    </NavigationMenuVertical.AccordionContent>
                  </NavigationMenuVertical.Accordion>
                </NavigationMenuVertical.AccordionContent>
              </NavigationMenuVertical.Accordion>
            </NavigationMenuVertical>
          </SideBar.Main>

          <SideBar.Footer></SideBar.Footer>
        </SideBar>
      </Expandable>
    </Box>
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
