import * as React from 'react'

import { styled } from '~/stitches'
import { capsize, Override } from '~/utilities'

const StyledHeading = styled('h1', {
  color: '$tonal-900',
  fontFamily: '$sans',
  fontWeight: 700,
  margin: 0,
  variants: {
    size: {
      xs: {
        fontSize: '$md',
        lineHeight: 1.625,
        ...capsize('-0.4489em')
      },
      sm: {
        fontSize: '$lg',
        lineHeight: 1.52,
        ...capsize('-0.3983em')
      },
      md: {
        fontSize: '$xl',
        lineHeight: 1.42,
        ...capsize('-0.3506em')
      },
      lg: {
        fontSize: '$xxl',
        lineHeight: 1.35,
        ...capsize('-0.312em')
      }
    }
  }
})

type HeadingProps = Override<
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
    size?: 'xs' | 'sm' | 'md' | 'lg'
  }
>

export const Heading: React.FC<HeadingProps> = ({
  size = 'md',
  ...remainingProps
}) => <StyledHeading size={size} {...remainingProps} />

Heading.displayName = 'Heading'
