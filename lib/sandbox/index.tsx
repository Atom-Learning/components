import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Button, Flex, globalCss, SectionMessage } from '../src'

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
    <SectionMessage css={{ width: 300 }}>
      <SectionMessage.Content>
        <SectionMessage.Title>Title message</SectionMessage.Title>
        <SectionMessage.Description>
          This is the description
        </SectionMessage.Description>
      </SectionMessage.Content>
      <SectionMessage.Actions>
        <Button size="sm">Button</Button>
        <Button size="sm" appearance="outline">
          Button
        </Button>
      </SectionMessage.Actions>
      <SectionMessage.Icon />
      <SectionMessage.Close />
    </SectionMessage>
    <Box />
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
