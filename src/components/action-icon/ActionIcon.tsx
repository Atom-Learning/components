import invariant from 'invariant'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon/Icon'

const getSimpleVariant = (color: string) => ({
  bg: 'transparent',
  color: '$tonal700',
  '&:hover, &:focus': { color }
})
const getSolidVariant = (color: string) => ({
  bg: '$tonal200',
  color: '$tonal700',
  '&:hover, &:focus': {
    bg: color,
    color: 'white'
  }
})
const getOutlineVariant = (color: string) => ({
  border: '1px solid $tonal500',
  bg: 'transparent',
  color: '$tonal700',
  '&:hover, &:focus': {
    borderColor: color,
    color
  }
})

const StyledButton = styled('button', {
  appearance: 'none',
  border: 'unset',
  borderRadius: '$0',
  cursor: 'pointer',
  p: 'unset',
  transition: 'all 125ms ease-out',
  variants: {
    theme: {
      primary: {},
      success: {},
      warning: {},
      danger: {}
    },
    appearance: {
      subtle: {
        bg: 'transparent',
        color: '$tonal800',
        '&:hover, &:focus': {
          bg: '$alpha150'
        }
      },
      simple: {},
      outline: {},
      solid: {}
    },
    size: {
      md: { size: '$3' },
      lg: { size: '$4' }
    }
  },
  compoundVariants: [
    // Appearance Simple
    {
      theme: 'primary',
      appearance: 'simple',
      css: getSimpleVariant('$primary')
    },
    {
      theme: 'success',
      appearance: 'simple',
      css: getSimpleVariant('$success')
    },
    {
      theme: 'warning',
      appearance: 'simple',
      css: getSimpleVariant('$warning')
    },
    {
      theme: 'danger',
      appearance: 'simple',
      css: getSimpleVariant('$danger')
    },

    // Appearance Solid
    {
      theme: 'primary',
      appearance: 'solid',
      css: getSolidVariant('$primary')
    },
    {
      theme: 'success',
      appearance: 'solid',
      css: getSolidVariant('$success')
    },
    {
      theme: 'warning',
      appearance: 'solid',
      css: getSolidVariant('$warning')
    },
    {
      theme: 'danger',
      appearance: 'solid',
      css: getSolidVariant('$danger')
    },

    // Appearance Outline
    {
      theme: 'primary',
      appearance: 'outline',
      css: getOutlineVariant('$primary')
    },
    {
      theme: 'success',
      appearance: 'outline',
      css: getOutlineVariant('$success')
    },
    {
      theme: 'warning',
      appearance: 'outline',
      css: getOutlineVariant('$warning')
    },
    {
      theme: 'danger',
      appearance: 'outline',
      css: getOutlineVariant('$danger')
    }
  ]
})

type ActionIconProps = React.ComponentProps<typeof StyledButton> & {
  label: string
}

export const ActionIcon: React.FC<ActionIconProps> = React.forwardRef(
  (
    {
      children,
      theme = 'primary',
      appearance = 'subtle',
      size = 'md',
      label,
      ...remainingProps
    },
    ref
  ) => {
    const INVALID_CHILDREN_MESSAGE = `A single ${Icon.displayName} component is permitted as a child of ${ActionIcon.displayName}`

    invariant(React.Children.count(children) === 1, INVALID_CHILDREN_MESSAGE)

    return (
      <StyledButton
        type="button"
        {...remainingProps}
        aria-label={label}
        theme={theme}
        appearance={appearance}
        size={size}
        ref={ref}
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
