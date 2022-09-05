import logo from '@atom-learning/theme/lib/assets/logo.svg'
import logoLight from '@atom-learning/theme/lib/assets/logo-light.svg'
import logoPrimary from '@atom-learning/theme/lib/assets/logo-primary.svg'
import React from 'react'

import { CSS } from '~/stitches'

import { Image } from '../image'
import { Link } from '../link'

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

export const AppBarBrand: React.FC<AppBarBrandProps> = ({
  children,
  theme = 'multi',
  href,
  css,
  logoAlt = 'Atom Learning logo'
}) => {
  return (
    <Link
      href={href}
      css={{
        display: 'flex',
        alignItems: 'center',
        color: '$tonal400',
        '& > p': {
          color: '$tonal400'
        },
        '&:hover, &:focus': { textDecoration: 'none' },
        ...css
      }}
    >
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
    </Link>
  )
}
