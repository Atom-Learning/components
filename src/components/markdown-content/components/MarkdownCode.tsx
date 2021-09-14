import { Code } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box/Box'

type MarkdownCodeProps = {
  node: Code
}

const StyledCode = styled(Box, {
  bg: '$tonal200',
  p: '$3',
  my: '$4',
  borderRadius: '$1',
  lineHeight: 1.4,
  fontFamily: '$mono',
  fontSize: '$sm'
})

export const MarkdownCode: React.FC<MarkdownCodeProps> = ({ node }) => (
  <StyledCode as="pre">{node.value}</StyledCode>
)
