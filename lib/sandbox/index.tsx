import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { Apps, Laptop, People, Book } from '@atom-learning/icons'
import {
  Box,
  Text,
  ColorScheme,
  Flex,
  NavigationMenuVertical,
  StackContent,
  globalCss
} from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <ColorScheme base="grey1" accent="blue1" interactive="loContrast">
    <Flex css={{ minHeight: '100vh' }}>
      <NavigationMenuVertical collapsible css={{ bg: 'white' }}>
        <NavigationMenuVertical.Link active onClick={() => console.log('yolo')}>
          <NavigationMenuVertical.Icon is={Apps} />
          Dashboard
        </NavigationMenuVertical.Link>
        <NavigationMenuVertical.Link onClick={() => console.log('yolo')}>
          <NavigationMenuVertical.Icon is={Book} />
          Practice
        </NavigationMenuVertical.Link>
        <NavigationMenuVertical.Link href="/">
          <NavigationMenuVertical.Icon is={Laptop} />
          Mock test
        </NavigationMenuVertical.Link>
        <NavigationMenuVertical.Link href="/">
          <NavigationMenuVertical.Icon is={People} />
          Students
        </NavigationMenuVertical.Link>
      </NavigationMenuVertical>
      <Box css={{ p: '$6' }}>
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
