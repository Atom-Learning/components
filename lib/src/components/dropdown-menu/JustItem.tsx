import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { Text } from '../text'

const StyledDropdownMenuItem = styled(Flex, {
  width: '100%',
  py: '$1',
  px: '$3',
  minHeight: '$5',
})

export const JustItem = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledDropdownMenuItem gap={2} align="center" {...rest} ref={ref}>
      {React.Children.map(children, (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          return <Text>{child}</Text>
        }
        return child
      })}
    </StyledDropdownMenuItem>
  )
})
