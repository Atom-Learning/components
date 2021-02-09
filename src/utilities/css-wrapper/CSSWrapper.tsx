import * as React from 'react'

import { Box } from '~/components'
import { CSSBlob } from '~/stitches'

type CssWrapperProps = {
  css?: CSSBlob
  children: React.ReactNode
}

export const CSSWrapper = ({
  css,
  children
}: CssWrapperProps): React.ReactElement =>
  css ? (
    <Box css={css} data-testid="css-wrapper">
      {children}
    </Box>
  ) : (
    <>{children}</> // eslint-disable-line
  )
