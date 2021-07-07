import * as React from 'react'

import { styled } from '~/stitches'

import { textVariantSize } from '../text'

const listStyles = {
  fontFamily: '$sans',
  m: 'unset',
  p: 'unset',
  pl: '$3',
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
}

const itemStyles = {
  pl: '$2',
  '&::marker': {
    fontWeight: 'bold'
  },
  '&:not(:last-child)': {
    mb: '$2'
  },
  '&:last-child': {
    mb: 0
  }
}

export const StyledLi = styled('li', {})

const StyledOl = styled('ol', {
  ...listStyles,
  listStyle: 'decimal',
  [`& ${StyledLi}`]: itemStyles
})

const StyledUl = styled('ul', {
  ...listStyles,
  [`& ${StyledLi}`]: {
    ...itemStyles,
    '&::marker': { content: '•', fontWeight: 'bold' }
  }
})

type ListProps = React.ComponentProps<typeof StyledUl> &
  React.ComponentProps<typeof StyledOl> & {
    theme?: 'tonal' | 'primary' | 'secondary'
    ordered?: boolean
  }

export const List: React.FC<ListProps> & { Item: typeof StyledLi } = ({
  theme,
  size = 'md',
  ordered,
  ...remainingProps
}) => {
  const StyledList = ordered ? StyledOl : StyledUl

  return <StyledList theme={theme} size={size} {...remainingProps} />
}

List.Item = StyledLi
