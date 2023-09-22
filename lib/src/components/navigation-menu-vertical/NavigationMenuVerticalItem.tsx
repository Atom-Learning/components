import { Item } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

const StyledNavigationMenuVerticalItem = styled(Item, {})

type TNavigationMenuVerticalItemProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalItem
> & {
  /*
   * (!)
   * NavigationMenu vertical behaviour was buggy so had to build the
   * opening/closing nested Content(Accordion) based on `Collapsible` instead.
   * This means that the `value` prop does nothing, so removing it from typescript
   */
  value: never
}

export const NavigationMenuVerticalItem = (
  props: TNavigationMenuVerticalItemProps
): JSX.Element => <StyledNavigationMenuVerticalItem {...props} />
