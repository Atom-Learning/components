import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'

type Override<T, U> = Omit<T, keyof U> & U

const StyledParagraph = styled('p', {
  color: '$tonal900',
  fontFamily: '$sans',
  fontWeight: 400,
  margin: 0,
  maxWidth: '60ch',
  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        letterSpacing: '0.01em',
        lineHeight: 1.6
      },
      md: {
        fontSize: '$md',
        letterSpacing: '0.02em',
        lineHeight: 1.4
      },
      lg: {
        fontSize: '$lg',
        letterSpacing: '0.02em',
        lineHeight: 1.4
      }
    }
  }
})

type TextProps = Override<
  StitchesProps<typeof StyledParagraph>,
  {
    as:
      | 'blockquote'
      | 'caption'
      | 'dd'
      | 'dt'
      | 'figcaption'
      | 'li'
      | 'p'
      | 'span'
    size: 'sm' | 'md' | 'lg'
  }
>

export const Text = (props: TextProps): React.ReactElement => (
  <StyledParagraph {...props} />
)

Text.defaultProps = {
  as: 'p',
  size: 'md'
} as Partial<TextProps>
