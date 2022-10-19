import { List } from '@radix-ui/react-tabs'
import React from 'react'
import { styled } from '~/stitches'
import { ColorScheme } from '@atom-learning/color-scheme'

const StyledTriggerList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid $tonal3',
  width: '100%',
  variants: {
    appearance: {
      uppercase: { textTransform: 'uppercase' }
    }
  }
})

export const TabsTriggerList: React.FC<
  React.ComponentProps<typeof StyledTriggerList>
> = ({ children, appearance, ...rest }) => {
  return (
    <ColorScheme
      as={StyledTriggerList}
      accent="blue"
      interactiveAccentMode="hiContrast"
      appearance={appearance}
      {...rest}
    >
      {children}
    </ColorScheme>
  )
}
