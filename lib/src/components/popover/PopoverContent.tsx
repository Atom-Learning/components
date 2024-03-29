import { Close as CloseIcon } from '@atom-learning/icons'
import { Arrow, Close, Content } from '@radix-ui/react-popover'
import * as React from 'react'

import { POPOVER_Z_INDEX } from '~/constants/zIndices'
import { styled } from '~/stitches'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade
} from '~/utilities'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'

const StyledContent = styled(Content, {
  bg: 'white',
  borderRadius: '$1',
  boxShadow: '$2',
  maxWidth: '90vw',
  p: '$sizes$2',
  pr: '$6',
  position: 'relative',
  zIndex: POPOVER_Z_INDEX,
  '@allowMotion': {
    animationDuration: '75ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  },
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
    showCloseButton?: boolean
  }

export const PopoverContent = ({
  children,
  side = 'top',
  sideOffset = 8,
  closePopoverText = 'Close popover',
  showCloseButton = true,
  size = 'md',
  ...remainingProps
}: PopoverContentProps) => (
  <StyledContent
    size={size}
    side={side}
    sideOffset={sideOffset}
    {...remainingProps}
  >
    {showCloseButton && (
      <ActionIcon
        as={Close}
        css={{ position: 'absolute', right: '$0', top: '$0' }}
        label={closePopoverText}
        size="md"
        hasTooltip={false}
        theme="neutral"
      >
        <Icon is={CloseIcon} />
      </ActionIcon>
    )}
    {children}
    <StyledArrow width={16} height={8} />
  </StyledContent>
)
