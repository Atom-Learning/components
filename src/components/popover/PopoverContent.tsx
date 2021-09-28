import { Close as CloseIcon } from '@atom-learning/icons'
import { Arrow, Close, Content } from '@radix-ui/react-popover'
import * as React from 'react'

import { keyframes, styled } from '~/stitches'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.9)' },
  '100%': { opacity: 1, transform: 'scale(1)' }
})

const StyledContent = styled(Content, {
  animation: `${scaleIn} 50ms ease-out`,
  bg: 'white',
  borderRadius: '$1',
  boxShadow: '$1',
  maxWidth: '90vw',
  p: '$sizes$1',
  // pr: '$6',
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

const StyledArrow = styled(Arrow, {
  fill: 'white',
  zIndex: 1,
  '[data-align="end"] &': { mr: '$sizes$2' },
  '[data-align="start"] &': { ml: '$sizes$2' }
})

type PopoverContentProps = React.ComponentProps<typeof StyledContent> &
  React.ComponentProps<typeof Content> & {
    closePopoverText?: string
  }

export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  side = 'top',
  sideOffset = 8,
  closePopoverText = 'Close popover',
  size = 'md',
  ...remainingProps
}) => (
  <StyledContent
    size={size}
    side={side}
    sideOffset={sideOffset}
    {...remainingProps}
  >
    {/* <ActionIcon
      as={Close}
      css={{ position: 'absolute', right: '$0', top: '$0' }}
      label={closePopoverText}
      size="lg"
      theme="neutral"
    >
      <Icon is={CloseIcon} />
    </ActionIcon> */}
    {children}
    <StyledArrow width={16} height={8} />
  </StyledContent>
)
