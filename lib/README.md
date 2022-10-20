# Component Library

![badge](https://img.shields.io/npm/v/@atom-learning/components)
![badge](https://img.shields.io/github/workflow/status/Atom-Learning/components/Test%20&%20validate)
![badge](https://img.shields.io/bundlephobia/minzip/@atom-learning/components)

`lib/`, released as `@atom-learning/components`, is a collection of generic React components built using [stitches](https://stitches.dev) and [radix](https://www.radix-ui.com/), it includes components that cover layout, content, data collection, media and a host of other UI concerns. It uses `@atom-learning/theme` to provide the design tokens for color, typography, spacing and layout.

You can read about the components included in `@atom-learning/components` at [https://design.atomlearning.technology](https://design.atomlearning.technology)

## Getting started

Install the publicly available `@atom-learning/components `npm package:

```
yarn add @atom-learning/components
```

Import and use in your project:

```jsx
import { Box, Heading, Text } from '@atom-learning/components'

const Component = () => {
  return (
    <Box as="article">
      <Heading css={{ mb: '$3' }}>This is a heading</Heading>
      <Text>This is a paragraph of text</Text>
    </Box>
  )
}
```
