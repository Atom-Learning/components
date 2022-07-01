import * as React from 'react'

import { styled } from '~/stitches'

import { textVariantSize } from '../text'

export const StyledLi = styled('li', {})

const StyledList = styled('ul', {
  fontFamily: '$body',
  m: 'unset',
  p: 'unset',
  [`& > ${StyledLi}`]: {
    '&:not(:last-child)': { mb: '$2' },
    '&:last-child': { mb: 0 }
  },
  variants: {
    size: textVariantSize({ applyCapsize: false }),
    as: {
      ol: {
        pl: '$4',
        listStyle: 'decimal',
        [`& > ${StyledLi}`]: {
          pl: '$1',
          '&::marker': { fontSize: '$sm', fontWeight: 'bold' }
        }
      },
      ul: {
        pl: '$3',
        [`& > ${StyledLi}`]: {
          pl: '$2',
          '&::marker': { content: '•', fontWeight: 'bold' }
        }
      }
    }
  }
})

type ListProps = React.ComponentProps<typeof StyledList> & {
  ordered?: boolean
}

export const List: React.FC<ListProps> & { Item: typeof StyledLi } = ({
  size = 'md',
  ordered,
  ...remainingProps
}) => <StyledList as={ordered ? 'ol' : 'ul'} size={size} {...remainingProps} />

List.Item = StyledLi
