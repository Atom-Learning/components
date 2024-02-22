import { Content } from '@radix-ui/react-accordion'
import React from 'react'

import { keyframes, styled } from '~/stitches'
import { CSSWrapper } from '~/utilities'

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' }
})

const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 }
})

const StyledContent = styled(Content, {
  border: 0,
  width: '100%',
  bg: '$base1',
  overflow: 'hidden',
  '&[data-state="open"]': { borderRadius: '0 0 $0 $0' },

  '@allowMotion': {
    '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
    '&[data-state="closed"]': { animation: `${close} 300ms ease-out` }
  }
})

export const AccordionContent = ({
  children,
  css,
  ...remainingProps
}: React.ComponentProps<typeof StyledContent>) => (
  <StyledContent {...remainingProps}>
    <CSSWrapper css={css}>{children}</CSSWrapper>
  </StyledContent>
)
