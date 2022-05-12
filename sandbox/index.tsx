import { Upload } from '@atom-learning/icons'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Flex, globalCss } from '../src'
import { Icon } from '~/components/icon'
import { ToggleGroup } from '~/components/toggle-group'

import { MarkdownContent } from '~/components/markdown-content'
import { Box } from '~/components/box'
import { Heading } from '~/components/heading'
import { Text } from '~/components/text'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      flexDirection: 'column'
    }}
  >
    <Box css={{ p: '$3', my: '$4', background: '$tonal100', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ToggleGroup.Root type="multiple" gap={3} defaultValue={["a", "b"]}>
        <ToggleGroup.Card value="a">
          <Box css={{ background: '$tonal50', size: '160px', borderRadius: '50%', display: 'inline-block' }} />
          <Heading>Standard</Heading>
          <Text>Used for most texts, this layout has generic font and margins</Text>
        </ToggleGroup.Card>
        <ToggleGroup.Card value="b">
          <Box css={{ background: '$tonal50', size: '160px', borderRadius: '50%', display: 'inline-block' }} />
          <Heading>Standard</Heading>
          <Text>Used for most texts, this layout has generic font and margins</Text>
        </ToggleGroup.Card>
        <ToggleGroup.Card value="c">
          <Box css={{ background: '$tonal50', size: '160px', borderRadius: '50%', display: 'inline-block' }} />
          <Heading>Standard</Heading>
          <Text>Used for most texts, this layout has generic font and margins</Text>
        </ToggleGroup.Card>
      </ToggleGroup.Root>
    </Box>
    <MarkdownContent content='

# ToggleGroup

Component that lets users toggle between a group of limited options(Suggested range is 2-6 options).

Functionality based on the [`ToggleGroup`](https://www.radix-ui.com/docs/primitives/components/toggle-group) radix component, which already allows for: single/multiple select, disabling or partly disabling options, adds keyboard navigation and orientation and more.

Extends visually by allowing for vertical/horizontal display, gaps using stack or joined, rounded corners and so on.

## Orientation
`orientation="vertical | horizontal"`
' />
    <Box css={{ p: '$3', my: '$4', background: '$tonal100', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ToggleGroup.Root type="single" orientation="horizontal">
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>

      <br />
      <ToggleGroup.Root type="single" orientation="vertical">
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>
    </Box>
    <MarkdownContent content='
```
<ToggleGroup.Root type="multiple" orientation="vertical">
  <ToggleGroup.Button value="a">A</ToggleGroup.Button>
  <ToggleGroup.Button value="b">B</ToggleGroup.Button>
</ToggleGroup.Root>
```

## Gap
`gap="0 | 1 | 2 | .... | 8"`
' />

    <Box css={{ p: '$3', my: '$4', background: '$tonal100', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ToggleGroup.Root type="single" gap={3}>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>
      <br />
      <ToggleGroup.Root type="single" orientation="vertical" gap={3}>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>
    </Box>
    <MarkdownContent content='
```
<ToggleGroup.Root type="single" gap={3}>
  <ToggleGroup.Button value="a">A</ToggleGroup.Button>
  <ToggleGroup.Button value="b">B</ToggleGroup.Button>
</ToggleGroup.Root>
```

## Size
`size="sm | md | lg"`
' />

    <Box css={{ p: '$3', my: '$4', background: '$tonal100', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ToggleGroup.Root type="single" gap={3} size="sm">
        <ToggleGroup.Button value="a"><Icon is={Upload} /> A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="icon"><Icon is={Upload} /></ToggleGroup.Button>
      </ToggleGroup.Root>
      <br />
      <ToggleGroup.Root type="single" gap={3} size="md">
        <ToggleGroup.Button value="a"><Icon is={Upload} /> A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="icon"><Icon is={Upload} /></ToggleGroup.Button>
      </ToggleGroup.Root>
      <br />
      <ToggleGroup.Root type="single" gap={3} size="lg">
        <ToggleGroup.Button value="a"><Icon is={Upload} /> A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="icon"><Icon is={Upload} /></ToggleGroup.Button>
      </ToggleGroup.Root>
    </Box>
    <MarkdownContent content='
```
<ToggleGroup.Root type="single" gap={3} size="sm">
  <ToggleGroup.Button value="a"><Icon is={Upload} /> A</ToggleGroup.Button>
  <ToggleGroup.Button value="b">B</ToggleGroup.Button>
  <ToggleGroup.Button value="icon"><Icon is={Upload} /></ToggleGroup.Button>
</ToggleGroup.Root>
```

## Full width
`isFullWidth={boolean}`
' />

    <Box css={{ p: '$3', my: '$4', background: '$tonal100', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ToggleGroup.Root type="multiple" isFullWidth gap={3}>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c">C</ToggleGroup.Button>
      </ToggleGroup.Root>
    </Box>

    <MarkdownContent content='
```
<ToggleGroup.Root type="multiple" isFullWidth gap={3}>
  <ToggleGroup.Button value="a">A</ToggleGroup.Button>
  <ToggleGroup.Button value="b">B</ToggleGroup.Button>
  <ToggleGroup.Button value="c">C</ToggleGroup.Button>
</ToggleGroup.Root>
```

## Disabled
### Partially
' />

    <Box css={{ p: '$3', my: '$4', background: '$tonal100', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ToggleGroup.Root type="multiple" gap={3} defaultValue="a">
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c" disabled>C</ToggleGroup.Button>
      </ToggleGroup.Root>
    </Box>
    <MarkdownContent content='
```
<ToggleGroup.Root type="multiple" gap={3} defaultValue="a">
  <ToggleGroup.Button value="a">A</ToggleGroup.Button>
  <ToggleGroup.Button value="b">B</ToggleGroup.Button>
  <ToggleGroup.Button value="c" disabled>C</ToggleGroup.Button>
</ToggleGroup.Root>
```

### Fully
' />
    <Box css={{ p: '$3', my: '$4', background: '$tonal100', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ToggleGroup.Root type="multiple" gap={3} defaultValue="a" disabled>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c">C</ToggleGroup.Button>
      </ToggleGroup.Root>
    </Box>
    <MarkdownContent content='
```
<ToggleGroup.Root type="multiple" gap={3} defaultValue="a" disabled>
  <ToggleGroup.Button value="a">A</ToggleGroup.Button>
  <ToggleGroup.Button value="b">B</ToggleGroup.Button>
  <ToggleGroup.Button value="c">C</ToggleGroup.Button>
</ToggleGroup.Root>
```
' />
  </Flex >
)

ReactDOM.render(<App />, document.getElementById('root'))
