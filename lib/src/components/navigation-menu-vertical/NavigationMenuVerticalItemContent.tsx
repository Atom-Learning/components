import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'

import { NavigationMenuVerticalIcon } from './NavigationMenuVerticalIcon'
import { NavigationMenuVerticalText } from './NavigationMenuVerticalText'

type TNavigationMenuVerticalItemContentProps = React.ComponentProps<typeof Flex>

export const NavigationMenuVerticalItemContent = ({
  children,
  ...rest
}: TNavigationMenuVerticalItemContentProps): JSX.Element => {
  return (
    <Flex gap="2" align="center" {...rest}>
      {
        React.Children.map(children, (child) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return (
              <NavigationMenuVerticalText>{child}</NavigationMenuVerticalText>
            )
          }
          if (React.isValidElement(child) && child.type === Icon) {
            return <NavigationMenuVerticalIcon {...child.props} />
          }
          return child
        }) as React.ReactElement[]
      }
    </Flex>
  )
}
