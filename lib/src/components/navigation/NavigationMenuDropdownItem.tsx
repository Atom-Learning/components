import React from 'react'

import { styled } from '~/stitches'

import { Text } from '../text'
import { NavigationMenuLink } from './NavigationMenuLink'

export const NavigationMenuDropdownItem = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<React.ComponentProps<typeof NavigationMenuLink>>
>((props, forwardedRef) => {
  return (
    <NavigationMenuLink ref={forwardedRef} variant="dropdownItem" {...props} />
  )
})

export const NavigationMenuDropdownItemTitle = styled(Text, {
  color: '$tonal500',
  fontWeight: '600'
})

NavigationMenuDropdownItem.displayName = 'NavigationMenuDropdownItem'
NavigationMenuDropdownItemTitle.displayName = 'NavigationMenuDropdownItemTitle'
