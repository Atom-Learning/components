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

type TNavigationVerticalType =
  React.ForwardRefExoticComponent<TNavigationVerticalProps> & {
    Link: typeof NavigationMenuVerticalLink
    Accordion: typeof NavigationMenuVerticalAccordion
    AccordionContent: typeof NavigationMenuVerticalAccordionContent
    AccordionTrigger: typeof NavigationMenuVerticalAccordionTrigger
    Item: typeof NavigationMenuVerticalItem
    ItemContent: typeof NavigationMenuVerticalItemContent
    Icon: typeof NavigationMenuVerticalIcon
    Text: typeof NavigationMenuVerticalText
  }

export const NavigationMenuVertical = (({ children, ...rest }) => {
  return (
    <StyledRoot {...rest} orientation="vertical">
      <NavigationMenuVerticalList>{children}</NavigationMenuVerticalList>
    </StyledRoot>
  )
}) as TNavigationVerticalType

NavigationMenuVertical.Link = NavigationMenuVerticalLink
NavigationMenuVertical.Accordion = NavigationMenuVerticalAccordion
NavigationMenuVertical.AccordionContent = NavigationMenuVerticalAccordionContent
NavigationMenuVertical.AccordionTrigger = NavigationMenuVerticalAccordionTrigger
NavigationMenuVertical.Item = NavigationMenuVerticalItem
NavigationMenuVertical.ItemContent = NavigationMenuVerticalItemContent
NavigationMenuVertical.Icon = NavigationMenuVerticalIcon
NavigationMenuVertical.Text = NavigationMenuVerticalText
