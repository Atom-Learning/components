import { Content, Emphasis } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

type MarkdownEmphasisProps = {
  node: Emphasis
  handleNode: (node: Content) => React.ReactElement
}

const StyledMarkdownEmphasis = styled('em', { fontStyle: 'italic' })

export const MarkdownEmphasis: React.FC<MarkdownEmphasisProps> = ({
  node,
  handleNode
}) => (
  <StyledMarkdownEmphasis>
    {node.children?.map(handleNode)}
  </StyledMarkdownEmphasis>
)
