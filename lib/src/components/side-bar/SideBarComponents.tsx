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

export const SideBarBrand = styled('a', {
  alignItems: 'flex-end',
  color: '$text',
  display: 'flex',
  gap: '$4',
  textDecoration: 'none',
  '&:hover, &:focus': {
    textDecoration: 'none'
  }
})

export const SideBarBrandLogo = Image

export const SideBarBrandName = styled(Text, {
  color: '$text',
  whiteSpace: 'nowrap'
})
