import { styled } from '~/stitches'

import { Image } from '../image'
import { Text } from '../text'


export const SideBarBrand = styled('a', {
  alignItems: 'center',
  color: '$text',
  display: 'flex',
  textDecoration: 'none',
  '&:hover, &:focus': {
    textDecoration: 'none'
  }
})

export const SideBarBrandLogo = Image

export const SideBarBrandName = styled(Text, {
  color: '$text'
})
