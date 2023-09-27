import { Link } from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'
import { preventEvent } from '~/utilities/event'

import { navigationMenuVerticalItemStyles } from './NavigationMenuVertical.styles'
import { NavigationMenuVerticalItem } from './NavigationMenuVerticalItem'
import { NavigationMenuVerticalItemContent } from './NavigationMenuVerticalItemContent'

const StyledNavigationMenuVerticalLink = styled(
  Link,
  navigationMenuVerticalItemStyles
)

type NavigationMenuVerticalItemProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalLink
>

export const NavigationMenuVerticalLink: React.FC<
  NavigationMenuVerticalItemProps
> = ({ href, children, ...rest }) => {
  return (
    <NavigationMenuVerticalItem>
      <StyledNavigationMenuVerticalLink
        size="md"
        {...rest}
        onSelect={preventEvent}
        asChild
      >
        {href ? (
          <a href={href}>
            <NavigationMenuVerticalItemContent>
              {children}
            </NavigationMenuVerticalItemContent>
          </a>
        ) : (
          <button type="button">
            <NavigationMenuVerticalItemContent>
              {children}
            </NavigationMenuVerticalItemContent>
          </button>
        )}
      </StyledNavigationMenuVerticalLink>
    </NavigationMenuVerticalItem>
  )
}
