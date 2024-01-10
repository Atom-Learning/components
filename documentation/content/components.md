---
slug: getting-started
title: Getting started
links:
  viewSource: components
tabs:
  - title: Main
    content: >-
      Atom Learning’s component library is a collection of generic React
      components built using stitches, including components that cover layout,
      content, data collection, media and a host of other UI concerns


      ## Getting started


      Install the three packages to gain access to the components, icons and design tokens.


      ```shell

      yarn add @atom-learning/components @atom-learning/icons @atom-learning/theme

      ```


      All components are available as named exports from `@atom-learning/components` .\

      Icons as named exports from `@atom-learning/icons`. \

      The theme is consumed automatically by `@atom-learning/components` to provide the relevant token references for the `css` prop and `styled` function.


      ```tsx

      import { ChevronRight } from '@atom-learning/icons'

      import { Box, Heading, Icon, Text } from '@atom-learning/components'


      const Component = () => (
        <Box as="article">
          <Heading css={{ mb: '$3' }}>
            <Icon is={ChevronRight} css={{ mr: '$2' }} />
            This is a heading
          </Heading>
          <Text>This is a paragraph of text</Text>
        </Box>
      )

      ```


      Refer to the individual component documentation for recommended usage and API references for each component, as well as the theme documentation to understand the design token usage.
nestedSlug:
  - components
parent: CJspWBO-6KLOSzVOdevgR
uuid: J3bsmpB7-_uuqm05peuTA
---
