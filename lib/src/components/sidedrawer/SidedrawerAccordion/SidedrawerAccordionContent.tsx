import { Content } from '@radix-ui/react-accordion'
import React from 'react'

import { keyframes, styled } from '~/stitches'

import { Box } from '../../box/Box'

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' }
})

const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 }
})

const StyledContent = styled(Content, {
  bg: 'white',
  overflow: 'hidden',
  '@allowMotion': {
    '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
    '&[data-state="closed"]': { animation: `${close} 300ms ease-out` }
  }
})

export const SidedrawerAccordionContent: React.FC<
  React.ComponentProps<typeof StyledContent>
> = ({ children, ...remainingProps }) => (
  <StyledContent {...remainingProps}>
    {React.Children.map(children, (child) => {
      return (
        <Box
          css={{
            '> a': {
              px: '$6'
            },
            '> button': {
              px: '$6'
            }
          }}
        >
          {child}
        </Box>
      )
    })}
  </StyledContent>
)
