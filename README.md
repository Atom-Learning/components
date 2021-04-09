# Atom Learning Components

![badge](https://img.shields.io/npm/v/@atom-learning/components)
![badge](https://img.shields.io/github/workflow/status/Atom-Learning/components/Test%20&%20validate)
![badge](https://img.shields.io/bundlephobia/minzip/@atom-learning/components)

`@atom-learning/components` is a collection of generic React components built using [stitches](https://stitches.dev), it includes components that cover layout, content, data collection, media and a host of other UI concerns. It uses `@atom-learning/theme` to provide the design tokens for color, typography, spacing and layout.

```
yarn add @atom-learning/components @atom-learning/theme
```

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

You can read more about the components included in `@atom-learning/components` at [https://atomlearning-docs-f4ydu.ondigitalocean.app](https://atomlearning-docs-f4ydu.ondigitalocean.app)
