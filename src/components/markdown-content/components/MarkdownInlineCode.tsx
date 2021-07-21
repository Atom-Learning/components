import { InlineCode } from 'mdast'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box/Box'

type MarkdownInlineCodeProps = {
  node: InlineCode
}

const StyledInlineCode = styled(Box, {
  bg: '$tonal100',
  borderRadius: '$0',
  display: 'inline-block',
  fontFamily: '$mono',
  fontSize: '85%',
  p: '$0 $1'
})

export const MarkdownInlineCode: React.FC<MarkdownInlineCodeProps> = ({
  node
}) => <StyledInlineCode as="code">{node.value}</StyledInlineCode>
