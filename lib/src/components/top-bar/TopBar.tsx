import React from 'react'

import { CSS, styled } from '~/stitches'
import { useScrollPosition } from '~/utilities/hooks/useScrollPosition'

import { Divider } from '../divider'
import { Flex } from '../flex'
import { TopBarActionIcon } from './Actions'
import { TopBarBrand } from './Brand'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './Collapsible'

type TopBarSubComponents = {
  Collapsible: typeof Collapsible
  CollapsibleTrigger: typeof CollapsibleTrigger
  CollapsibleContent: typeof CollapsibleContent
  Brand: typeof TopBarBrand
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
    },
    mobileOpen: {
      true: {
        height: '100vh',
        '@md': { height: 'auto' }
      }
    }
  }
})

export const TopBar: React.FC<{ css?: CSS }> & TopBarSubComponents = ({
  children,
  css
}) => {
  const { y: hasScrolled } = useScrollPosition()

  return (
    <StyledRoot hasScrolled={!!hasScrolled}>
      <Flex
        css={{
          alignItems: 'center',
          height: '$4',
          mx: '$4',
          width: '100%',
          '@md': {
            mx: '$5'
          },
          ...css
        }}
      >
        {children}
      </Flex>
    </StyledRoot>
  )
}

TopBar.Collapsible = Collapsible
TopBar.CollapsibleTrigger = CollapsibleTrigger
TopBar.CollapsibleContent = CollapsibleContent
TopBar.Brand = TopBarBrand
TopBar.ActionIcon = TopBarActionIcon
TopBar.Divider = TopBarDivider

TopBar.displayName = 'TopBar'
