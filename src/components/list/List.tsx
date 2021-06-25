import * as React from 'react'

import { styled } from '~/stitches'

import { textVariantSize } from '../text'

export const StyledLi = styled('li', {})

const StyledUl = styled('ul', {
  fontFamily: '$body',
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
    size: textVariantSize({ applyCapsize: false })
  }
})

type ListProps = React.ComponentProps<typeof StyledUl>

export const List: React.FC<ListProps> & { Item: typeof StyledLi } = ({
  size = 'md',
  ...remainingProps
}) => <StyledUl size={size} {...remainingProps} />

List.Item = StyledLi
