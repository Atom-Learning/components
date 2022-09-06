import {
  Bag,
  CalendarEvent,
  Camera,
  Cart,
  ChatAlt,
  Feed
} from '@atom-learning/icons'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import {
  Box,
  Divider,
  Flex,
  globalCss,
  Icon,
  Link,
  NavigationMenu,
  styled,
  Text
} from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

export const StyledMobileDivider = styled(Divider, {
  my: '$5',
  display: 'block'
})

const LinkTitle = styled('div', {
  color: 'inherit',
  py: '$1'
})

const LinkText = styled('p', {
  color: 'inherit',
  lineHeight: 1.5,
  mt: '$1',
  fontWeight: 400,
  fontSize: 14
})

const ContentListItem = ({ href, title, children, icon, ...props }) => {
  return (
    <NavigationMenu.DropdownItem
      href={href}
      css={{ display: 'flex', gap: '$3' }}
      {...props}
    >
      <Box>
        <Icon is={icon} />
      </Box>
      <Box>
        <LinkTitle>{title}</LinkTitle>
        {children && <LinkText>{children}</LinkText>}
      </Box>
    </NavigationMenu.DropdownItem>
  )
}

const App = () => {
  return (
    <Box>
      <Flex css={{ justifyContent: 'start', p: '$3' }}>
        <NavigationMenu>
          <NavigationMenu.Dropdown title="Parents" active>
            <NavigationMenu.DropdownContent
              css={{
                display: 'grid',
                gap: '$1',
                gridAutoFlow: 'column',
                width: 500,
                gridTemplateRows: 'repeat(2, 1fr)'
              }}
            >
              <ContentListItem
                href="/docs/primitives/overview/introduction"
                title="Introduction"
                icon={Feed}
              >
                This is an introduction about the application.
              </ContentListItem>
              <ContentListItem
                href="/docs/primitives/overview/getting-started"
                title="Getting Started"
                icon={Bag}
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>

              <ContentListItem
                href="/docs/primitives/overview/styling"
                title="Styling"
                icon={Camera}
              >
                Unstyled and compatible with any styling solution.
              </ContentListItem>

              <ContentListItem
                href="/docs/primitives/overview/animation"
                title="Animation"
                icon={CalendarEvent}
              >
                Use CSS keyframes or any animation library of your choice.
              </ContentListItem>
            </NavigationMenu.DropdownContent>
          </NavigationMenu.Dropdown>
          <NavigationMenu.Dropdown title="Schools">
            <NavigationMenu.DropdownContent
              css={{
                display: 'grid',
                gap: '$1',
                gridAutoFlow: 'column',
                width: 600,
                gridTemplateRows: 'repeat(3, 1fr)'
              }}
            >
              <ContentListItem
                href="/docs/primitives/overview/introduction"
                title="Introduction"
                icon={Feed}
              >
                This is an introduction about the application.
              </ContentListItem>
              <ContentListItem
                href="/docs/primitives/overview/getting-started"
                title="Getting Started"
                icon={Bag}
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>

              <ContentListItem
                href="/docs/primitives/overview/styling"
                title="Styling"
                icon={Camera}
              >
                Unstyled and compatible with any styling solution.
              </ContentListItem>

              <ContentListItem
                href="/docs/primitives/overview/animation"
                title="Animation"
                icon={CalendarEvent}
              >
                Use CSS keyframes or any animation library of your choice.
              </ContentListItem>

              <ContentListItem
                href="/docs/primitives/overview/accessibility"
                title="Accessibility"
                icon={Cart}
              >
                Tested in a range of browsers and assistive technologies.
              </ContentListItem>
              <ContentListItem
                href="/docs/primitives/overview/releases"
                title="Releases"
                icon={ChatAlt}
              >
                Radix Primitives releases and their changelogs.
              </ContentListItem>
            </NavigationMenu.DropdownContent>
          </NavigationMenu.Dropdown>
          <NavigationMenu.Link href="/help">Pricing Plans</NavigationMenu.Link>
        </NavigationMenu>
      </Flex>
      <Flex
        css={{
          minHeight: '150vh',
          flexDirection: 'column',
          background: 'white',
          p: '$4',
          '@md': {
            p: '$5'
          }
        }}
      >
        <Box css={{ border: '1px solid red' }}>
          <Flex css={{ p: '$4', justifyContent: 'center' }}>
            <Text>Main</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
