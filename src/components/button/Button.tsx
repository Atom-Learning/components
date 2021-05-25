import { StitchesVariants } from '@stitches/react'
import * as React from 'react'

import { Box } from '~/components/box'
import { Loader } from '~/components/loader'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

const getButtonOutlineVariant = (baseColor: string, interactColor: string) => ({
  boxShadow: 'inset 0 0 0 2px',
  color: baseColor,
  bg: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    textDecoration: 'none',
    color: interactColor,
    bg: 'white'
  },
  '&:active': {
    color: baseColor
  },
  '&[disabled]': {
    bg: 'white',
    color: interactColor
  }
})

const getButtonSolidVariant = (baseColor: string, interactColor: string) => ({
  bg: baseColor,
  color: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    bg: interactColor
  },
  '&:active': {
    bg: baseColor
  },
  '&[disabled]': {
    bg: '$tonal300',
    color: '$tonal600'
  }
})

const StyledButton = styled('button', {
  alignItems: 'center',
  bg: 'unset',
  border: 'unset',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$sans',
  fontWeight: 500,
  justifyContent: 'center',
  letterSpacing: '0.02em',
  lineHeight: 1.4,
  p: 'unset',
  textDecoration: 'none',
  transition: 'all 125ms ease-out',
  whiteSpace: 'nowrap',
  width: 'max-content',
  '&[disabled]': {
    opacity: 0.35,
    cursor: 'not-allowed'
  },
  variants: {
    theme: {
      primary: {},
      secondary: {},
      tertiary: {},
      success: {},
      warning: {},
      danger: {}
    },
    appearance: {
      solid: {},
      outline: {}
    },
    size: {
      sm: {
        fontSize: '$sm',
        height: '$3',
        px: '$3'
      },
      md: {
        fontSize: '$md',
        height: '$4',
        px: '$4'
      },
      lg: {
        fontSize: '$lg',
        height: 'calc($4 + $1)',
        px: '$4'
      }
    },
    isLoading: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
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
    // Appearance Solid
    {
      theme: 'primary',
      appearance: 'solid',
      css: getButtonSolidVariant('$primary500', '$primary900')
    },
    {
      theme: 'secondary',
      appearance: 'solid',
      css: getButtonSolidVariant('$secondary500', '$secondary700')
    },
    {
      theme: 'tertiary',
      appearance: 'solid',
      css: getButtonSolidVariant('$tertiary500', '$tertiary700')
    },
    {
      theme: 'success',
      appearance: 'solid',
      css: getButtonSolidVariant('$success', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'solid',
      css: getButtonSolidVariant('$warning', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'solid',
      css: getButtonSolidVariant('$danger', '$dangerDark')
    },

    // Appearance Outline
    {
      theme: 'primary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$primary500', '$primary900')
    },
    {
      theme: 'secondary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$secondary500', '$secondary900')
    },
    {
      theme: 'tertiary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$tertiary500', '$tertiary700')
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

const getChildren = (children) =>
  React.Children.map(children, (child: any, i) => {
    if (child?.type?.name === 'Icon') {
      return React.cloneElement(child, {
        css: { [i === 0 ? 'mr' : 'ml']: '$2' }
      })
    }
    return child
  })

type ButtonProps = Override<
  React.ComponentProps<typeof StyledButton>,
  StitchesVariants<typeof StyledButton> & {
    as?: React.ComponentType | React.ElementType
    children: React.ReactNode
    isLoading?: boolean
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
    const optionalLinkProps = href
      ? {
          as: 'a',
          href,
          onClick: undefined
        }
      : {}

    // Note: button is not disabled when loading for accessibility purposes.
    // Instead the click action is not fired and the button looks faded
    return (
      <StyledButton
        isLoading={isLoading || false}
        onClick={!isLoading ? onClick : undefined}
        appearance={appearance}
        size={size}
        theme={theme}
        type={type}
        {...rest}
        {...optionalLinkProps}
        ref={ref}
      >
        {typeof isLoading === 'boolean' ? (
          <WithLoader isLoading={isLoading}>{getChildren(children)}</WithLoader>
        ) : (
          getChildren(children)
        )}
      </StyledButton>
    )
  }
) as React.FC<ButtonProps>

Button.displayName = 'Button'
