import * as React from 'react'

import { styled } from '~/stitches'

import { textVariantSize } from '../text'

const StyledLi = styled('li', {})

const StyledUl = styled('ul', {
  all: 'unset',
  fontFamily: '$sans',
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
        [`& ${StyledLi}`]: {
          '&::marker': { color: '$tonal900' }
        }
      },
      primary: {
        [`& ${StyledLi}`]: {
          '&::marker': { color: '$primary500' }
        }
      },
      secondary: {
        [`& ${StyledLi}`]: {
          '&::marker': { color: '$secondary500' }
        }
      }
    },
    size: textVariantSize({ applyCapsize: false })
  }
})

type ListProps = React.ComponentProps<typeof StyledUl> & {
  theme?: 'tonal' | 'primary' | 'secondary'
}

export const List: React.FC<ListProps> & { Item: typeof StyledLi } = ({
  theme = 'tonal',
  size = 'md',
  ...remainingProps
}) => <StyledUl theme={theme} size={size} {...remainingProps} />

List.Item = StyledLi
