import { Trigger } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'
import { disabledStyle, focusVisibleStyleBlock } from '~/utilities'

import { Text } from '../text'

const StyledTabsTriggerHoverBackground = styled('div', {
  position: 'absolute',
  inset: 0,
  height: 'calc(100% + 2px)',
  opacity: 0,
  bg: '$interactive1'
})

const StyledTabsTrigger = styled(Trigger, {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  flexShrink: 0,
  p: '$4',
  userSelect: 'none',
  borderBottom: '2px solid transparent',
  position: 'relative',
  '&[data-state="active"]': {
    color: '$interactive1',
    fontWeight: 600,
    letterSpacing: '-0.005em',
    borderColor: 'currentColor'
  },
  '&[disabled]': disabledStyle,
  '&:not([disabled])': {
    '&:hover, &:focus-visible': {
      color: '$interactive2',
      [`& ${StyledTabsTriggerHoverBackground}`]: {
        opacity: 0.07
      }
    },
    '&:active': {
      color: '$interactive3'
    },
    '&:focus-visible': {
      ...focusVisibleStyleBlock()
    }
  }
})

export const TabsTrigger = ({
  children,
  ...rest
}: React.ComponentProps<typeof StyledTabsTrigger> & { value: string }) => (
  <StyledTabsTrigger {...rest}>
    <Text size="sm" as="span">
      {children}
    </Text>
    <StyledTabsTriggerHoverBackground />
  </StyledTabsTrigger>
)

TabsTrigger.displayName = 'TabsTrigger'
