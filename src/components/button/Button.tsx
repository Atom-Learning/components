import type * as Stitches from '@stitches/react'
import { darken, opacify } from 'color2k'
import * as React from 'react'

import { Box } from '~/components/box'
import { Icon } from '~/components/icon'
import { Loader } from '~/components/loader'
import { styled, theme } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

const getButtonOutlineVariant = (
  base: string,
  interact: string,
  active: string
) => ({
  border: '1px solid',
  borderColor: 'currentColor',
  color: base,
  '&[disabled]': {
    borderColor: '$tonal400',
    color: '$tonal400',
    cursor: 'not-allowed'
  },
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    textDecoration: 'none',
    color: interact
  },
  '&:not([disabled]):active': {
    color: active
  }
})

const getButtonSolidVariant = (
  base: string,
  interact: string,
  active: string,
  text = 'white'
) => ({
  bg: base,
  color: text,
  '&[disabled]': {
    bg: '$tonal100',
    color: '$tonal400',
    cursor: 'not-allowed'
  },
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    bg: interact,
    color: text
  },
  '&:not([disabled]):active': {
    bg: active
  }
})

export const StyledButton = styled('button', {
  alignItems: 'center',
  bg: 'unset',
  border: 'unset',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$body',
  fontWeight: 600,
  justifyContent: 'center',
  p: 'unset',
  textDecoration: 'none',
  transition: 'all 100ms ease-out',
  whiteSpace: 'nowrap',
  width: 'max-content',
  variants: {
    theme: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
      neutral: {}
    },
    appearance: {
      solid: {},
      outline: {}
    },
    size: {
      sm: {
        fontSize: '$sm',
        lineHeight: 1.53,
        height: '$3',
        px: '$4'
      },
      md: {
        fontSize: '$md',
        lineHeight: 1.5,
        height: '$4',
        px: '$5'
      },
      lg: {
        fontSize: '$lg',
        lineHeight: 1.5,
        height: '$5',
        px: '$5'
      }
    },
    isLoading: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,
        pointerEvents: 'none'
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    isRounded: {
      true: {
        borderRadius: '$round'
      }
    }
  },

  compoundVariants: [
    {
      theme: 'primary',
      appearance: 'solid',
      css: getButtonSolidVariant('$primary', '$primaryMid', '$primaryDark')
    },
    {
      theme: 'secondary',
      appearance: 'solid',
      css: getButtonSolidVariant(
        '$primaryDark',
        darken(theme.colors.primaryDark.value, 0.1),
        darken(theme.colors.primaryDark.value, 0.15)
      )
    },
    {
      theme: 'success',
      appearance: 'solid',
      css: getButtonSolidVariant('$success', '$successMid', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'solid',
      css: getButtonSolidVariant(
        '$warning',
        '$warningMid',
        '$warningDark',
        '$tonal500'
      )
    },
    {
      theme: 'danger',
      appearance: 'solid',
      css: getButtonSolidVariant('$danger', '$dangerMid', '$dangerDark')
    },
    {
      theme: 'neutral',
      appearance: 'solid',
      css: getButtonSolidVariant(
        'white',
        opacify('white', -0.1),
        opacify('white', -0.25),
        '$primary'
      )
    },
    {
      theme: 'primary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$primary', '$primaryMid', '$primaryDark')
    },
    {
      theme: 'neutral',
      appearance: 'outline',
      css: getButtonOutlineVariant(
        'white',
        opacify('white', -0.2),
        opacify('white', -0.35)
      )
    },
    {
      theme: 'secondary',
      appearance: 'outline',
      css: getButtonOutlineVariant(
        '$primaryDark',
        darken(theme.colors.primaryDark.value, 0.1),
        darken(theme.colors.primaryDark.value, 0.15)
      )
    }
  ]
})

const WithLoader = ({ isLoading, children }) => (
  <>
    <Loader
      css={{
        opacity: isLoading ? 1 : 0,
        position: 'absolute',
        transition: 'opacity 150ms'
      }}
    />
    <Box
      as="span"
      css={isLoading ? { opacity: 0, transition: 'opacity 150ms' } : {}}
    >
      {children}
    </Box>
  </>
)

const getIconSize = (size) => {
  switch (size) {
    case 'lg':
      return 22
    case 'md':
      return 20
    case 'sm':
    default:
      return 16
  }
}

const getChildren = (children, size) =>
  React.Children.map(children, (child, i) => {
    if (child?.type === Icon) {
      return React.cloneElement(child, {
        css: {
          [i === 0 ? 'mr' : 'ml']: size === 'sm' ? '$2' : '$3',
          size: getIconSize(size),
          ...(child.props.css ? child.props.css : {})
        }
      })
    }
    return child
  })

type ButtonProps = Override<
  React.ComponentProps<typeof StyledButton>,
  Stitches.VariantProps<typeof StyledButton> & {
    as?: React.ComponentType | React.ElementType
    children: React.ReactNode
    isLoading?: boolean
    htmlFor?: string // styled() omits this prop, however it is needed if need to pair the button with another component (ie: file input)
  } & NavigatorActions
>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLoading,
      onClick,
      href,
      appearance = 'solid',
      size = 'md',
      theme = 'primary',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const linkSpecificProps = href
      ? {
          as: 'a',
          href,
          onClick: undefined
        }
      : {}

    const buttonSpecificProps = href ? {} : { type }

    // Note: button is not disabled when loading for accessibility purposes.
    // Instead the click action is not fired and the button looks faded
    return (
      <StyledButton
        isLoading={isLoading || false}
        onClick={!isLoading ? onClick : undefined}
        appearance={appearance}
        size={size}
        theme={theme}
        {...rest}
        {...linkSpecificProps}
        {...buttonSpecificProps}
        ref={ref}
      >
        {typeof isLoading === 'boolean' ? (
          <WithLoader isLoading={isLoading}>
            {getChildren(children, size)}
          </WithLoader>
        ) : (
          getChildren(children, size)
        )}
      </StyledButton>
    )
  }
) as React.FC<ButtonProps>

Button.displayName = 'Button'
