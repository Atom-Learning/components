import { Link } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'
import { preventEvent } from '~/utilities/event'
import { getExternalAnchorProps } from '~/utilities/uri'

import { navigationMenuVerticalItemStyles } from './NavigationMenuVertical.styles'
import { NavigationMenuVerticalItem } from './NavigationMenuVerticalItem'
import { NavigationMenuVerticalItemContent } from './NavigationMenuVerticalItemContent'

const StyledNavigationMenuVerticalLink = styled(
  Link,
  navigationMenuVerticalItemStyles
)

type NavigationMenuVerticalItemProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalLink
> & {
  as?: React.ComponentType | React.ElementType
}

export const NavigationMenuVerticalLink = ({
  as,
  href,
  children,
  ...rest
}: NavigationMenuVerticalItemProps) => {
  const Component = as || (href ? 'a' : 'button')
  const componentProps = as
    ? {}
    : href
    ? getExternalAnchorProps(href)
    : { type: 'button' }

  return (
    <NavigationMenuVerticalItem>
      <StyledNavigationMenuVerticalLink
        size="lg"
        href={href}
        {...rest}
        {...componentProps}
        onSelect={preventEvent}
        asChild // ?: Can't use `as` for this as we lose `data-active` etc. attributes when we try to. Using `asChild` and `Component` as a workaround.
      >
        <Component>
          <NavigationMenuVerticalItemContent>
            {children}
          </NavigationMenuVerticalItemContent>
        </Component>
      </StyledNavigationMenuVerticalLink>
    </NavigationMenuVerticalItem>
  )
}
