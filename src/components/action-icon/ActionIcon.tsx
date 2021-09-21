import { StitchesVariants } from '@stitches/react'
import invariant from 'invariant'
import * as React from 'react'

import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

import { Icon } from '../icon/Icon'

const getSimpleVariant = (base: string, interact: string) => ({
  bg: 'transparent',
  color: base,
  '&:hover, &:focus': {
    color: interact
  }
})
const getSolidVariant = (base: string, interact: string) => ({
  bg: base,
  color: 'white',
  '&:hover, &:focus': {
    bg: interact,
    color: 'white'
  }
})
const getOutlineVariant = (base: string, interact: string) => ({
  border: '1px solid',
  borderColor: 'currentColor',
  color: base,
  '&:hover, &:focus': {
    color: interact
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
  transition: 'all 125ms ease-out',
  '&[disabled], &[disabled]:hover, &[disabled]:focus': {
    bg: '$tonal100',
    color: '$tonal600',
    borderColor: '$tonal100',
    cursor: 'not-allowed'
  },
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
      md: { size: '$3' },
      lg: { size: '$4' }
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
      css: getSimpleVariant('$tonal600', '$primary')
    },
    {
      theme: 'primary',
      appearance: 'simple',
      css: getSimpleVariant('$primary', '$tertiary')
    },
    {
      theme: 'success',
      appearance: 'simple',
      css: getSimpleVariant('$success', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'simple',
      css: getSimpleVariant('$warning', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'simple',
      css: getSimpleVariant('$danger', '$dangerDark')
    },

    // Appearance Solid
    {
      theme: 'primary',
      appearance: 'solid',
      css: getSolidVariant('$primary', '$tertiary')
    },
    {
      theme: 'success',
      appearance: 'solid',
      css: getSolidVariant('$success', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'solid',
      css: getSolidVariant('$warning', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'solid',
      css: getSolidVariant('$danger', '$dangerDark')
    },

    // Appearance Outline
    {
      theme: 'primary',
      appearance: 'outline',
      css: getOutlineVariant('$primary', '$tertiary')
    },
    {
      theme: 'success',
      appearance: 'outline',
      css: getOutlineVariant('$success', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'outline',
      css: getOutlineVariant('$warning', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'outline',
      css: getOutlineVariant('$danger', '$dangerDark')
    }
  ]
})

type ActionIconProps = Override<
  React.ComponentProps<typeof StyledButton>,
  StitchesVariants<typeof StyledButton> & {
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

          return child
        })}
      </StyledButton>
    )
  }
)

ActionIcon.displayName = 'ActionIcon'
