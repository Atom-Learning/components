import { Arrow, Content } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { styled } from '~/stitches'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade
} from '~/utilities'

const StyledContent = styled(Content, {
  backgroundColor: '$tonal500',
  borderRadius: '$0',
  boxShadow: '$0',
  color: 'white',
  fontFamily: '$body',
  fontSize: '$sm',
  lineHeight: 1.5,
  px: '$3',
  py: '$2',
  '@allowMotion': {
    animationDuration: '75ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  },
  variants: {
    size: {
      sm: { maxWidth: '100px' },
      md: { maxWidth: '250px' },
      lg: { maxWidth: '400px' }
    }
  }
})

const StyledArrow = styled(Arrow, {
  fill: '$tonal500',
  '[data-align="end"] &': { mr: '$2' },
  '[data-align="start"] &': { ml: '$2' }
})

type TooltipContentProps = React.ComponentProps<typeof StyledContent> &
  React.ComponentProps<typeof Content>

export const TooltipContent: React.FC<TooltipContentProps> = ({
  children,
  side = 'top',
  sideOffset = 4,
  size = 'md',
  ...remainingProps
}) => (
  <StyledContent
    side={side}
    sideOffset={sideOffset}
    size={size}
    {...remainingProps}
  >
    {children}
    <StyledArrow />
  </StyledContent>
)
