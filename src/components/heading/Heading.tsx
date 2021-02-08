import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledHeading = styled('h1', {
  color: '$tonal-900',
  fontFamily: '$sans',
  fontWeight: '700',
  lineHeight: '1.4',
  variants: {
    size: {
      sm: { fontSize: '$lg', letterSpacing: '0.01em' },
      md: { fontSize: '$xl', letterSpacing: '0.02em' },
      lg: { fontSize: '$xxl', letterSpacing: '0.02em' }
    }
  }
})

type HeadingProps = Override<
  StitchesProps<typeof StyledHeading>,
  {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: 'sm' | 'md' | 'lg'
  }
>

export const Heading: React.FC<HeadingProps> = ({
  as = 'h2',
  size = 'md',
  ...props
}) => <StyledHeading as={as} size={size} {...props} />

Heading.displayName = 'Heading'
