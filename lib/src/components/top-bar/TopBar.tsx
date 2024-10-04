import React from 'react'

import { CSS, styled } from '~/stitches'
import { useWindowScrollPosition } from '~/utilities/hooks/useWindowScrollPosition'

import { Divider } from '../divider'
import { Flex } from '../flex'
import { colorSchemes as topBarColorSchemes } from './stitches.topBar.colorscheme.config'
import { TopBarActionIcon } from './TopBarActionIcon'
import { TopBarBrand, TopBarBrandLogo, TopBarBrandName } from './TopBarBrand'

const TopBarDivider = () => (
  <Divider orientation="vertical" css={{ height: '$2', bg: '$divider' }} />
)

const StyledRoot = styled('div', {
  bg: '$background',
  position: 'sticky',
  display: 'flex',
  alignItems: 'center',
  width: '100vw',
  top: '0',
  zIndex: 1,
  borderBottom: '1px solid $borderBottom',
  transition: 'box-shadow .2s ease-out',
  variants: {
    hasScrolled: {
      true: { boxShadow: '0px 4px 4px -2px rgba(31, 31, 31, 0.1);' }
    },
    size: {
      md: { height: '$6' },
      lg: { height: '$7' }
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

type StyledRootProps = React.ComponentProps<typeof StyledRoot>

interface TopBarProps extends StyledRootProps {
  css?: CSS
  className?: string
}

const TopBarComponent = ({
  size = 'md',
  className = topBarColorSchemes['light'],
  ...props
}: TopBarProps) => {
  const { y: scrollPositionY } = useWindowScrollPosition()

  return (
    <StyledRoot
      className={className}
      hasScrolled={!!scrollPositionY}
      size={size}
    >
      <Container {...props} />
    </StyledRoot>
  )
}

export const TopBar = Object.assign(TopBarComponent, {
  Brand: TopBarBrand,
  BrandLogo: TopBarBrandLogo,
  BrandName: TopBarBrandName,
  ActionIcon: TopBarActionIcon,
  Divider: TopBarDivider
})

TopBarComponent.displayName = 'TopBar'
