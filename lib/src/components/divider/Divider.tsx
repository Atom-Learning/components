import React from 'react'

import { styled } from '~/stitches'

const StyledDivider = styled('hr', {
  border: 0,
  bg: '$tonal200',
  variants: {
    orientation: {
      horizontal: { height: 1, width: '100%' },
      vertical: { height: '100%', width: 1, minHeight: '$3' }
    }
  }
})

export const Divider: React.FC<React.ComponentProps<typeof StyledDivider>> = ({
  orientation = 'horizontal',
  ...rest
}) => {
  return <StyledDivider orientation={orientation} {...rest} />
}
