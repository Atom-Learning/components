import { Content, Emphasis } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

type MarkdownEmphasisProps = {
  node: Emphasis
  handleNode: (node: Content) => React.ReactElement
}

const StyledEm = styled('em', { fontStyle: 'italic' })

export const MarkdownEmphasis: React.FC<MarkdownEmphasisProps> = ({
  node,
  handleNode
}) => <StyledEm>{node.children?.map(handleNode)}</StyledEm>
