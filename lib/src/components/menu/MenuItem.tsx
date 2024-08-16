import * as React from 'react'

import { styled } from '~/stitches'

const StyledMenuItem = styled('li', {
  // Hack: stretch children to fullWidth
  display: 'flex',
  flexDirection: 'column'
})

export const MenuItem = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledMenuItem {...rest} ref={ref}>
      {children}
    </StyledMenuItem>
  )
})
