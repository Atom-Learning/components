import React from 'react'

import { CSS, styled } from '~/stitches'
import { useWindowScrollPosition } from '~/utilities/hooks/useWindowScrollPosition'

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
  <Divider orientation="vertical" css={{ height: '$2', bg: '$tonal100' }} />
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
        height: '$6',
        [`& ${TopBarBrandLogo}`]: {
          '&[src$=".svg"]': {
            height: 24,
            width: 'auto'
          }
        }
      },
      lg: {
        height: '$7',
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
}

export const TopBar: React.FC<TopBarProps> & TopBarSubComponents = ({
  size = 'md',
  ...props
}) => {
  const { y: scrollPositionY } = useWindowScrollPosition()

  return (
    <StyledRoot hasScrolled={!!scrollPositionY} size={size}>
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
