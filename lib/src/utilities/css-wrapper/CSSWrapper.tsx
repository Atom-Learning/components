import * as React from 'react'

import { Box } from '~/components/box'
import type { CSS } from '~/stitches'

type CssWrapperProps = {
  css?: CSS
  children: React.ReactNode
}

export const CSSWrapper = ({
  css,
  children
}: CssWrapperProps): React.ReactElement =>
  css ? <Box css={css}>{children}</Box> : <>{children}</>

CSSWrapper.displayName = 'CSSWrapper'
