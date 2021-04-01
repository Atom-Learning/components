import { StitchesVariants } from '@stitches/react'
import * as React from 'react'

import { Box } from '~/components/box'
import { Loader } from '~/components/loader'
import { styled } from '~/stitches'
import { Override } from '~/utilities'

const getButtonOutlineVariant = (baseColor: string, interactColor: string) => ({
  boxShadow: 'inset 0 0 0 2px',
  color: baseColor,
  backgroundColor: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    textDecoration: 'none',
    color: interactColor,
    backgroundColor: 'white'
  },
  '&:active': {
    color: baseColor
  },
  '&[disabled]': {
    backgroundColor: 'white',
    color: interactColor
  }
})

const getButtonSolidVariant = (baseColor: string, interactColor: string) => ({
  backgroundColor: baseColor,
  color: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    backgroundColor: interactColor
  },
  '&:active': {
    backgroundColor: baseColor
  },
  '&[disabled]': {
    backgroundColor: '$tonal300',
    color: '$tonal600'
  }
})

const StyledButton = styled('button', {
  background: 'unset',
  border: 'none',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$sans',
  fontSize: '$md',
  fontWeight: 500,
  height: '$4',
  letterSpacing: '0.02em',
  lineHeight: 1.4,
  transition: 'all 125ms ease-out',
  textDecoration: 'none',
  px: '$4',
  py: '$2',
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
    isLoading: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    size: {
      sm: {
        py: '$1',
        px: '$2',
        fontSize: '$sm',
        height: '$3'
      },
      md: {
        py: '$2',
        px: '$3',
        fontSize: '$md'
      },
      lg: {
        py: '$3',
        px: '$4',
        fontSize: '$lg',
        height: 'calc($4 + $1)'
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

type ButtonProps = Override<
  React.ComponentProps<typeof StyledButton>,
  StitchesVariants<typeof StyledButton> & {
    isLoading?: boolean
    onClick?: () => void
    as?: React.ComponentType | React.ElementType
    children: React.ReactNodeArray
  }
>

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      children,
      isLoading,
      onClick,
      appearance = 'solid',
      theme = 'primary',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const getChildren = () => {
      return React.Children.map(children, (child: any, i) => {
        if (children.length === undefined) {
          return child
        }
        if (child?.type?.name === 'Icon') {
          return React.cloneElement(child, {
            css: { [i === 0 ? 'mr' : 'ml']: '$3' }
          })
        }
        return child
      })
    }

    // Note: button is not disabled when loading for accessibility purposes.
    // Instead the clickAction is not fired and the button looks faded
    return (
      <StyledButton
        theme={theme}
        appearance={appearance}
        isLoading={isLoading || false}
        onClick={isLoading ? undefined : onClick}
        type={type}
        {...rest}
        ref={ref}
      >
        {typeof isLoading === 'boolean' ? (
          <>
            <Loader
              css={{
                opacity: isLoading ? 1 : 0,
                position: 'absolute',
                transition: 'opacity 150ms ease-out'
              }}
            />
            <Box
              as="span"
              css={
                isLoading
                  ? {
                      opacity: 0,
                      transition: 'opacity 150ms ease-out'
                    }
                  : {}
              }
            >
              {getChildren()}
            </Box>
          </>
        ) : (
          getChildren()
        )}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
