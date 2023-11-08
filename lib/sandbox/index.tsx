import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import {
  HomeAlt,
  Add,
  Timer,
  Chart,
  Settings,
  Exit,
  Verified
} from '@atom-learning/icons'
import {
  Box,
  Text,
  ColorScheme,
  Flex,
  SideBar,
  NavigationMenuVertical,
  StackContent,
  globalCss,
  Divider,
  TopBar
} from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <ColorScheme base="grey1" accent="blue1" interactive="loContrast">
    <TopBar>sdofinsdg</TopBar>
    <Flex css={{ minHeight: '100vh' }}>
      <SideBar type="static">
        <SideBar.Header
          css={{
            px: '$2',
            minHeight: '64px',
            alignItems: 'end',
            display: 'flex',
            transition: 'padding 150ms ease-out',
            '[aria-expanded="true"] &': { px: '$4' }
          }}
        >
          <SideBar.Brand href="atomlearning.co.uk">
            <SideBar.BrandLogo
              src="https://app.atomlearning.com/public/assets/logo-2d023a15.svg"
              css={{ width: '70px' }}
            />
          </SideBar.Brand>
        </SideBar.Header>
        <SideBar.Main tabIndex={-1}>
          <NavigationMenuVertical>
            <NavigationMenuVertical.Link active>
              <NavigationMenuVertical.Icon is={HomeAlt} />
              Home
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link>
              <NavigationMenuVertical.Icon is={Add} />
              Set assessment
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link>
              <NavigationMenuVertical.Icon is={Timer} />
              Active assessments
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link>
              <NavigationMenuVertical.Icon is={Chart} />
              Assessment results
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link>
              <NavigationMenuVertical.Icon is={Settings} />
              Management
            </NavigationMenuVertical.Link>
            <Divider css={{ my: '$2 !important' }} />
            <NavigationMenuVertical.Link>
              <NavigationMenuVertical.Icon is={Verified} />
              Cookie Preferences
            </NavigationMenuVertical.Link>
            <Divider css={{ my: '$2 !important' }} />
            <NavigationMenuVertical.Link>
              <NavigationMenuVertical.Icon is={Exit} />
              Log out
            </NavigationMenuVertical.Link>
          </NavigationMenuVertical>
        </SideBar.Main>
        {/* <SideBar.Footer>
          <Text>Footer</Text>
        </SideBar.Footer> */}
      </SideBar>

      <Box css={{ p: '$6', height: '200vh' }}>
        <StackContent>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officia sint praesentium temporibus saepe, et natus unde iusto
            repellat velit, repellendus, fuga molestiae voluptatum consequatur
            totam. Pariatur voluptatibus ipsum recusandae?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officia sint praesentium temporibus saepe, et natus unde iusto
            repellat velit, repellendus, fuga molestiae voluptatum consequatur
            totam. Pariatur voluptatibus ipsum recusandae?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officia sint praesentium temporibus saepe, et natus unde iusto
            repellat velit, repellendus, fuga molestiae voluptatum consequatur
            totam. Pariatur voluptatibus ipsum recusandae?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officia sint praesentium temporibus saepe, et natus unde iusto
            repellat velit, repellendus, fuga molestiae voluptatum consequatur
            totam. Pariatur voluptatibus ipsum recusandae?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officia sint praesentium temporibus saepe, et natus unde iusto
            repellat velit, repellendus, fuga molestiae voluptatum consequatur
            totam. Pariatur voluptatibus ipsum recusandae?
          </Text>
        </StackContent>
      </Box>
    </Flex>
  </ColorScheme>
)

ReactDOM.render(<App />, document.getElementById('root'))
