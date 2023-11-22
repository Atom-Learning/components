import * as React from 'react'

import { Flex } from '~/components/flex'
import { styled } from '~/stitches'

import { EmptyStateBody } from './EmptyStateBody'
import { EmptyStateImage } from './EmptyStateImage'
import { EmptyStateTitle } from './EmptyStateTitle'

const EmptyStateContainer = styled(Flex, {
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '$4',
  variants: {
    size: {
      xs: { p: '$2' },
      sm: { p: '$3' },
      md: { p: '$4' },
      lg: { gap: '$24', p: '$5' },
      xl: { gap: '$24', p: '$6' }
    }
  }
})

type EmptyStateProps = React.ComponentProps<typeof EmptyStateContainer>

export const EmptyState: React.FC<EmptyStateProps> & {
  Image: typeof EmptyStateImage
  Title: typeof EmptyStateTitle
  Body: typeof EmptyStateBody
} = ({ size = 'sm', children, ...props }) => (
  <EmptyStateContainer size={size} {...props}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child

      if (
        child.type === EmptyStateImage ||
        child.type === EmptyStateTitle ||
        child.type === EmptyStateBody
      ) {
        return React.cloneElement(child, { ...child.props, size })
      }

      return child
    })}
  </EmptyStateContainer>
)

EmptyState.displayName = 'EmptyState'
EmptyState.Image = EmptyStateImage
EmptyState.Title = EmptyStateTitle
EmptyState.Body = EmptyStateBody
