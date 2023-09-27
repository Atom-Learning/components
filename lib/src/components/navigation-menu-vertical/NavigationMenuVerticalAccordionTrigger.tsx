import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import { Link } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'

import { NavigationMenuVerticalItemContent } from './NavigationMenuVerticalItemContent'
import { NavigationMenuVerticalAccordionContext } from './NavigationMenuVerticalAccordion'

import { navigationMenuVerticalItemStyles } from './NavigationMenuVertical.styles'

const StyledNavigationMenuVerticalAccordionTrigger = styled(
  Trigger,
  navigationMenuVerticalItemStyles
)

const StyledIcon = styled(Icon, {
  flexShrink: 0,
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
      <StyledNavigationMenuVerticalAccordionTrigger size="md" {...rest} asChild>
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
