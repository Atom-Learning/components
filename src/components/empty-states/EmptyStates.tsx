import * as React from 'react'

import { Flex } from '~/components/flex'
import { Image } from '~/components/image'
import { Text } from '~/components/text'
import { CSS, styled } from '~/stitches'

// import background from './semicircle.svg'

export const StyledBody = styled(Text, {
  color: '$tonal400',
  fontFamily: '$body'
})

export const StyledTitle = styled('h2', {
  color: '$tonal400',
  fontFamily: '$body'
})

export const StyledIllustration = styled(Flex, {
  flexDirection: 'column',
  alignItems: 'center'
})

const StyledBox = styled(Flex, {
  flexDirection: 'column',
  alignItems: 'center',
  variants: {
    size: {
      xs: {
        [`& ${StyledIllustration}`]: {
          width: '56px',
          height: '32px',
          mb: '16px'
        },
        [`& ${Image}`]: {
          width: '56px'
        },
        [`& ${StyledTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '12px'
        },
        [`& ${StyledBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '16px'
        }
      },
      sm: {
        [`& ${StyledIllustration}`]: {
          width: '84px',
          height: '48px',
          mb: '16px'
        },
        [`& ${Image}`]: {
          width: '84px'
        },
        [`& ${StyledTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '12px'
        },
        [`& ${StyledBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '16px'
        }
      },
      md: {
        [`& ${StyledIllustration}`]: {
          width: '126px',
          height: '72px',
          mb: '16px'
        },
        [`& ${Image}`]: {
          width: '126px'
        },
        [`& ${StyledTitle}`]: {
          fontSize: '$md',
          fontWeight: '600',
          mb: '12px'
        },
        [`& ${StyledBody}`]: {
          fontSize: '$sm',
          fontWeight: '400',
          mb: '16px'
        }
      },
      lg: {
        [`& ${StyledIllustration}`]: {
          width: '190px',
          height: '142px',
          mb: '32px',
          backgroundImage: `url()`
        },
        [`& ${Image}`]: {
          width: '126px'
        },
        [`& ${StyledTitle}`]: {
          fontSize: '$lg',
          fontWeight: '600',
          mb: '16px'
        },
        [`& ${StyledBody}`]: {
          fontSize: '$md',
          fontWeight: '400',
          mb: '32px'
        }
      },
      xl: {
        [`& ${StyledIllustration}`]: {
          width: '285px',
          height: '213px',
          mb: '32px',
          backgroundImage: `url()`
        },
        [`& ${Image}`]: {
          width: '189px'
        },
        [`& ${StyledTitle}`]: {
          fontSize: '$lg',
          fontWeight: '600',
          mb: '16px'
        },
        [`& ${StyledBody}`]: {
          fontSize: '$md',
          fontWeight: '400',
          mb: '32px'
        }
      }
    },
    color: {
      white: {
        backgroundColor: '$white'
      },
      grey: {
        backgroundColor: '$tonal50'
      }
    }
  }
})

type EmptyStatesProps = React.ComponentProps<typeof StyledBox> & { css?: CSS }

export const EmptyStates: React.FC<EmptyStatesProps> & {
  Image: typeof IllustrationContainer
  Title: typeof StyledTitle
  Body: typeof StyledBody
} = ({ size = 'sm', ...props }) => {
  return <StyledBox size={size} color="grey" {...props} />
}

type IllustrationContainerProps = React.ComponentProps<typeof Image>

const IllustrationContainer: React.FC<IllustrationContainerProps> = (props) => {
  return (
    <StyledIllustration>
      <Image {...props} />
    </StyledIllustration>
  )
}

EmptyStates.displayName = 'EmptyStates'
EmptyStates.Image = IllustrationContainer
EmptyStates.Title = StyledTitle
EmptyStates.Body = StyledBody
