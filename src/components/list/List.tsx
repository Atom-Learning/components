import * as React from 'react'

import { styled } from '~/stitches'

import { textVariantSize } from '../text'

const StyledListItem = styled('li', {})

const StyledUL = styled('ul', {
  fontFamily: '$sans',
  pl: '$3',
  [`& ${StyledListItem}`]: {
    mb: '$2',
    pl: '$2',
    '&::marker': {
      content: '"•"',
      fontWeight: 'bold'
    }
  },
  variants: {
    theme: {
      tonal: {
        [`& ${StyledListItem}`]: {
          '&::marker': { color: '$tonal900' }
        }
      },
      primary: {
        [`& ${StyledListItem}`]: {
          '&::marker': { color: '$primary500' }
        }
      },
      secondary: {
        [`& ${StyledListItem}`]: {
          '&::marker': { color: '$secondary500' }
        }
      }
    },
    size: textVariantSize
  }
})

type ListProps = React.ComponentProps<typeof StyledUL> & {
  theme?: 'tonal' | 'primary' | 'secondary'
}

export const List: React.FC<ListProps> & { Item: typeof StyledListItem } = ({
  theme = 'tonal',
  size = 'md',
  ...remainingProps
}) => <StyledUL theme={theme} size={size} {...remainingProps} />

List.Item = StyledListItem
