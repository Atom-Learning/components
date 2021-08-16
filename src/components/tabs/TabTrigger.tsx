import * as React from 'react'
import { Trigger } from '@radix-ui/react-tabs'
import { CSS, styled } from '~/stitches'

const StyledTabTrigger = styled(Trigger, {
  flexShrink: 0,
  padding: '$3',
  color: '$primary500',
  fontFamily: '$sans',
  userSelect: 'none',
  '&:hover': { color: '$primary900' },
  '&[data-disabled]': { color: '$tonal600' },
  '&[data-disabled]:hover': { color: '$tonal600' },
  '&[data-state="active"]': {
    color: '$primary900',
    fontWeight: 'bold',
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
