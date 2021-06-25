import { Close as CloseIcon } from '@atom-learning/icons'
import { Arrow, Close, Content } from '@radix-ui/react-popover'
import * as React from 'react'

import { keyframes, styled } from '~/stitches'

import { Icon } from '../icon'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.8)' },
  '100%': { opacity: 1, transform: 'scale(1)' }
})

const StyledContent = styled(Content, {
  animation: `${scaleIn} 75ms ease-out`,
  bg: 'white',
  borderRadius: '$1',
  boxShadow: '$1',
  maxWidth: '90vw',
  p: '$sizes$2',
  position: 'relative',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
  variants: {
    size: {
      sm: { maxWidth: '200px' },
      md: { maxWidth: '400px' },
      lg: { maxWidth: '600px' }
    }
  }
})

const StyledClose = styled(Close, {
  all: 'unset',
  alignItems: 'center',
  color: '$tonal700',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  right: '0',
  size: '$4',
  top: '0',
  transition: 'color 100ms ease-out',
  '&:hover,&:focus': {
    color: '$primary'
  }
})

const StyledArrow = styled(Arrow, {
  fill: 'white',
  zIndex: 1,
  '[data-align="end"] &': { mr: '$sizes$2' },
  '[data-align="start"] &': { ml: '$sizes$2' }
})

type PopoverContentProps = React.ComponentProps<typeof StyledContent> &
  React.ComponentProps<typeof Content>

export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  side = 'top',
  sideOffset = 8,
  size = 'md',
  ...remainingProps
}) => (
  <StyledContent
    size={size}
    side={side}
    sideOffset={sideOffset}
    {...remainingProps}
  >
    <StyledClose>
      <Icon is={CloseIcon} />
    </StyledClose>
    {children}
    <StyledArrow width={16} height={8} />
  </StyledContent>
)
