import { Arrow, Content } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { keyframes, styled } from '~/stitches'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.8)' },
  '100%': { opacity: 1, transform: 'scale(1)' }
})

const StyledContent = styled(Content, {
  animation: `${scaleIn} 75ms ease-out`,
  backgroundColor: '$tonal500',
  borderRadius: '$0',
  boxShadow: '$0',
  color: 'white',
  fontFamily: '$body',
  fontSize: '$sm',
  lineHeight: 1.2,
  px: '$3',
  py: '$2',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
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
