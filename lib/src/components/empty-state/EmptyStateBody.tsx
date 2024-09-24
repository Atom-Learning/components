import * as React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'

import { EmptyStateContext } from './EmptyState.context'

const StyledEmptyStateBody = styled(Text, {
  color: '$grey800',
  fontWeight: 400,
  variants: {
    size: {
      xs: {
        fontSize: '$sm',
        mb: '$4'
      },
      sm: {
        fontSize: '$sm',
        mb: '$4'
      },
      md: {
        fontSize: '$sm',
        mb: '$4'
      },
      lg: {
        fontSize: '$md',
        mb: 'calc($4 + $2)'
      },
      xl: {
        fontSize: '$md',
        mb: 'calc($4 + $2)'
      }
    }
  }
})

type EmptyStateBodyProps = React.ComponentProps<typeof StyledEmptyStateBody> & {
  as?: React.ComponentType | React.ElementType
}

export const EmptyStateBody = (props: EmptyStateBodyProps) => {
  const { size } = React.useContext(EmptyStateContext)
  return <StyledEmptyStateBody size={size} {...props} />
}
