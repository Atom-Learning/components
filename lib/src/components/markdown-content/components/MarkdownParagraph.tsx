import { Content, Paragraph } from 'mdast'
import * as React from 'react'

import { CSS } from '~/stitches'

import { Text } from '../../text'

type MarkdownParagraphProps = {
  node: Paragraph
  handleNode: (node: Content) => React.ReactElement
  css?: CSS
}

export const MarkdownParagraph: React.FC<MarkdownParagraphProps> = ({
  node,
  handleNode,
  css
}) => (
  <Text css={{ color: 'inherit', ...css } as CSS}>
    {node.children?.map(handleNode)}
  </Text>
)
