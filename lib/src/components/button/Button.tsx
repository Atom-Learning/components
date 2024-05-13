import type { VariantProps } from '@stitches/react'
import { opacify } from 'color2k'
import * as React from 'react'

import { StyledIcon } from '~/components/icon'
import { Loader } from '~/components/loader'
import { useProvidedComponents } from '~/context'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { disabledStyle, Override } from '~/utilities'
import { getExternalAnchorProps } from '~/utilities/uri'

const getButtonOutlineVariant = (
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
    '&[disabled]': disabledStyle,
    '&:not([disabled]):hover, &:not([disabled]):focus': {
      textDecoration: 'none',
      color: interact
    },
    '&:not([disabled]):active': { color: active }
  }
})

const getButtonSolidVariant = (
  theme: string,
  base: string,
  interact: string,
  active: string,
  text = 'white'
) => ({
  theme,
  appearance: 'solid',
  css: {
    bg: base,
    color: text,
    '&[disabled]': disabledStyle,
    '&:not([disabled]):hover, &:not([disabled]):focus': {
      bg: interact,
      color: text
    },
    '&:not([disabled]):active': { bg: active }
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
  '&[disabled]': disabledStyle,
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
        gap: '$3',
        [`& ${StyledIcon}`]: { size: 22 }
      },
      xl: {
        fontSize: '$lg',
        lineHeight: 1.5,
        height: '$6',
        px: '$5',
        gap: '$3',
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
      true: { width: '100%' },
      false: { width: 'max-content' }
    }
  },

  // prettier-ignore
  compoundVariants: [
    getButtonSolidVariant('primary', '$primary800', '$primary900', '$primary1000'),
    getButtonSolidVariant('secondary', '$primary1000', '$primary1100', '$primary1200'),
    getButtonSolidVariant('success', '$success', '$successMid', '$successDark'),
    getButtonSolidVariant('warning', '$warning', '$warningMid', '$warningDark', '$tonal500'),
    getButtonSolidVariant('danger', '$danger', '$dangerMid', '$dangerDark'),
    getButtonSolidVariant('neutral', 'white', opacify('white', -0.1), opacify('white', -0.25), '$primary800'),
    getButtonOutlineVariant('primary', '$primary800', '$primary900', '$primary1000'),
    getButtonOutlineVariant('secondary', '$primary1000', '$primary1100', '$primary1200'),
    getButtonOutlineVariant('neutral', 'white', opacify('white', -0.2), opacify('white', -0.35))
  ],

  defaultVariants: {
    appearance: 'solid',
    size: 'md',
    theme: 'primary'
  }
})

const LoaderContentsWrapper = styled('span', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  visibility: 'hidden',
  variants: {
    size: {
      sm: { gap: '$2' },
      md: { gap: '$3' },
      lg: { gap: '$3' },
      xl: { gap: '$3' }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const WithLoader = ({
  size,
  children
}: React.ComponentProps<typeof LoaderContentsWrapper>) => (
  <>
    <Loader css={{ position: 'absolute' }} />
    <LoaderContentsWrapper size={size}>{children}</LoaderContentsWrapper>
  </>
)

type ButtonProps = Override<
  React.ComponentProps<typeof StyledButton>,
  VariantProps<typeof StyledButton> & {
    as?: React.ComponentType | React.ElementType
    children: React.ReactNode
    href?: string
    isLoading?: boolean
  } & NavigatorActions
>

export const Button: React.ForwardRefExoticComponent<ButtonProps> =
  React.forwardRef(
    ({ children, as, href, isLoading = false, onClick, ...rest }, ref) => {
      const { RouterLink } = useProvidedComponents({ href })
      const component = as || (href ? RouterLink : undefined)

      return (
        <StyledButton
          as={component}
          href={href}
          isLoading={isLoading}
          onClick={!isLoading ? onClick : undefined}
          type={!href ? 'button' : undefined}
          {...rest}
          {...getExternalAnchorProps(href)}
          ref={ref}
        >
          {isLoading ? (
            <WithLoader size={rest.size}>{children}</WithLoader>
          ) : (
            children
          )}
        </StyledButton>
      )
    }
  )

Button.displayName = 'Button'
