import { Content, Strong } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

type MarkdownStrongProps = {
  node: Strong
  handleNode: (node: Content) => React.ReactElement
}

const StyledMarkdownStrong = styled('strong', { fontWeight: 600 })

export const MarkdownStrong: React.FC<MarkdownStrongProps> = ({
  node,
  handleNode
}) => (
  <StyledMarkdownStrong>{node.children?.map(handleNode)}</StyledMarkdownStrong>
)
