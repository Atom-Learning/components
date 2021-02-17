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
    // children could be multiple elements/components,
    // so we need a fragment here.
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  )

CSSWrapper.displayName = 'CSSWrapper'
