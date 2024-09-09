import React from 'react'

import { styled } from '~/stitches'

import { Text } from '../text'
import { NavigationMenuLink } from './NavigationMenuLink'

export const NavigationMenuDropdownItem: React.ForwardRefExoticComponent<
  React.PropsWithChildren<React.ComponentProps<typeof NavigationMenuLink>>
> = React.forwardRef((props, forwardedRef) => {
  return (
    <NavigationMenuLink ref={forwardedRef} variant="dropdownItem" {...props} />
  )
})

export const NavigationMenuDropdownItemTitle = styled(Text, {
  color: '$grey900',
  fontWeight: 600
})

NavigationMenuDropdownItem.displayName = 'NavigationMenuDropdownItem'
NavigationMenuDropdownItemTitle.displayName = 'NavigationMenuDropdownItemTitle'
