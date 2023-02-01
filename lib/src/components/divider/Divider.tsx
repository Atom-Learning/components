import React from 'react'

import { styled } from '~/stitches'

export const StyledDivider = styled('hr', {
  border: 0,
  bg: '$tonal100',
  variants: {
    orientation: {
      horizontal: { height: 1, width: '100%' },
      vertical: { height: '100%', width: 1, minHeight: '$3' }
    }
  }
})

export const Divider: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledDivider>
> = React.forwardRef(({ orientation = 'horizontal', ...rest }, ref) => {
  return <StyledDivider ref={ref} orientation={orientation} {...rest} />
})
