import React from 'react'

import { CSS, styled } from '~/stitches'

import { Image } from '../image'
import { Text } from '../text'

export const TopBarBrandLogo = (props: React.ComponentProps<typeof Image>) => (
  <Image className="topbar-brand-logo" {...props} />
)

TopBarBrandLogo.toString = () => '.topbar-brand-logo'

export const TopBarBrandName = styled(Text, {
  color: '$tonal400'
})

export const TopBarBrand = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$tonal400',
  gap: '$3',
  '&:hover, &:focus': { textDecoration: 'none' }
})
