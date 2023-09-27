import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'
import { preventEvent } from '~/utilities/event'

const StyledList = styled('ul', {
  listStyle: 'none',
  m: 0,
  p: 0
})

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  p: '$3',
  bg: 'white',
  mt: '4px',
  boxShadow: '$1',
  borderRadius: '$1'
})

export const NavigationMenuDropdownContent: React.FC = ({ children }) => (
  <StyledContent onPointerMove={preventEvent} onPointerLeave={preventEvent}>
    <StyledList>{children}</StyledList>
  </StyledContent>
)

NavigationMenuDropdownContent.displayName = 'NavigationMenuDropdownContent'
