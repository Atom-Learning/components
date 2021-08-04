import { Content, Strong } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

type MarkdownStrongProps = {
  node: Strong
  handleNode: (node: Content) => React.ReactElement
}

const StyledStrong = styled('strong', { fontWeight: 600 })

export const MarkdownStrong: React.FC<MarkdownStrongProps> = ({
  node,
  handleNode
}) => <StyledStrong>{node.children?.map(handleNode)}</StyledStrong>
