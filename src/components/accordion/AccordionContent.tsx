import { Content } from '@radix-ui/react-accordion'
import React from 'react'
import { CSSWrapper } from '~/utilities'

import { keyframes, styled } from '~/stitches'

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
  bg: '#fff',
  '&[data-state="open"]': { borderRadius: '0 0 $0 $0' },

  '@allowMotion': {
    '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
    '&[data-state="closed"]': { animation: `${close} 300ms ease-out` }
  }
})

type AccordionContentProps = React.ComponentProps<typeof StyledContent>

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  css,
  ...remainingProps
}) => (
  <StyledContent {...remainingProps}>
    <CSSWrapper css={css}>{children}</CSSWrapper>
  </StyledContent>
)
