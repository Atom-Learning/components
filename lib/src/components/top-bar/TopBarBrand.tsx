import React from 'react'

import { ComponentsContext, ComponentsProvider } from '~/context'
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
}: TopBarBrandLogoProps): JSX.Element => (
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

TopBarBrandLogo.toString = () => '.topbar-brand-logo'

export const TopBarBrandName = styled(Text, {
  color: '$tonal400'
})

const StyledTopBarBrand = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$tonal400',
  '&:hover, &:focus': { textDecoration: 'none' }
})

export const TopBarBrand = (props) => {
  const { Link: RouterLink } = React.useContext(ComponentsContext)
  return <StyledTopBarBrand as={RouterLink} {...props} />
}
