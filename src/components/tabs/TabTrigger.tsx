import { Trigger } from '@radix-ui/react-tabs'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledTabTrigger = styled(Trigger, {
  color: '$tonal400',
  cursor: 'pointer',
  flexShrink: 0,
  fontFamily: '$body',
  fontSize: '$md',
  fontWeight: 600,
  minHeight: '$3',
  position: 'relative',
  py: '$3',
  transition: '75ms color ease-out',
  userSelect: 'none',
  '&:hover': {
    color: '$primary'
  },
  '&:not(:last-child)': {
    mr: '$4'
  },
  '&[data-state="active"]': {
    color: '$primary'
  },
  '&[data-state="active"]:hover': {
    color: '$primaryMid'
  },
  '&[data-state="active"]::after': {
    bg: 'currentColor',
    bottom: '-1px',
    content: '',
    height: '2px',
    left: 0,
    position: 'absolute',
    width: '100%'
  },
  '&[data-disabled], &[data-disabled]:hover': {
    color: '$tonal300',
    cursor: 'default'
  }
})

type TabTriggerProps = React.ComponentProps<typeof StyledTabTrigger> & {
  value: string
  disabled?: boolean
}

export const TabTrigger: React.FC<TabTriggerProps> = ({
  children,
  css,
  ...otherProps
}) => (
  <StyledTabTrigger css={css} {...otherProps}>
    {children}
  </StyledTabTrigger>
)

TabTrigger.displayName = 'TabTrigger'
