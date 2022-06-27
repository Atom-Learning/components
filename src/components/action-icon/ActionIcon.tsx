import type * as Stitches from '@stitches/react'
import { darken } from 'color2k'
import invariant from 'invariant'
import * as React from 'react'

import { styled, theme } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

import { Icon } from '../icon/Icon'

const getSimpleVariant = (base: string, interact: string, active: string) => ({
  bg: 'transparent',
  color: base,
  '&:not(:disabled):hover, &:not(:disabled):focus': {
    color: interact
  },
  '&:not(:disabled):active': {
    color: active
  },
  '&[disabled]': {
    color: '$tonal400',
    cursor: 'not-allowed'
  }
})
const getSolidVariant = (base: string, interact: string, active: string) => ({
  bg: base,
  color: 'white',
  '&:not(:disabled):hover, &:not(:disabled):focus': {
    bg: interact,
    color: 'white'
  },
  '&:not(:disabled):active': {
    bg: active
  },
  '&[disabled]': {
    bg: '$tonal100',
    color: '$tonal400',
    cursor: 'not-allowed'
  }
})
const getOutlineVariant = (base: string, interact: string, active: string) => ({
  border: '1px solid',
  borderColor: 'currentColor',
  color: base,
  '&:not(:disabled):hover, &:not(:disabled):focus': {
    color: interact
  },
  '&:not(:disabled):active': {
    color: active
  },
  '&[disabled]': {
    borderColor: '$tonal400',
    color: '$tonal400',
    cursor: 'not-allowed'
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
  justifyContent: 'center',
  p: 'unset',
  transition: 'all 100ms ease-out',
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
      sm: { size: '$2 ' },
      md: { size: '$3' },
      lg: { size: '$4' },
      xl: { size: '$5' }
    },
    isRounded: {
      true: {
        borderRadius: '$round'
      }
    }
  },
  compoundVariants: [
    // Appearance Simple
    {
      theme: 'neutral',
      appearance: 'simple',
      css: getSimpleVariant('$tonal300', '$primaryMid', '$primaryDark')
    },
    {
      theme: 'primary',
      appearance: 'simple',
      css: getSimpleVariant('$primary', '$primaryMid', '$primaryDark')
    },
    {
      theme: 'primaryDark',
      appearance: 'simple',
      css: getSimpleVariant(
        '$primaryDark',
        darken(theme.colors.primaryDark.value, 0.1),
        darken(theme.colors.primaryDark.value, 0.15)
      )
    },
    {
      theme: 'success',
      appearance: 'simple',
      css: getSimpleVariant('$success', '$successMid', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'simple',
      css: getSimpleVariant('$warning', '$warningMid', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'simple',
      css: getSimpleVariant('$danger', '$dangerMid', '$dangerDark')
    },

    // Appearance Solid
    {
      theme: 'primary',
      appearance: 'solid',
      css: getSolidVariant('$primary', '$primaryMid', '$primaryDark')
    },
    {
      theme: 'primaryDark',
      appearance: 'solid',
      css: getSolidVariant(
        '$primaryDark',
        darken(theme.colors.primaryDark.value, 0.1),
        darken(theme.colors.primaryDark.value, 0.15)
      )
    },
    {
      theme: 'success',
      appearance: 'solid',
      css: getSolidVariant('$success', '$successMid', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'solid',
      css: getSolidVariant('$warning', '$warningMid', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'solid',
      css: getSolidVariant('$danger', '$dangerMid', '$dangerDark')
    },

    // Appearance Outline
    {
      theme: 'primary',
      appearance: 'outline',
      css: getOutlineVariant('$primary', '$primaryMid', '$primaryDark')
    },
    {
      theme: 'primaryDark',
      appearance: 'outline',
      css: getOutlineVariant(
        '$primaryDark',
        darken(theme.colors.primaryDark.value, 0.1),
        darken(theme.colors.primaryDark.value, 0.15)
      )
    },
    {
      theme: 'success',
      appearance: 'outline',
      css: getOutlineVariant('$success', '$successMid', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'outline',
      css: getOutlineVariant('$warning', '$warningMid', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'outline',
      css: getOutlineVariant('$danger', '$dangerMid', '$dangerDark')
    }
  ]
})

type ActionIconProps = Override<
  React.ComponentProps<typeof StyledButton>,
  Stitches.VariantProps<typeof StyledButton> & {
    as?: string | React.ReactNode
    children: React.ReactNode
    label: string
  } & NavigatorActions
>

export const ActionIcon = React.forwardRef<HTMLButtonElement, ActionIconProps>(
  (
    {
      children,
      theme = 'primary',
      appearance = 'simple',
      size = 'md',
      label,
      href,
      disabled,
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
      <StyledButton
        {...remainingProps}
        {...optionalLinkProps}
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
            size:
              child.props.size && appearance === 'simple'
                ? child.props.size
                : size,
            isInActionIcon: appearance !== 'simple',
            css: { ...(child.props.css ? child.props.css : {}) }
          })
        })}
      </StyledButton>
    )
  }
)

ActionIcon.displayName = 'ActionIcon'
