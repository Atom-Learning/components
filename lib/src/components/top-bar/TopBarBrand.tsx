import React from 'react'

import { styled } from '~/stitches'

import { Image } from '../image'
import { Text } from '../text'


export const TopBarBrandLogo = ({
  src,
  alt = 'Atom Learning logo',
  css
}: Pick<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'css'>): JSX.Element => {
  return (
    <Image
      src={src}
      alt={alt}
      css={{
        height: '$3',
        mr: '$3',
        width: 'auto',
        ...css
      }}
    />
  )
}

export const TopBarBrandName = styled(Text, {
  color: '$grey800'
})

export const TopBarBrand = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$grey800',
  '&:hover, &:focus': { textDecoration: 'none' }
})
