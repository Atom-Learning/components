import * as React from 'react'

import { styled } from '~/stitches'
import { capsize, Override } from '~/utilities'

export const StyledHeading = styled('h2', {
  color: '$tonal800',
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
        fontSize: '$lg',
        lineHeight: 1.14,
        ...capsize(0.2174, 0.2254)
      },
      md: {
        fontSize: '$xl',
        lineHeight: 1.14,
        ...capsize(0.2174, 0.2254)
      },
      lg: {
        fontSize: '$2xl',
        lineHeight: 1.08,
        ...capsize(0.1865, 0.1945)
      },
      xl: {
        fontSize: '$3xl',
        lineHeight: 1.12,
        ...capsize(0.206, 0.214)
      },
      xxl: {
        fontSize: '$4xl',
        lineHeight: 1.06,
        ...capsize(0.1793, 0.1873)
      }
    }
  }
})

export type HeadingProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledHeading>,
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
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  }
>

export const Heading: React.FC<HeadingProps> = ({
  size = 'md',
  ...remainingProps
}) => <StyledHeading size={size} {...remainingProps} />

Heading.displayName = 'Heading'
