import logo from '@atom-learning/theme/lib/assets/logo.svg'
import logoLight from '@atom-learning/theme/lib/assets/logo-light.svg'
import logoPrimary from '@atom-learning/theme/lib/assets/logo-primary.svg'
import React from 'react'

import { CSS, styled } from '~/stitches'

import { Image } from '../image'

const Sources = {
  primary: logoPrimary,
  white: logoLight,
  multi: logo
} as const

type AppBarBrandProps = {
  href: string
  theme?: keyof typeof Sources
  css?: CSS
  logoAlt?: string
}

const StyledLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$tonal400',
  '& > p': {
    color: '$tonal400'
  },
  '&:hover, &:focus': { textDecoration: 'none' }
})

export const TopBarBrand: React.FC<AppBarBrandProps> = ({
  children,
  theme = 'multi',
  href,
  css,
  logoAlt = 'Atom Learning logo'
}) => {
  return (
    <StyledLink href={href} css={css}>
      <Image
        src={Sources[theme]}
        alt={logoAlt}
        css={{
          mr: '$3',
          mb: 5,
          '&[src$=".svg"]': {
            height: 24,
            width: 'auto'
          }
        }}
      />
      {children}
    </StyledLink>
  )
}
