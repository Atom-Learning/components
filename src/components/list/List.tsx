import * as React from 'react'

import { styled } from '~/stitches'

import { textVariantSize } from '../text'

const StyledLi = styled('li', {})

const StyledUl = styled('ul', {
  fontFamily: '$sans',
  m: 'unset',
  p: 'unset',
  pl: '$3',
  [`& ${StyledLi}`]: {
    pl: '$2',
    '&::marker': {
      content: '"•"',
      fontWeight: 'bold'
    },
    '&:not(:last-child)': {
      mb: '$2'
    },
    '&:last-child': {
      mb: 0
    }
  },
  variants: {
    theme: {
      tonal: {
        color: '$tonal900'
      },
      primary: {
        color: '$primary500'
      },
      secondary: {
        color: '$secondary500'
      }
    },
    size: textVariantSize({ applyCapsize: false })
  }
})

type ListProps = React.ComponentProps<typeof StyledUl> & {
  theme?: 'tonal' | 'primary' | 'secondary'
}

export const List: React.FC<ListProps> & { Item: typeof StyledLi } = ({
  theme,
  size = 'md',
  ...remainingProps
}) => <StyledUl theme={theme} size={size} {...remainingProps} />

List.Item = StyledLi
