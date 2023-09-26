import type { VariantProps } from '@stitches/react'
import * as React from 'react'

import { StyledIcon } from '~/components/icon'
import { Loader } from '~/components/loader'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'
import { isExternalLink } from '~/utilities/uri'
import { colorSchemes as buttonColorSchemes } from './stitches.button.colorscheme.config'
import { focusVisibleStyleBlock } from '~/utilities'

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
  '&[disabled]': {
    pointerEvents: 'none',
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&:not([disabled])': {
    '&:focus-visible': focusVisibleStyleBlock()
  },
  variants: {
    appearance: {
      solid: {
        bg: '$backgroundSolid',
        color: '$textSolid',
        '&:not([disabled])': {
          '&:hover, &:focus-visible': {
            bg: '$backgroundSolidHover',
            color: '$textSolidHover',
          },
          '&:active': {
            bg: '$backgroundSolidActive',
            color: '$textSolidActive',
          }
        }
      },
      outline: {
        border: '1px solid',
        bg: '$backgroundOutline',
        color: '$textOutline',
        '&:not([disabled])': {
          '&:hover, &:focus-visible': {
            color: '$textOutlineHover',
            bg: '$backgroundOutlineHover',
          },
          '&:active': {
            bg: '$backgroundOutlineActive',
            color: '$textOutlineActive',
          }
        }
      }
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
      lg: { gap: '$3' }
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

export type TButtonProps = Override<
  React.ComponentProps<typeof StyledButton>,
  VariantProps<typeof StyledButton> & {
    as?: React.ComponentType | React.ElementType
    children: React.ReactNode
    href?: string
    isLoading?: boolean
  } & NavigatorActions
> & {
  theme?: keyof typeof buttonColorSchemes
  // overflow?: React.ComponentProps<typeof BadgeText>['overflow']
}

export const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(
  ({ theme = 'primary', appearance = 'solid', size = 'md', children, as, href, isLoading = false, onClick, ...rest }, ref) => {
    // const { size, overflow, isOverflowing } = React.useContext(BadgeContext)
    // const [badgeElRef, setBadgeElRef] = useCallbackRefState()
    // React.useImperativeHandle(ref, () => badgeElRef as HTMLDivElement)

    // const label = badgeElRef?.textContent

    const externalLinkProps = isExternalLink(href)
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <StyledButton
        as={as || (href ? 'a' : undefined)}
        appearance={appearance}
        size={size}
        className={buttonColorSchemes[theme]}
        href={href}
        isLoading={isLoading}
        onClick={!isLoading ? onClick : undefined}
        type={!href ? 'button' : undefined}
        {...externalLinkProps}
        {...rest}
        ref={ref}
      >
        {isLoading ? (
          <WithLoader size={size}>{children}</WithLoader>
        ) : (
          children
        )}
      </StyledButton>
    )
  }
) as React.FC<TButtonProps>

Button.displayName = 'Button'
