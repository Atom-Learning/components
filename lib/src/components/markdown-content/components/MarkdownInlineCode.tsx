import { InlineCode } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box/Box'

type MarkdownInlineCodeProps = {
  node: InlineCode
}

const StyledMarkdownInlineCode = styled(Box, {
  bg: '$tonal100',
  borderRadius: '$0',
  color: '$tonal600',
  display: 'inline-block',
  fontFamily: '$mono',
  fontSize: '85%',
  p: '$0 $1'
})

export const MarkdownInlineCode: React.FC<MarkdownInlineCodeProps> = ({
  node
}) => <StyledMarkdownInlineCode as="code">{node.value}</StyledMarkdownInlineCode>
