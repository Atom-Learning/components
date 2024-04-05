import { Item } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

const StyledNavigationMenuVerticalItem = styled(Item, {})

/*
 * (!)
 * NavigationMenu vertical behaviour was buggy so had to build the
 * opening/closing nested Content(Accordion) based on `Collapsible` instead.
 * This means that the `value` prop does nothing, so removing it from typescript
 */
type TNavigationMenuVerticalItemProps = Omit<
  React.ComponentProps<typeof StyledNavigationMenuVerticalItem>,
  'value'
>

export const NavigationMenuVerticalItem = (
  props: TNavigationMenuVerticalItemProps
): JSX.Element => <StyledNavigationMenuVerticalItem {...props} />
