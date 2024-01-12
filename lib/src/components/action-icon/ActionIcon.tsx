import type { VariantProps } from '@stitches/react'
import invariant from 'invariant'
import * as React from 'react'

import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { disabledStyle, Override } from '~/utilities'
import type { TOptionalTooltipWrapperProps } from '~/utilities/optional-tooltip-wrapper'
import { OptionalTooltipWrapper } from '~/utilities/optional-tooltip-wrapper'
import { getExternalAnchorProps } from '~/utilities/uri'

import { Icon } from '../icon/Icon'
import { ActionIconSizeMap } from './ActionIcon.constants'

const getSimpleVariant = (
  theme: string,
  base: string,
  interact: string,
  active: string
) => ({
  theme,
  appearance: 'simple',
  css: {
    bg: 'transparent',
    color: base,
    '&:not(:disabled):hover, &:not(:disabled):focus': { color: interact },
    '&:not(:disabled):active': { color: active }
  }
})

const getSolidVariant = (
  theme: string,
  base: string,
  interact: string,
  active: string
) => ({
  theme,
  appearance: 'solid',
  css: {
    bg: base,
    color: 'white',
    '&:not(:disabled):hover, &:not(:disabled):focus': {
      bg: interact,
      color: 'white'
    },
    '&:not(:disabled):active': { bg: active }
  }
})

const getOutlineVariant = (
  theme: string,
  base: string,
  interact: string,
  active: string
) => ({
  theme,
  appearance: 'outline',
  css: {
    border: '1px solid',
    borderColor: 'currentColor',
    color: base,
    '&:not(:disabled):hover, &:not(:disabled):focus': { color: interact },
    '&:not(:disabled):active': { color: active }
  }
})

const StyledButton = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  bg: 'white',
  border: 'unset',
  borderRadius: '$0',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  p: 'unset',
  transition: 'all 100ms ease-out',
  '&[disabled]': disabledStyle,
  variants: {
    theme: {
      neutral: {},
      primary: {},
      success: {},
      warning: {},
      danger: {}
    },
    appearance: {
      simple: {},
      outline: {},
      solid: {}
    },
    size: {
      xs: { size: '$2' },
      sm: { size: '$3' },
      md: { size: '$4' },
      lg: { size: '$5' }
    },
    isRounded: {
      true: {
        borderRadius: '$round'
      }
    }
  },

  // prettier-ignore
  compoundVariants: [
    getSimpleVariant('neutral', '$tonal300', '$primary900', '$primary1000'),
    getSimpleVariant('primary', '$primary800', '$primary900', '$primary1000'),
    getSimpleVariant('primaryDark', '$primary1000', '$primary1100', '$primary1200'),
    getSimpleVariant('success', '$success', '$successMid', '$successDark'),
    getSimpleVariant('warning', '$warning', '$warningMid', '$warningDark'),
    getSimpleVariant('danger', '$danger', '$dangerMid', '$dangerDark'),

    getSolidVariant('primary', '$primary800', '$primary900', '$primary1000'),
    getSolidVariant('primaryDark', '$primary1000', '$primary1100', '$primary1200'),
    getSolidVariant('success', '$success', '$successMid', '$successDark'),
    getSolidVariant('warning', '$warning', '$warningMid', '$warningDark'),
    getSolidVariant('danger', '$danger', '$dangerMid', '$dangerDark'),

    getOutlineVariant('primary', '$primary800', '$primary900', '$primary1000'),
    getOutlineVariant('primaryDark', '$primary1000', '$primary1100', '$primary1200'),
    getOutlineVariant('success', '$success', '$successMid', '$successDark'),
    getOutlineVariant('warning', '$warning', '$warningMid', '$warningDark'),
    getOutlineVariant('danger', '$danger', '$dangerMid', '$dangerDark')
  ]
})

type ActionIconProps = Override<
  React.ComponentProps<typeof StyledButton>,
  VariantProps<typeof StyledButton> & {
    as?: string | React.ReactNode
    children: React.ReactNode
    label: string
  } & Omit<TOptionalTooltipWrapperProps, 'label'> &
    NavigatorActions
>

export const ActionIcon = React.forwardRef<HTMLButtonElement, ActionIconProps>(
  (
    {
      children,
      theme = 'primary',
      appearance = 'simple',
      size = 'sm',
      label,
      href,
      disabled,
      hasTooltip = true,
      tooltipSide,
      ...remainingProps
    },
    ref
  ) => {
    const INVALID_CHILDREN_MESSAGE = `A single ${Icon.displayName} component is permitted as a child of ${ActionIcon.displayName}`

    invariant(React.Children.count(children) === 1, INVALID_CHILDREN_MESSAGE)

    const optionalLinkProps = href
      ? ({
          as: 'a',
          href: disabled ? null : href,
          onClick: undefined,
          'aria-disabled': !!disabled
        } as const)
      : ({ type: 'button' } as const)

    return (
      <OptionalTooltipWrapper
        hasTooltip={hasTooltip}
        label={label}
        tooltipSide={tooltipSide}
      >
        <StyledButton
          {...optionalLinkProps}
          {...getExternalAnchorProps(href)}
          {...remainingProps}
          aria-label={label}
          theme={theme}
          appearance={appearance}
          size={size}
          ref={ref}
          disabled={disabled}
        >
          {React.Children.map(children, (child) => {
            // TS needs this check for any following code to access child.type
            // even with optional chaining
            if (!React.isValidElement(child)) {
              throw new Error(INVALID_CHILDREN_MESSAGE)
            }

            invariant(
              child.type === Icon,
              `Children of type ${child?.type} aren't permitted. Only an ${Icon.displayName} component is allowed in ${ActionIcon.displayName}`
            )

            return React.cloneElement(child, {
              size: ActionIconSizeMap[size as string],
              css: { ...(child.props.css ? child.props.css : {}) }
            })
          })}
        </StyledButton>
      </OptionalTooltipWrapper>
    )
  }
)

ActionIcon.displayName = 'ActionIcon'
