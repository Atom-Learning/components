import * as React from 'react'

import { Label } from '@radix-ui/react-dropdown-menu'

import { Text } from '../text'
import { styled } from '~/stitches'


const StyledLabel = styled(Text, {
  fontWeight: 'bold',
  py: '$1',
  px: '$3',
  minHeight: '$3',
  display: 'flex',
  alignItems: 'center'
})

export const DropdownMenuLabel = (props) => {
  return <Label asChild><StyledLabel size="sm" {...props} /></Label>
}
