import * as React from 'react'

import { styled } from '~/stitches'

import { textVariants } from '../text'

export const StyledLi = styled('li', {})

export const StyledList = styled('ul', {
  fontFamily: '$body',
  m: 'unset',
  p: 'unset',
  [`& > ${StyledLi}`]: {
    '&:not(:last-child)': { mb: '$2' },
    '&:last-child': { mb: 0 }
  },
  variants: {
    ...textVariants,
    as: {
      ol: {
        pl: '$4',
        listStyle: 'decimal',
        [`& > ${StyledLi}`]: {
          pl: '$1',
          '&::marker': { fontSize: '.875em', fontWeight: 'bold' }
        }
      },
      ul: {
        pl: '$3',
        [`& > ${StyledLi}`]: {
          pl: '$2',
          '&::marker': { content: '• ', fontWeight: 'bold' }
        }
      }
    },
    theme: {
      primary: {
        [`& > ${StyledLi}`]: {
          '&::marker': { color: '$primary' }
        }
      }
    }
  }
})

type ListProps = React.ComponentProps<typeof StyledList> & {
  ordered?: boolean
}

type ListType = React.ForwardRefExoticComponent<ListProps> & {
  Item: typeof StyledLi
}

export const List = React.forwardRef(
  ({ size = 'md', noCapsize = true, ordered, ...remainingProps }, ref) => (
    <StyledList
      ref={ref}
      as={ordered ? 'ol' : 'ul'}
      size={size}
      noCapsize={noCapsize}
      {...remainingProps}
    />
  )
) as ListType

List.Item = StyledLi
