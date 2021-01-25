import * as React from 'react'

import { Box } from '../primitives'
import { CSSBlob } from '../stitches'

type CssWrapperProps = {
  css?: CSSBlob
  children: React.ReactNode
}

export const CSSWrapper = ({
  css,
  children
}: CssWrapperProps): React.ReactElement =>
  css ? <Box css={css}>{children}</Box> : <> children </>
