import { Trigger } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledTabTrigger = styled(Trigger, {
  color: '$primary',
  cursor: 'pointer',
  flexShrink: 0,
  fontFamily: '$body',
  p: '$4',
  userSelect: 'none',
  '&:hover': { color: '$tertiary' },
  '&[data-disabled]': { color: '$tonal600' },
  '&[data-disabled]:hover': { color: '$tonal600' },
  '&[data-state="active"]': {
    color: '$tertiary',
    boxShadow: 'inset 0 -3px 0 0 currentColor'
  }
})

type TabTriggerProps = React.ComponentProps<typeof StyledTabTrigger> & {
  value: string
  disabled: boolean
}

export const TabTrigger: React.FC<TabTriggerProps> = ({
  children,
  disabled = false,
  css,
  ...otherProps
}) => (
  <StyledTabTrigger css={css} disabled={disabled} {...otherProps}>
    {children}
  </StyledTabTrigger>
)

TabTrigger.displayName = 'TabTrigger'
