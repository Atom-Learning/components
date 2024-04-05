import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import { Link } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

import { navigationMenuVerticalItemStyles } from './NavigationMenuVertical.styles'
import { NavigationMenuVerticalAccordionContext } from './NavigationMenuVerticalAccordion'
import { NavigationMenuVerticalItemContent } from './NavigationMenuVerticalItemContent'

const StyledNavigationMenuVerticalAccordionTrigger = styled(
  Trigger,
  navigationMenuVerticalItemStyles
)

const StyledIcon = styled(Icon, {
  transition: 'transform 300ms',
  '[data-state="open"] > &': {
    transform: 'rotate(180deg)'
  }
})

type TNavigationMenuAccordionTriggerProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalAccordionTrigger
>

export const NavigationMenuVerticalAccordionTrigger = ({
  children,
  ...rest
}: TNavigationMenuAccordionTriggerProps) => {
  const { setTriggerRef } = React.useContext(
    NavigationMenuVerticalAccordionContext
  )

  return (
    <Link asChild>
      <StyledNavigationMenuVerticalAccordionTrigger size="lg" {...rest} asChild>
        <Flex
          as="button"
          type="button"
          align="center"
          justify="space-between"
          gap={3}
          ref={setTriggerRef}
        >
          <NavigationMenuVerticalItemContent>
            {children}
          </NavigationMenuVerticalItemContent>
          <StyledIcon size="sm" is={ChevronDown} />
        </Flex>
      </StyledNavigationMenuVerticalAccordionTrigger>
    </Link>
  )
}
