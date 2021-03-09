import * as React from 'react'

import { styled } from '~/stitches'

const StyledLI = styled('li', {})

const StyledUL = styled('ul', {
  fontFamily: '$sans',
  [`& ${StyledLI}`]: {
    paddingLeft: '$1',
    '::marker': {
      content: '"•"',
      fontWeight: 'bold'
    }
  },
  variants: {
    theme: {
      primary: {
        [`& ${StyledLI}`]: {
          '::marker': { color: '$primary500' }
        }
      },
      secondary: {
        [`& ${StyledLI}`]: {
          '::marker': { color: '$secondary500' }
        }
      }
    },
    size: {
      sm: { fontSize: '$sm', pl: '$2' },
      md: { fontSize: '$md', pl: '$2' },
      lg: { fontSize: '$lg', pl: '$3' }
    }
  }
})

type ListProps = React.ComponentProps<typeof StyledUL> & {
  theme?: 'primary' | 'secondary'
}

export const List: React.FC<ListProps> & { Item: typeof StyledLI } = ({
  theme = 'primary',
  ...remainingProps
}) => <StyledUL theme={theme} {...remainingProps} />

List.Item = StyledLI
