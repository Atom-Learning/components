import React from 'react'
import { styled } from '~/stitches'
import { Image } from '../image'

import logo from '@atom-learning/theme/lib/assets/logo.svg'

const StyledLogo = styled(Image, {
  mb: '$1',
  variants: {
    size: {
      md: {
        height: '$2',
        width: 'auto'
      },
      lg: {
        height: '$3',
        width: 'auto'
      }
    }
  }
})
type BrandLogoProps = React.ComponentProps<typeof StyledLogo>

export const BrandLogo = ({ src = logo, alt = 'Atom Learning logo', size = 'md', ...rest }: BrandLogoProps): JSX.Element => {
  return <StyledLogo src={src} alt={alt} size={size} {...rest} />
}
