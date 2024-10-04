import * as React from 'react'

import { styled } from '~/stitches'
import type { Override } from '~/utilities'
import { capsize } from '~/utilities'

export const StyledHeading = styled('h2', {
  fontWeight: 700,
  m: 0,
  variants: {
    size: {
      xs: {
        fontFamily: '$body',
        fontSize: '$md',
        lineHeight: 1.5,
        ...capsize(0.3864)
      },
      sm: {
        fontFamily: '$body',
        fontSize: '$lg',
        lineHeight: 1.14,
        ...capsize(0.2078)
      },
      md: {
        fontFamily: '$body',
        fontSize: '$xl',
        lineHeight: 1.14,
        ...capsize(0.2078)
      },
      lg: {
        fontFamily: '$display',
        fontSize: '$2xl',
        lineHeight: 1.08,
        letterSpacing: '0.01em',
        ...capsize(0.1405, 0.2405)
      },
      xl: {
        fontFamily: '$display',
        fontSize: '$3xl',
        lineHeight: 1.12,
        ...capsize(0.16, 0.26)
      },
      xxl: {
        fontFamily: '$display',
        fontSize: '$4xl',
        lineHeight: 1,
        ...capsize(0.1, 0.2)
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
