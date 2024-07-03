import * as React from 'react'

import { styled } from '~/stitches'

import { EmptyStateContext } from './EmptyState.context'

const StyledEmptyStateTitle = styled('h2', {
  color: '$tonal400',
  fontFamily: '$body',
  fontWeight: '600',
  m: 0,
  variants: {
    size: {
      xs: {
        fontSize: '$md',
        mb: '$3'
      },
      sm: {
        fontSize: '$md',
        mb: '$3'
      },
      md: {
        fontSize: '$md',
        mb: '$3'
      },
      lg: {
        fontSize: '$lg',
        mb: '$4'
      },
      xl: {
        fontSize: '$lg',
        mb: '$4'
      }
    }
  }
})

type EmptyStateTitleProps = React.ComponentProps<
  typeof StyledEmptyStateTitle
> & {
  as?: React.ComponentType | React.ElementType
}

export const EmptyStateTitle = (props: EmptyStateTitleProps) => {
  const { size } = React.useContext(EmptyStateContext)
  return <StyledEmptyStateTitle size={size} {...props} />
}
