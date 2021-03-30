import { Arrow, Content } from '@radix-ui/react-tooltip'
import * as React from 'react'

import { keyframes, styled } from '~/stitches'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.8)' },
  '100%': { opacity: 1, transform: 'scale(1)' }
})

const StyledContent = styled(Content, {
  animation: `${scaleIn} 75ms ease-out`,
  backgroundColor: '$tonal600',
  borderRadius: '$0',
  color: 'white',
  fontFamily: '$sans',
  fontSize: '$sm',
  px: '$2',
  py: '$1',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)'
})

const StyledArrow = styled(Arrow, {
  fill: '$tonal600'
})

type TooltipContentProps = React.ComponentProps<typeof Content>

export const TooltipContent: React.FC<TooltipContentProps> = ({
  sideOffset = 8,
  side = 'top',
  children,
  ...props
}) => (
  <StyledContent side={side} sideOffset={sideOffset} {...props}>
    {children}
    <StyledArrow />
  </StyledContent>
)
