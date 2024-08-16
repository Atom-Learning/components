import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../text'


const StyledMenuLabel = styled(Text, {
  fontWeight: 'bold',
  py: '$1',
  px: '$3',
  minHeight: '$3',
  display: 'flex',
  alignItems: 'center'
})

export const MenuLabel = (props) => {
  return <StyledMenuLabel size="sm" {...props} />
}
