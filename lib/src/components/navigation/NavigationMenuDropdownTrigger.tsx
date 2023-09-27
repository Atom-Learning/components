import { ChevronDown } from '@atom-learning/icons'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'
import {
  navigationMenuActiveItemStyles,
  navigationMenuBaseItemStyles
} from './NavigationMenu.styles'
import { preventEvent } from '~/utilities/event'

const StyledTrigger = styled(
  NavigationMenuPrimitive.Trigger,
  navigationMenuBaseItemStyles,
  {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '$1',
    justifyContent: 'space-between',
    '&[data-state="open"]': {
      background: '$tonal100'
    },
    variants: {
      active: { true: { ...navigationMenuActiveItemStyles } }
    }
  }
)

export const NavigationMenuDropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<{ active?: boolean }>
>(({ children, active, ...props }, forwardedRef) => (
  <StyledTrigger
    active={active}
    {...props}
    ref={forwardedRef}
    onPointerMove={preventEvent}
    onPointerLeave={preventEvent}
  >
    {children}
    <Icon
      is={ChevronDown}
      css={{
        ml: '$1',
        '[data-state=open] &': { transform: 'rotate(-180deg)' },
        '@media (prefers-reduced-motion: no-preference)': {
          transition: 'transform .2s ease'
        }
      }}
      size="sm"
    />
  </StyledTrigger>
))

NavigationMenuDropdownTrigger.displayName = 'NavigationMenuDropdownTrigger'
