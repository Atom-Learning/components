import type { InlineCode } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box/Box'

type MarkdownInlineCodeProps = {
  node: InlineCode
}

const StyledMarkdownInlineCode = styled(Box, {
  bg: '$grey200',
  borderRadius: '$0',
  color: '$grey1000',
  display: 'inline-block',
  fontFamily: '$mono',
  fontSize: '85%',
  p: '$0 $1'
})

export const MarkdownInlineCode = ({ node }: MarkdownInlineCodeProps) => (
  <StyledMarkdownInlineCode as="code">{node.value}</StyledMarkdownInlineCode>
)
