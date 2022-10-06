import { styled } from '@stitches/react'
import * as React from 'react'

import type { CSS } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { Tooltip } from '../tooltip'

interface NumberInputStepperProps
  extends Omit<React.ComponentProps<typeof ActionIcon>, 'children' | 'label'> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  isRootDisabled: boolean
  disabledTooltipContent: string
}

const StyledSpan = styled('span', { zIndex: 1 })

const getButtonStyles = ({ isRootDisabled, disabled }): CSS => ({
  borderColor: '$tonal400',
  zIndex: 1,
  '&:hover': {
    bg: '$tonal50',
    svg: {
      color: '$tonal400'
    }
  },
  '&:active': {
    bg: '$tonal100',
    svg: {
      color: '$tonal500'
    }
  },
  '&:disabled': {
    opacity: isRootDisabled ? 1 : 0.3
  },
  pointerEvents: isRootDisabled || disabled ? 'none' : 'all'
})

export const NumberInputStepper: React.ForwardRefExoticComponent<NumberInputStepperProps> =
  React.forwardRef((props, forwardedRef) => {
    const {
      icon,
      disabledTooltipContent,
      isRootDisabled,
      css,
      disabled,
      ...rest
    } = props
    const [tooltipOpen, setTooltipOpen] = React.useState(false)

    const onOpenChange = (open: boolean) => {
      if (isRootDisabled || !disabled) return
      setTooltipOpen(open)
    }

    return (
      <Tooltip open={tooltipOpen} onOpenChange={onOpenChange}>
        <Tooltip.Trigger asChild>
          <StyledSpan aria-hidden>
            <ActionIcon
              tabIndex={-1}
              appearance="outline"
              css={{ ...getButtonStyles({ isRootDisabled, disabled }), ...css }}
              ref={forwardedRef}
              disabled={disabled}
              label=""
              {...rest}
            >
              <Icon is={icon} css={{ color: '$tonal300' }} />
            </ActionIcon>
          </StyledSpan>
        </Tooltip.Trigger>
        <Tooltip.Content>{disabledTooltipContent}</Tooltip.Content>
      </Tooltip>
    )
  })
