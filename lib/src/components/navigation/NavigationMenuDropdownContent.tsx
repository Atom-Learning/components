import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

const StyledList = styled('ul', {
  listStyle: 'none'
})

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  p: '$3',
  bg: 'white',
  mt: '4px',
  boxShadow:
    '0px 3px 6px rgba(51, 51, 51, 0.15), 0px 3px 6px rgba(51, 51, 51, 0.2)',
  borderRadius: '$1'
})

export const NavigationMenuDropdownContent = ({ children }) => (
  <StyledContent>
    <StyledList>{children}</StyledList>
  </StyledContent>
)

NavigationMenuDropdownContent.displayName = 'NavigationMenuDropdownContent'
