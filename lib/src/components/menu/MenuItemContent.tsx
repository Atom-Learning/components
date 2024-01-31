import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

import { MenuIcon } from './MenuIcon'
import { MenuText } from './MenuText'

const StyledMenuItemContent = styled(Flex, {
  width: '100%',
  py: '$1',
  px: '$3',
  minHeight: '$5',
})

export const MenuItemContent = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledMenuItemContent gap={2} align="center" {...rest} ref={ref}>
      {
        React.Children.map(children, (child) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return (
              <MenuText>{child}</MenuText>
            )
          }
          if (React.isValidElement(child) && child.type === Icon) {
            return <MenuIcon {...child.props} />
          }
          return child
        }) as React.ReactElement[]
      }
    </StyledMenuItemContent>
  )
})
