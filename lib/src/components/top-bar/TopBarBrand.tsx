import React from 'react'

import { CSS, styled } from '~/stitches'

import { Image } from '../image'
import { Text } from '../text'
import { ComponentsContext, ComponentsProvider } from '~/context'

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
  const { Link: ExternalLink } = React.useContext(ComponentsContext)
  return <StyledTopBarBrand as={ExternalLink} {...props} />
}
