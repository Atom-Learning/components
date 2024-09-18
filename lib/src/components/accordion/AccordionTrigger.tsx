import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-accordion'
import React from 'react'

import { ColorScheme, TcolorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'

import { Icon } from '../icon'

const RotatingIcon = styled(Icon, {
  transition: 'transform 300ms',
  '[data-state="open"] > &': {
    transform: 'rotate(180deg)'
  },
  '[data-state="closed"] > &': {
    transform: 'rotate(0deg)'
  }
})

const StyledTrigger = styled(Trigger, {
  border: 0,
  py: '$3',
  px: '$4',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  bg: '$interactive2',
  color: '$interactiveForeground',
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&:not([disabled])': {
    '&:active, &:hover, &:focus-visible': {
      bg: '$interactive3'
    },
    '&:focus-visible': {
      ...focusVisibleStyleBlock()
    }
  },
  '&[data-state="open"]': {
    borderRadius: '$0 $0 0 0'
  },
  '&[data-state="closed"]': {
    borderRadius: '$0'
  }
})

export const AccordionTrigger = ({
  children,
  colorScheme = {},
  asChild,
  ...remainingProps
}: React.ComponentProps<typeof StyledTrigger> & {
  colorScheme?: TcolorScheme
}) => (
  <ColorScheme asChild accent="grey1" interactive="loContrast" {...colorScheme}>
    <StyledTrigger asChild={asChild} {...remainingProps}>
      {asChild ? (
        children
      ) : (
        <>
          {children}
          <RotatingIcon is={ChevronDown} data-testid="accordion-chevron" />
        </>
      )}
    </StyledTrigger>
  </ColorScheme>
)
