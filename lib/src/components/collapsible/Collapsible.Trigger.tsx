import { ChevronRight } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { CSS, styled, theme } from '~/stitches'
import { createThemeVariants } from '~/utilities'

import { Icon } from '../icon'

const StyledTrigger = styled(Trigger, {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  border: 'none',
  bg: 'transparent',
  variants: { space: createThemeVariants('space', { p: '$key' }) }
})

export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  React.ComponentPropsWithRef<typeof StyledTrigger>
>(({ children, ...props }, ref) => (
  <StyledTrigger ref={ref} {...props}>
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

CollapsibleTrigger.displayName = 'Collapsible.Trigger'
