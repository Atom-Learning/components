import * as React from 'react'

import { styled } from '~/stitches'

const StyledDivider = styled('hr', {
  border: 0,
  borderTop: '1px solid $tonal400',
  margin: '$4 auto',
  maxWidth: '50%'
})

type DividerProps = typeof StyledDivider

export const Divider: React.FC<DividerProps> = (props) => {
  return <StyledDivider {...props} />
}

Divider.displayName = 'Divider'
