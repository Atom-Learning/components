import { StitchesVariants } from '@stitches/react'
import * as React from 'react'

import { Box } from '~/components/box'
import { Icon } from '~/components/icon'
import { Loader } from '~/components/loader'
import { styled } from '~/stitches'
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
  bg: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    textDecoration: 'none',
    color: interact,
    bg: 'white'
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
  letterSpacing: '0.02em',
  p: 'unset',
  textDecoration: 'none',
  transition: 'all 100ms ease-out',
  whiteSpace: 'nowrap',
  width: 'max-content',
  '&[disabled]': {
    bg: '$tonal50',
    borderColor: '$tonal50',
    color: '$tonal300',
    cursor: 'not-allowed'
  },
  variants: {
    theme: {
      primary: {},
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
        lineHeight: 1.53,
        height: '$3',
        px: '$4'
      },
      md: {
        fontSize: '$md',
        lineHeight: 1.5,
        height: '$4',
        px: '$5'
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
    {
      theme: 'primary',
      appearance: 'solid',
      css: getButtonSolidVariant('$primary', '$primaryMid', '$primaryDark')
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
      theme: 'primary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$primary', '$primaryMid', '$primaryDark')
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

const getChildren = (children, size) =>
  React.Children.map(children, (child, i) => {
    if (child?.type === Icon) {
      return React.cloneElement(child, {
        css: {
          [i === 0 ? 'mr' : 'ml']: size === 'sm' ? '$2' : '$3',
          size: size === 'md' ? 20 : 16,
          ...(child.props.css ? child.props.css : {})
        }
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
