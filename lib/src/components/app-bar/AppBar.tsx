import React from 'react'

import { CSS, styled } from '~/stitches'

import { Divider as BaseDivider } from '../divider'
import { Flex } from '../flex'
import { ActionIcon, Actions, ActionsOverflowMenu } from './Actions'
import { Brand } from './Brand'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './Collapsible'
import { useScrollPosition } from './utils'

type AppBarSubComponents = {
  Collapsible: typeof Collapsible
  CollapsibleTrigger: typeof CollapsibleTrigger
  CollapsibleContent: typeof CollapsibleContent
  Brand: typeof Brand
  Actions: typeof Actions
  ActionIcon: typeof ActionIcon
  ActionsOverflowMenu: typeof ActionsOverflowMenu
  Divider: typeof Divider
}

const Divider = () => (
  <BaseDivider
    orientation="vertical"
    css={{ minHeight: 28, background: '$tonal100' }}
  />
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
    scrolled: {
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

export const AppBar: React.FC<{ css?: CSS }> & AppBarSubComponents = ({
  children,
  css
}) => {
  const { y: hasScrolled } = useScrollPosition()

  return (
    <StyledRoot scrolled={!!hasScrolled}>
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

AppBar.Collapsible = Collapsible
AppBar.CollapsibleTrigger = CollapsibleTrigger
AppBar.CollapsibleContent = CollapsibleContent
AppBar.Brand = Brand
AppBar.Actions = Actions
AppBar.ActionIcon = ActionIcon
AppBar.ActionsOverflowMenu = ActionsOverflowMenu
AppBar.Divider = Divider
