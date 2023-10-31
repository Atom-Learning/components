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
  bg: '$navigationDropdown',
  mt: '4px',
  boxShadow: '$1',
  borderRadius: '$1'
})

type NavigationMenuDropdownContentProps = React.ComponentProps<
  typeof StyledContent
>

export const NavigationMenuDropdownContent: React.FC<
  NavigationMenuDropdownContentProps
> = ({ children, ...rest }) => (
  <StyledContent
    onPointerMove={preventEvent}
    onPointerLeave={preventEvent}
    {...rest}
  >
    <StyledList>{children}</StyledList>
  </StyledContent>
)

NavigationMenuDropdownContent.displayName = 'NavigationMenuDropdownContent'
