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
  '& > *:last-child': {
    mb: 0
  },
  variants: {
    size: {
      xs: {
        p: '$2'
      },
      sm: {
        p: '$3'
      },
      md: {
        p: '$4'
      },
      lg: {
        p: '$5'
      },
      xl: {
        p: '$6'
      }
    }
  }
})

type EmptyStateProps = React.ComponentProps<typeof EmptyStateContainer>

const EmptyStateComponent = ({
  size = 'sm',
  children,
  ...props
}: EmptyStateProps) => (
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

export const EmptyState = Object.assign(EmptyStateComponent, {
  Image: EmptyStateImage,
  Title: EmptyStateTitle,
  Body: EmptyStateBody
})

EmptyStateComponent.displayName = 'EmptyState'
