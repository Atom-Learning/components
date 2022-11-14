import { ChevronDown } from '@atom-learning/icons'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'
import {
  navigationMenuActiveParentItemStyles,
  navigationMenuItemStyles
} from './NavigationMenu.constants'

const StyledTrigger = styled(
  NavigationMenuPrimitive.Trigger,
  navigationMenuItemStyles,
  {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '$1',
    justifyContent: 'space-between',
    gap: '$1',
    '&[data-state="open"]': {
      background: '$tonal100'
    },
    variants: { active: { true: { ...navigationMenuActiveParentItemStyles } } }
  }
)

export const NavigationMenuDropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<{ active?: boolean }>
>(({ children, active, ...props }, forwardedRef) => {
  return (
    <StyledTrigger active={active} {...props} ref={forwardedRef}>
      {children}
      <Icon
        is={ChevronDown}
        css={{
          '[data-state=open] &': { transform: 'rotate(-180deg)' },
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'transform .2s ease'
          }
        }}
        size="sm"
      />
    </StyledTrigger>
  )
})

NavigationMenuDropdownTrigger.displayName = 'NavigationMenuDropdownTrigger'
