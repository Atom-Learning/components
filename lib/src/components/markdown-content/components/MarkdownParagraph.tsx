import type { Content, Paragraph } from 'mdast'
import * as React from 'react'

import { Text } from '../../text'

type MarkdownParagraphProps = {
  node: Paragraph
  handleNode: (node: Content) => React.ReactElement
}

export const MarkdownParagraph = ({
  node,
  handleNode,
  ...rest
}: MarkdownParagraphProps) => (
  <Text {...rest}>{node.children?.map(handleNode)}</Text>
)
