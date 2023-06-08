import * as React from 'react'

import { Heading } from '~/components/heading'
import { Image } from '~/components/image'
import { Stack } from '~/components/stack'
import { Text } from '~/components/text'
import { styled } from '~/stitches'

export const EmptyStateTitle = styled(Heading, {
  color: '$tonal400',
  fontFamily: '$body',
  fontWeight: '600',
  variants: {
    size: {
      xs: { fontSize: '$md' },
      sm: { fontSize: '$md' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$lg' }
    }
  }
})

export const EmptyStateImage = styled(Image, {
  variants: {
    size: {
      xs: { maxWidth: '56px', maxHeight: '32px' },
      sm: { maxWidth: '84px', maxHeight: '48px' },
      md: { maxWidth: '126px', maxHeight: '72px' },
      lg: { maxWidth: '190px', maxHeight: '142px' },
      xl: { maxWidth: '285px', maxHeight: '213px' }
    }
  }
})

export const EmptyStateBody = styled(Text, {
  color: '$tonal400',
  fontWeight: '400',
  variants: {
    size: {
      xs: { fontSize: '$sm' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$sm' },
      lg: { fontSize: '$md' },
      xl: { fontSize: '$md' }
    }
  }
})

const EmptyStateContainer = styled(Stack, {
  textAlign: 'center',
  variants: {
    size: {
      xs: { p: '$2' },
      sm: { p: '$3' },
      md: { p: '$4' },
      lg: { p: '$5' },
      xl: { p: '$6' }
    }
  }
})

export const EmptyState = ({
  size = 'sm',
  children,
  ...props
}: React.PropsWithChildren<
  React.ComponentPropsWithoutRef<typeof EmptyStateContainer>
>) => (
  <EmptyStateContainer {...props} direction="column" gap="3" size={size}>
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

EmptyState.Image = EmptyStateImage
EmptyState.Title = EmptyStateTitle
EmptyState.Body = EmptyStateBody

EmptyState.displayName = 'EmptyState'
