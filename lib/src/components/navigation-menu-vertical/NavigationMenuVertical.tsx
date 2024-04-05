import { Root } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

import { NavigationMenuVerticalAccordion } from './NavigationMenuVerticalAccordion'
import { NavigationMenuVerticalAccordionContent } from './NavigationMenuVerticalAccordionContent'
import { NavigationMenuVerticalAccordionTrigger } from './NavigationMenuVerticalAccordionTrigger'
import { NavigationMenuVerticalIcon } from './NavigationMenuVerticalIcon'
import { NavigationMenuVerticalItem } from './NavigationMenuVerticalItem'
import { NavigationMenuVerticalItemContent } from './NavigationMenuVerticalItemContent'
import { NavigationMenuVerticalLink } from './NavigationMenuVerticalLink'
import { NavigationMenuVerticalList } from './NavigationMenuVerticalList'
import { NavigationMenuVerticalText } from './NavigationMenuVerticalText'
import { colorSchemes as navigationMenuVerticalColorSchemes } from './stitches.navigationMenuVertical.colorscheme.config'

const StyledRoot = styled(Root, {
  width: '100%'
})

/*
 * (!)
 * NavigationMenu vertical behaviour was buggy so had to build the
 * opening/closing nested Content(Accordion) based on `Collapsible` instead.
 * This means that the below `value` based props and `Trigger`/`Content`
 * animations do nothing, so removing them from typescript
 */
type TNavigationVerticalProps = Omit<
  React.ComponentProps<typeof StyledRoot>,
  | 'delayDuration'
  | 'skipDelayDuration'
  | 'defaultValue'
  | 'value'
  | 'onValueChange'
>

export const NavigationMenuVertical = Object.assign(
  ({ children, ...rest }: TNavigationVerticalProps) => (
    <StyledRoot
      className={navigationMenuVerticalColorSchemes['light']}
      {...rest}
      orientation="vertical"
    >
      <NavigationMenuVerticalList>{children}</NavigationMenuVerticalList>
    </StyledRoot>
  ),
  {
    Link: NavigationMenuVerticalLink,
    Accordion: NavigationMenuVerticalAccordion,
    AccordionContent: NavigationMenuVerticalAccordionContent,
    AccordionTrigger: NavigationMenuVerticalAccordionTrigger,
    Item: NavigationMenuVerticalItem,
    ItemContent: NavigationMenuVerticalItemContent,
    Icon: NavigationMenuVerticalIcon,
    Text: NavigationMenuVerticalText
  }
)
