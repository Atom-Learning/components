import * as React from 'react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Divider } from '../divider'
import { styled } from '~/stitches'

const StyledDivider = styled(Divider, {
  my: '$1'
})


export const DropdownMenuSeparator = (props) => {
  return <Separator asChild><StyledDivider {...props} /></Separator>
}