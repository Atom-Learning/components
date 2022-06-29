import * as React from 'react'

import { CSS } from '~/stitches'

import { Divider } from '../../divider'

type MarkdownThematicBreakProps = {
  css?: CSS
}

export const MarkdownThematicBreak: React.FC<MarkdownThematicBreakProps> = ({
  css
}) => <Divider css={{ width: '100%', ...css } as CSS} />
