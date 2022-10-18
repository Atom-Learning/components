import { Trigger } from '@radix-ui/react-tabs'
import * as React from 'react'
import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'
import { Text } from '../text'

const StyledTabTrigger = styled(Trigger, {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  flexShrink: 0,
  p: '$4',
  userSelect: 'none',
  borderBottom: '2px solid transparent',
  '&[data-state="active"]': {
    color: '$interactive1',
    fontWeight: 600,
    letterSpacing: '-0.005em',
    borderColor: 'currentColor'
  },
  '&[data-disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&:not([data-disabled])': {
    '&:hover, &:focus-visible': {
      color: '$interactive2',
      bg: '$accentA1'
    },
    '&:active': {
      color: '$interactive3',
    },
    '&:focus-visible': {
      ...focusVisibleStyleBlock(),
    }
  }
})

interface TabTriggerProps
  extends React.ComponentProps<typeof StyledTabTrigger> {
  value: string
}

export const TabTrigger: React.FC<TabTriggerProps> = ({
  children,
  ...rest
}) => (
  <StyledTabTrigger asChild {...rest}><Text size="sm" as="span">{children}</Text></StyledTabTrigger>
)

TabTrigger.displayName = 'TabTrigger'
