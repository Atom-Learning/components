import type { Code } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box/Box'

type MarkdownCodeProps = {
  node: Code
}

const StyledMarkdownCode = styled(Box, {
  bg: '$grey200',
  borderRadius: '$1',
  color: '$grey1000',
  fontFamily: '$mono',
  fontSize: '$sm',
  lineHeight: 1.4,
  my: '$4',
  p: '$3'
})

export const MarkdownCode = ({ node }: MarkdownCodeProps) => (
  <StyledMarkdownCode as="pre">{node.value}</StyledMarkdownCode>
)
