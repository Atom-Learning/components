import * as React from 'react'

import { Flex } from '~/components/flex'
import { Image } from '~/components/image'
import { styled } from '~/stitches'

import { EmptyStateBody } from './EmptyStateBody'
import { EmptyStateImage } from './EmptyStateImage'
import { EmptyStateTitle } from './EmptyStateTitle'

const EmptyStateContainer = styled(Flex, {
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  variants: {
    size: {
      xs: {
        p: '$2',
        [`& ${Image}`]: {
          width: '56px',
          height: '32px',
          mb: '$4'
        },
        [`& ${EmptyStateTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '$3'
        },
        [`& ${EmptyStateBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '$4'
        }
      },
      sm: {
        p: '$3',
        [`& ${Image}`]: {
          size: '84px',
          mb: '$4'
        },
        [`& ${EmptyStateTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '$3'
        },
        [`& ${EmptyStateBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '$4'
        }
      },
      md: {
        p: '$4',
        [`& ${Image}`]: {
          width: '126px',
          height: '72px',
          mb: '$4'
        },
        [`& ${EmptyStateTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '$3'
        },
        [`& ${EmptyStateBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '$4'
        }
      },
      lg: {
        p: '$5',
        [`& ${Image}`]: {
          width: '190px',
          height: '142px',
          mb: '$5'
        },
        [`& ${EmptyStateTitle}`]: {
          fontSize: '$lg',
          fontWeight: '600',
          mb: '$4'
        },
        [`& ${EmptyStateBody}`]: {
          fontSize: '$md',
          fontWeight: '400',
          mb: '$5'
        }
      },
      xl: {
        p: '$6',
        [`& ${Image}`]: {
          width: '285px',
          height: '213px',
          mb: '$5'
        },
        [`& ${EmptyStateTitle}`]: {
          fontSize: '$lg',
          fontWeight: '600',
          mb: '$4'
        },
        [`& ${EmptyStateBody}`]: {
          fontSize: '$md',
          fontWeight: '400',
          mb: '$5'
        }
      }
    }
  }
})

type EmptyStateProps = React.ComponentProps<typeof EmptyStateContainer>

export const EmptyState: React.FC<EmptyStateProps> & {
  Image: typeof EmptyStateImage
  Title: typeof EmptyStateTitle
  Body: typeof EmptyStateBody
} = ({ size = 'sm', ...props }) => (
  <EmptyStateContainer size={size} {...props} />
)

EmptyState.displayName = 'EmptyState'
EmptyState.Image = EmptyStateImage
EmptyState.Title = EmptyStateTitle
EmptyState.Body = EmptyStateBody
