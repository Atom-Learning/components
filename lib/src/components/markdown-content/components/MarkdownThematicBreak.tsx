import * as React from 'react'

import { CSS } from '~/stitches'

import { Divider } from '../../divider'

type MarkdownThematicBreakProps = {
  css?: CSS
}

export const MarkdownThematicBreak = ({ css }: MarkdownThematicBreakProps) => (
  <Divider css={{ width: '100%', ...css }} />
)
