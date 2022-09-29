import React from 'react'

import { CSS, styled } from '~/stitches'

import { Image } from '../image'
import { Text } from '../text'

type TopBarBrandLogoProps = {
  src: string
  alt?: string
  css?: CSS
}

export const TopBarBrandLogo = ({
  src,
  alt = 'Atom Learning logo',
  css
}: TopBarBrandLogoProps): JSX.Element => {
  return (
    <Image
      className="topbar-brand-logo"
      src={src}
      alt={alt}
      css={{
        mr: '$3',
        mb: '5px',
        ...css
      }}
    />
  )
}

TopBarBrandLogo.toString = () => '.topbar-brand-logo'

export const TopBarBrandName = styled(Text, {
  color: '$tonal400'
})

export const TopBarBrand = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$tonal400',
  '&:hover, &:focus': { textDecoration: 'none' }
})
