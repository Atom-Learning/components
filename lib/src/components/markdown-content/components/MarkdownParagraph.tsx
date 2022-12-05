import { Content, Paragraph } from 'mdast'
import * as React from 'react'
import { Text } from '../../text'

type MarkdownParagraphProps = {
  node: Paragraph
  handleNode: (node: Content) => React.ReactElement
}

export const MarkdownParagraph: React.FC<MarkdownParagraphProps> = ({
  node,
  handleNode,
  ...rest
}) => <Text {...rest}>{node.children?.map(handleNode)}</Text>
