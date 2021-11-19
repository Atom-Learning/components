import { Trigger } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledTabTrigger = styled(Trigger, {
  textTransform: 'uppercase',
  cursor: 'pointer',
  flexShrink: 0,
  fontFamily: '$body',
  p: '$4',
  userSelect: 'none',
  transition: '0.3s',
  variants: {
    theme: {
      light: {},
      dark: {}
    }
  }
})

interface TabTriggerProps
  extends React.ComponentProps<typeof StyledTabTrigger> {
  value: string
  disabled?: boolean
}

export const TabTrigger: React.FC<TabTriggerProps> = ({
  children,
  theme,
  disabled = false,
  css,
  ...otherProps
}) => (
  <StyledTabTrigger css={css} disabled={disabled} theme={theme} {...otherProps}>
    {children}
  </StyledTabTrigger>
)

TabTrigger.displayName = 'TabTrigger'
