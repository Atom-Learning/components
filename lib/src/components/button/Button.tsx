import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from '@stitches/react'
import { darken, opacify } from 'color2k'
import * as React from 'react'

import { Box } from '~/components/box'
import { Icon, StyledIcon } from '~/components/icon'
import { Loader } from '~/components/loader'
import { styled, theme } from '~/stitches'
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
        px: '$4',
        gap: '$2',
        [`& ${StyledIcon}`]: { size: 16 }
      },
      md: {
        fontSize: '$md',
        lineHeight: 1.5,
        height: '$4',
        px: '$5',
        gap: '$3',
        [`& ${StyledIcon}`]: { size: 20 }
      },
      lg: {
        fontSize: '$lg',
        lineHeight: 1.5,
        height: '$5',
        px: '$5',
        [`& ${StyledIcon}`]: { size: 22 }
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
      false: {
        width: 'max-content'
      },
      true: {
        width: '100%'
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

type ButtonProps = Override<
  React.ComponentProps<typeof StyledButton>,
  VariantProps<typeof StyledButton> & {
    as?: never
    asChild?: boolean
    children: React.ReactNode
    isLoading?: boolean
  }
>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      as,
      asChild,
      isLoading,
      onClick,
      appearance = 'solid',
      size = 'md',
      theme = 'primary',
      ...rest
    },
    ref
  ) => {
    const props = {
      ...rest,
      appearance,
      size,
      theme,
      children,
      ref
    }

    if (asChild) {
      return (
        <StyledButton
          isLoading={isLoading || false}
          onClick={!isLoading ? onClick : undefined}
          {...props}
          as={Slot}
        />
      )
    }

    return (
      <StyledButton
        type="button"
        {...props}
        isLoading={isLoading || false}
        onClick={!isLoading ? onClick : undefined}
      >
        {typeof isLoading === 'boolean' ? (
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
        ) : (
          children
        )}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
