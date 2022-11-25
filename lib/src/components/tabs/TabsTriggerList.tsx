import { List } from '@radix-ui/react-tabs'
import React from 'react'
import { styled } from '~/stitches'
import { ColorScheme } from '@atom-learning/color-scheme'

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid $base3',
  width: 'max-content'
})

export const TabsTriggerList: React.FC<
  React.ComponentProps<typeof StyledTriggerList> & {
    colorScheme?: typeof ColorScheme
  }
> = ({ children, colorScheme = {}, ...rest }) => {
  return (
    <ColorScheme
      as={StyledTriggerList}
      base="slate"
      accent="blue"
      interactive="hiContrast1"
      {...colorScheme}
      {...rest}
    >
      {children}
    </ColorScheme>
  )
}
