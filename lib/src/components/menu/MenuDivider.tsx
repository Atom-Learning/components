import * as React from 'react'
import { Divider } from '../divider'
import { styled } from '~/stitches'

const StyledDivider = styled(Divider, {
  my: '$1'
})


export const MenuDivider = (props) => {
  return <StyledDivider {...props} />
}
