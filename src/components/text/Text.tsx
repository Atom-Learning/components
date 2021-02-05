import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'
import { Override } from '~/utilities/types'

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
    as?:
      | 'blockquote'
      | 'caption'
      | 'dd'
      | 'dt'
      | 'figcaption'
      | 'li'
      | 'p'
      | 'span'
    size?: 'sm' | 'md' | 'lg'
  }
>

export const Text: React.FC<TextProps> = ({
  as = 'p',
  size = 'md',
  ...rest
}): React.ReactElement => <StyledParagraph as={as} size={size} {...rest} />

Text.displayName = 'Text'
