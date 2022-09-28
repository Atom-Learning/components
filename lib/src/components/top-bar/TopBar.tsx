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
  zIndex: 1,
  borderBottom: '1px solid $tonal100',
  transition: 'box-shadow .2s ease-out',
  variants: {
    hasScrolled: {
      true: {
        boxShadow: '0px 4px 4px -2px rgba(31, 31, 31, 0.1);'
      }
    },
    size: {
      md: {
        height: '$6'
      },
      lg: {
        height: '$7'
      }
    }
  }
})

const Container = styled(Flex, {
  alignItems: 'center',
  mx: '$4',
  width: '100%',
  '@md': {
    mx: '$5'
  },
  variants: {
    size: {
      md: {
        height: '$4',
        [`& ${TopBarBrandLogo}`]: {
          '&[src$=".svg"]': {
            height: 24,
            width: 'auto'
          }
        }
      },
      lg: {
        height: 80,
        [`& ${TopBarBrandLogo}`]: {
          '&[src$=".svg"]': {
            height: 32,
            width: 'auto'
          }
        }
      }
    }
  }
})

type StyledRootProps = React.ComponentProps<typeof StyledRoot>

interface TopBarProps extends StyledRootProps {
  css?: CSS
}

export const TopBar: React.FC<TopBarProps> & TopBarSubComponents = ({
  size = 'md',
  ...props
}) => {
  const { y: scrollPositionY } = useScrollPosition()

  return (
    <StyledRoot hasScrolled={!!scrollPositionY} size={size}>
      <Container size={size} {...props} />
    </StyledRoot>
  )
}

TopBar.Brand = TopBarBrand
TopBar.BrandLogo = TopBarBrandLogo
TopBar.BrandName = TopBarBrandName
TopBar.ActionIcon = TopBarActionIcon
TopBar.Divider = TopBarDivider

TopBar.displayName = 'TopBar'
