import { Content } from '@radix-ui/react-collapsible'
import React from 'react'

import { styled } from '~/stitches'

import { NavigationMenuVerticalAccordionContext } from './NavigationMenuVerticalAccordion'
import { NavigationMenuVerticalList } from './NavigationMenuVerticalList'

const StyledNavigationMenuVerticalAccordionContent = styled(Content, {})

type TNavigationMenuVerticalAccordionContentProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalAccordionContent
> &
  React.ComponentProps<typeof NavigationMenuVerticalList>

export const NavigationMenuVerticalAccordionContent = ({
  children,
  ...rest
}: TNavigationMenuVerticalAccordionContentProps): JSX.Element => {
  const { triggerRef } = React.useContext(
    NavigationMenuVerticalAccordionContext
  )

  const handleOnKeydown = (e) => {
    if (!triggerRef?.current) return
    if (e.key === 'Escape') {
      e.stopPropagation()
      e.preventDefault()
      triggerRef.current.focus()
      triggerRef.current.click()
    }
  }

  return (
    <StyledNavigationMenuVerticalAccordionContent
      onKeyDown={handleOnKeydown}
      {...rest}
    >
      <NavigationMenuVerticalList>{children}</NavigationMenuVerticalList>
    </StyledNavigationMenuVerticalAccordionContent>
  )
}
