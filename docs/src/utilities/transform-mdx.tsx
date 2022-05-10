import {
  Box,
  Divider,
  Heading,
  Link,
  List,
  Text
} from '@atom-learning/components'
import theme from '@atom-learning/theme'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'
import * as React from 'react'

import {
  Cell,
  CodeBlock,
  ColorPalette,
  IconTable,
  InlineCode,
  Scale,
  Table
} from '../components'

const components: MdxRemote.Components = {
  h2: (props) => (
    <Heading
      {...props}
      size="md"
      as="h2"
      css={{ fontWeight: 600, mt: '$8', mb: '$5' }}
    />
  ),
  h3: (props) => (
    <Heading {...props} as="h3" size="sm" css={{ mt: '$5', mb: '$4' }} />
  ),
  h4: (props) => (
    <Heading {...props} as="h4" size="xs" css={{ mt: '$5', mb: '$4' }} />
  ),
  p: (props) => <Text {...props} css={{ color: '$tonal700', mb: '$5' }} />,
  ul: (props) => <List {...props} css={{ mb: '$5' }} />,
  li: List.Item,
  inlineCode: InlineCode,
  blockquote: (props) => (
    <Text
      {...props}
      as="blockquote"
      css={{
        pl: '$5',
        my: '$5',
        color: '$tonal500',
        borderLeft: '2px solid $colors$tonal400'
      }}
    >
      {props.children.props.children}
    </Text>
  ),
  a: Link,
  code: CodeBlock,
  hr: (props) => <Divider {...props} css={{ my: '$8' }} />,
  table: (props) => <Table {...props} css={{ mb: '$5' }} />,
  td: (props) => <Cell size="md" appearance="content" {...props} />,
  th: (props) => <Cell size="md" appearance="heading" {...props} />,
  ColorPalette,
  Scale,
  IconTable,
  Text,
  Box
}

export const mdxToString = async (mdx = ''): Promise<MdxRemote.Source> => {
  return await renderToString(mdx, {
    components,
    scope: { theme }
  })
}

export const stringToMdx = (string: MdxRemote.Source): React.ReactNode => {
  return hydrate(string, {
    components
  })
}
