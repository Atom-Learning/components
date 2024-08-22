import * as React from 'react'

import { styled } from '~/stitches'
import type { Override } from '~/utilities'
import { capsize } from '~/utilities'

export const StyledHeading = styled('h2', {
  fontFamily: '$display',
  fontWeight: 700,
  m: 0,
  variants: {
    size: {
      xs: {
        fontFamily: '$body',
        fontWeight: 600,
        fontSize: '$md',
        lineHeight: 1.5,
        ...capsize(0.3864)
      },
      sm: {
        fontFamily: '$body',
        fontSize: '$lg',
        lineHeight: 1.14,
        ...capsize(0.2078, 0.2078)
      },
      md: {
        fontSize: '$xl',
        lineHeight: 1.14,
        letterSpacing: '0.015em',
        ...capsize(0.15, 0.28)
      },
      lg: {
        fontSize: '$2xl',
        lineHeight: 1.08,
        letterSpacing: '0.01em',
        ...capsize(0.12, 0.27)
      },
      xl: {
        fontSize: '$3xl',
        lineHeight: 1.12,
        ...capsize(0.16, 0.28)
      },
      xxl: {
        fontSize: '$4xl',
        lineHeight: 1.06,
        ...capsize(0.13, 0.25)
      }
    },
    noCapsize: {
      true: {
        '&::before, &::after': { display: 'none !important' }
      }
    }
  }
})

export type HeadingProps = Override<
  React.ComponentProps<typeof StyledHeading>,
  {
    as?:
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | React.ComponentType
      | React.ElementType
  }
>

export const Heading: React.ForwardRefExoticComponent<HeadingProps> =
  React.forwardRef(({ size = 'md', ...remainingProps }, ref) => (
    <StyledHeading ref={ref} size={size} {...remainingProps} />
  ))

Heading.displayName = 'Heading'
