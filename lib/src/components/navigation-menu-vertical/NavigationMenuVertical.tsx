import { Root } from '@radix-ui/react-navigation-menu'
import * as React from 'react'

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
  zIndex: 1
})

const StyledCollapsible = styled('div', {
  p: '$4',
  transition: 'width 150ms, border-color 150ms',
  height: '100%',
  bg: 'white',
  borderRight: 'inset $grey200 1px',
  variants: {
    expanded: {
      true: { width: '256px' },
      false: { width: '88px', overflow: 'hidden' }
    }
  }
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
> & {
  collapsible?: boolean
}

type TNavigationVerticalType = React.FC<TNavigationVerticalProps> & {
  Link: typeof NavigationMenuVerticalLink
  Accordion: typeof NavigationMenuVerticalAccordion
  AccordionContent: typeof NavigationMenuVerticalAccordionContent
  AccordionTrigger: typeof NavigationMenuVerticalAccordionTrigger
  Item: typeof NavigationMenuVerticalItem
  ItemContent: typeof NavigationMenuVerticalItemContent
  Icon: typeof NavigationMenuVerticalIcon
  Text: typeof NavigationMenuVerticalText
}

export const NavigationMenuVertical = (({ children, collapsible, ...rest }) => {
  const [expanded, setExpanded] = React.useState(false)

  if (collapsible) {
    return (
      <StyledRoot
        className={navigationMenuVerticalColorSchemes['light']}
        {...rest}
        orientation="vertical"
        css={{ width: 88 }}
      >
        <StyledCollapsible
          onPointerEnter={() => setExpanded(true)}
          onPointerLeave={() => setExpanded(false)}
          expanded={expanded}
          aria-expanded={expanded}
        >
          <NavigationMenuVerticalList>{children}</NavigationMenuVerticalList>
        </StyledCollapsible>
      </StyledRoot>
    )
  }

  return (
    <StyledRoot
      className={navigationMenuVerticalColorSchemes['light']}
      {...rest}
      orientation="vertical"
    >
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
