import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledHeading = styled('h1', {
  color: '$tonal-900',
  fontFamily: '$sans',
  fontWeight: '700',
  variants: {
    size: {
      sm: { fontSize: '16px', letterSpacing: '0.01em', lineHeight: '1.4' },
      md: { fontSize: '28px', letterSpacing: '0.02em', lineHeight: '1.4' },
      lg: { fontSize: '37px', letterSpacing: '0.02em', lineHeight: '1.4' }
    }
  }
})

type HeadingProps = Override<
  StitchesProps<typeof StyledHeading>,
  {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size: 'sm' | 'md' | 'lg'
  }
>

export const Heading: React.FC<HeadingProps> = (props) => {
  return <StyledHeading {...props} />
}

Heading.defaultProps = {
  as: 'h1',
  size: 'lg'
}
