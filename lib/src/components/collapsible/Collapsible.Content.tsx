import { Content } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { keyframes, styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'

const open = keyframes({
  from: { height: 0, opacity: 0, py: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' }
})

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0, opacity: 1, py: 'unset' }
})

const StyledContent = styled(Content, {
  overflow: 'hidden',
  '@allowMotion': {
    '&[data-state="open"]': { animation: `${open} 200ms ease-out` },
    '&[data-state="closed"]': { animation: `${close} 200ms ease-out` }
  },
  variants: { space: createThemeVariants('space', { m: '$key' }) }
})

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  React.ComponentPropsWithRef<typeof StyledContent>
>(({ children, ...props }, ref) => (
  <StyledContent ref={ref} {...props}>
    {children}
  </StyledContent>
))

CollapsibleContent.displayName = 'Collapsible.Content'
