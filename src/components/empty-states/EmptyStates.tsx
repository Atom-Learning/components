import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Image } from '~/components/image'
import { CSS, styled } from '~/stitches'

import { EmptyStatesBody } from './EmptyStatesBody'
import { EmptyStatesTitle } from './EmptyStatesTitle'

const StyledBox = styled(Flex, {
  flexDirection: 'column',
  alignItems: 'center',
  variants: {
    size: {
      xs: {
        [`& ${Image}`]: {
          width: '56px',
          height: '32px',
          mb: '$4'
        },
        [`& ${EmptyStatesTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '$3'
        },
        [`& ${EmptyStatesBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '$4'
        }
      },
      sm: {
        [`& ${Image}`]: {
          width: '84px',
          height: '48px',
          mb: '$4'
        },
        [`& ${EmptyStatesTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '$3'
        },
        [`& ${EmptyStatesBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '$4'
        }
      },
      md: {
        [`& ${Image}`]: {
          width: '126px',
          height: '72px',
          mb: '$4'
        },
        [`& ${EmptyStatesTitle}`]: {
          fontSize: '16px',
          fontWeight: '600',
          mb: '$3'
        },
        [`& ${EmptyStatesBody}`]: {
          fontSize: '14px',
          fontWeight: '400',
          mb: '$4'
        }
      },
      lg: {
        [`& ${Image}`]: {
          width: '190px',
          height: '142px',
          mb: '$5'
        },
        [`& ${EmptyStatesTitle}`]: {
          fontSize: '$lg',
          fontWeight: '600',
          mb: '$4'
        },
        [`& ${EmptyStatesBody}`]: {
          fontSize: '$md',
          fontWeight: '400',
          mb: '$5'
        }
      },
      xl: {
        [`& ${Image}`]: {
          width: '285px',
          height: '213px',
          mb: '$5'
        },
        [`& ${EmptyStatesTitle}`]: {
          fontSize: '$lg',
          fontWeight: '600',
          mb: '$4'
        },
        [`& ${EmptyStatesBody}`]: {
          fontSize: '$md',
          fontWeight: '400',
          mb: '$5'
        }
      }
    }
  }
})

type IllustrationContainerProps = React.ComponentProps<typeof Image>

const IllustrationContainer: React.FC<IllustrationContainerProps> = (props) => {
  return (
    <Box>
      <Image {...props} />
    </Box>
  )
}

type EmptyStatesProps = React.ComponentProps<typeof StyledBox>

export const EmptyStates: React.FC<EmptyStatesProps> & {
  Image: typeof IllustrationContainer
  Title: typeof EmptyStatesTitle
  Body: typeof EmptyStatesBody
} = ({ size = 'xs', ...props }) => <StyledBox size={size} {...props} />

EmptyStates.displayName = 'EmptyStates'
EmptyStates.Image = IllustrationContainer
EmptyStates.Title = EmptyStatesTitle
EmptyStates.Body = EmptyStatesBody
