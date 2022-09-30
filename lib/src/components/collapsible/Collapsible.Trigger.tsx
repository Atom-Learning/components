import { ChevronRight } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledTrigger = styled(Trigger, {
  cursor: 'pointer'
})

export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  React.ComponentPropsWithRef<typeof StyledTrigger>
>(({ children, css, ...props }, ref) => (
  <StyledTrigger
    ref={ref}
    css={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      border: 'none',
      bg: 'transparent',
      ...css
    }}
    {...props}
  >
    <Icon
      is={ChevronRight}
      css={{
        mr: '$4',
        transition: 'transform 200ms ease-out',
        '[data-state="open"] &': { transform: 'rotate(90deg)' }
      }}
    />
    {children}
  </StyledTrigger>
))
