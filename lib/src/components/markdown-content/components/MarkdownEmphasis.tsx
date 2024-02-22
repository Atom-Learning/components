import { Content, Emphasis } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

type MarkdownEmphasisProps = {
  node: Emphasis
  handleNode: (node: Content) => React.ReactElement
}

export const StyledMarkdownEmphasis = styled('em', { fontStyle: 'italic' })

export const MarkdownEmphasis = ({
  node,
  handleNode
}: MarkdownEmphasisProps) => (
  <StyledMarkdownEmphasis>
    {node.children?.map(handleNode)}
  </StyledMarkdownEmphasis>
)
