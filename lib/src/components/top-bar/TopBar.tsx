import React from 'react'

import { CSS, styled } from '~/stitches'
import { useScrollPosition } from '~/utilities/hooks/useScrollPosition'

import { Divider } from '../divider'
import { Flex } from '../flex'
import { TopBarActionIcon } from './TopBarActionIcon'
import { TopBarBrand, TopBarBrandLogo, TopBarBrandName } from './TopBarBrand'

interface TopBarSubComponents {
  Brand: typeof TopBarBrand
  BrandLogo: typeof TopBarBrandLogo
  BrandName: typeof TopBarBrandName
  ActionIcon: typeof TopBarActionIcon
  Divider: typeof TopBarDivider
}

const TopBarDivider = () => (
  <Divider orientation="vertical" css={{ minHeight: 28, bg: '$tonal100' }} />
)

const StyledRoot = styled('div', {
  bg: 'white',
  position: 'sticky',
  display: 'flex',
  alignItems: 'center',
  width: '100vw',
  top: '0',
  height: '$6',
  zIndex: 1,
  borderBottom: '1px solid $tonal100',
  transition: 'box-shadow .2s ease-out',
  variants: {
    hasScrolled: {
      true: {
        boxShadow: '0px 4px 4px -2px rgba(31, 31, 31, 0.1);'
      }
    }
  }
})

const Container = styled(Flex, {
  alignItems: 'center',
  height: '$4',
  mx: '$4',
  width: '100%',
  '@md': {
    mx: '$5'
  }
})

interface TopBarProps {
  css?: CSS
}

export const TopBar: React.FC<TopBarProps> & TopBarSubComponents = (props) => {
  const { y: scrollPositionY } = useScrollPosition()

  return (
    <StyledRoot hasScrolled={!!scrollPositionY}>
      <Container {...props} />
    </StyledRoot>
  )
}

TopBar.Brand = TopBarBrand
TopBar.BrandLogo = TopBarBrandLogo
TopBar.BrandName = TopBarBrandName
TopBar.ActionIcon = TopBarActionIcon
TopBar.Divider = TopBarDivider

TopBar.displayName = 'TopBar'
