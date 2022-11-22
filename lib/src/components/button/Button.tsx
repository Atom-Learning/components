import type * as Stitches from '@stitches/react'
import { darken, opacify } from 'color2k'
import * as React from 'react'

import { Box } from '~/components/box'
import { Icon } from '~/components/icon'
import { Loader } from '~/components/loader'
import { styled, theme } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

export const StyledButton = styled('button', {
  all: 'unset',
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
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  variants: {
    appearance: {
      solid: {
        bg: '$interactive1',
        color: '$interactiveForeground',
        '&:not([disabled])':
        {
          '&:hover, &:focus': {
            bg: '$interactive2',
          },
          '&:active': {
            bg: '$interactive3'
          }
        }
      },
      outline: {
        border: '1px solid',
        color: '$interactive1',
        '&:not([disabled])':
        {
          '&:hover, &:focus': {
            color: '$interactive2',
          },
          '&:active': {
            color: '$interactive3'
          }
        }
      },
      simple: {
        color: '$interactive1',
        '&:not([disabled])':
        {
          '&:hover, &:focus': {
            color: '$interactive2',
          },
          '&:active': {
            color: '$interactive3'
          }
        }
      }
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
      false: {
        width: 'max-content'
      },
      true: {
        width: '100%'
      }
    },
    isRounded: {
      true: {
        borderRadius: '$round'
      }
    }
  }
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
