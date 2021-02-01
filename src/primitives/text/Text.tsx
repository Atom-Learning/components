import * as React from 'react'

import { CSSBlob, StitchesProps, styled } from '../../stitches'

const BaseText = styled('p', {
  fontFamily: '$sans',
  color: '$tonal900',
  fontWeight: 400,
  maxWidth: '100ch',
  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        letterSpacing: '0.04em',
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

type TextProps = {
  css?: CSSBlob
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
} & StitchesProps<typeof BaseText>

export const Text = (props: TextProps): React.ReactElement => {
  return <BaseText {...props} />
}

Text.defaultProps = {
  size: 'md'
}
