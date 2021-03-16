import * as React from 'react'

import { styled } from '~/stitches'
import { capsize, Override } from '~/utilities'

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
        lineHeight: 1.53
      },
      md: {
        fontSize: '$md',
        lineHeight: 1.75,
        ...capsize('-0.5114em')
      },
      lg: {
        fontSize: '$lg',
        lineHeight: 1.6,
        ...capsize('-0.4864em')
      }
    }
  }
})

type TextProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledParagraph>,
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
}) => <StyledParagraph as={as} size={size} {...rest} />

Text.displayName = 'Text'
