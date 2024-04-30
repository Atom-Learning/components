import * as React from 'react'

import { ComponentsContext } from '~/context'
import { styled } from '~/stitches'

import { Image } from '../image'
import { Text } from '../text'

export const SideBarHeader = styled('div', {
  borderBottom: '1px solid $border',
  p: '$4',
  width: '100%'
})

export const SideBarBody = styled('div', {
  flexGrow: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
  p: '$4',
  width: '100%'
})

export const SideBarFooter = styled('div', {
  borderTop: '1px solid $border',
  p: '$4',
  width: '100%'
})

const StyledSideBarBrand = styled('a', {
  alignItems: 'flex-end',
  color: '$text',
  display: 'flex',
  gap: '$4',
  textDecoration: 'none',
  '&:hover, &:focus': {
    textDecoration: 'none'
  }
})
export const SideBarBrand = (props) => {
  const { Link: RouterLink } = React.useContext(ComponentsContext)
  return <StyledSideBarBrand as={RouterLink} {...props} />
}

export const SideBarBrandLogo = Image

export const SideBarBrandName = styled(Text, {
  color: '$text',
  whiteSpace: 'nowrap'
})
