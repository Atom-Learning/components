import { Link } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'
import { preventEvent } from '~/utilities/event'
import { isExternalLink } from '~/utilities/uri'

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

export const NavigationMenuVerticalLink: React.FC<
  NavigationMenuVerticalItemProps
> = ({ as, href, children, ...rest }) => {
  const linkProps = isExternalLink(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  const buttonProps = {
    type: 'button'
  }

  const Component = as || (href ? 'a' : 'button')
  const componentProps = as ? {} : href ? linkProps : buttonProps

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
