import * as React from 'react'

import { Box } from '~/components'
import { CSS } from '~/stitches'

type CssWrapperProps = {
  css?: CSS
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
