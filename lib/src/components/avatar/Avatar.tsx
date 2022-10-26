import * as React from 'react'

import { User } from '@atom-learning/icons'

import { styled } from '~/stitches'

import { Box } from '../box'
import { Flex } from '../flex'
import { Icon } from '../icon'

const StyledAvatar = styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  border: '2px solid $tonal100',
  backgroundColor: '$white',
  '&:not([disabled]):hover': {
    borderColor: '$tonal400',
    backgroundColor: '$tonal50'
  },
  '&:not([disabled]):active': {
    borderColor: '$primary',
    backgroundColor: '$tonal100'
  },
  '&:focus': {
    boxShadow: '0px 0px 0px 3px #1D6FF5, 0px 0px 0px 2px #FFFFFF'
  },
  '&[disabled]': {
    opacity: '30%'
  },
  overflow: 'hidden',
  fontFamily: '$body',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        size: '$2'
      },
      sm: {
        fontSize: '$sm',
        size: '$3'
      },
      md: {
        fontSize: '$sm',
        size: '$4'
      },
      lg: {
        fontSize: '$md',
        size: '$5'
      },
      xl: {
        fontSize: '$md',
        size: '$6'
      },
      xxl: {
        fontSize: '$lg',
        size: '$7'
      }
    }
  }
})

type AvatarContentProps = {
  src?: string
  children?: React.ReactNode
  name?: string
}
type AvatarProps = React.ComponentProps<typeof StyledAvatar> &
  AvatarContentProps & {
    disabled: boolean
    onClick?: () => void
  }

const AvatarContent: React.FC<AvatarContentProps> = ({
  src,
  children,
  name
}) => {
  if (src) {
    return (
      <img src={src} alt={name ? `${name}'s avatar` : 'avatar'} width="100%" />
    )
  }

  if (children) {
    return <Box>{children}</Box>
  }

  if (name) {
    return <Box>{name[0].toUpperCase()}</Box>
  }

  return (
    <Box css={{ position: 'relative', size: '100%' }}>
      <Icon
        is={User}
        css={{
          color: '$tonal400',
          size: '100%'
        }}
      />
    </Box>
  )
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'lg',
  src,
  children,
  name,
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <StyledAvatar
      size={size}
      disabled={disabled}
      onClick={disabled ? null : onClick}
      css={{ cursor: onClick && !disabled ? 'pointer' : 'auto' }}
      {...rest}
    >
      <AvatarContent src={src} name={name}>
        {children}
      </AvatarContent>
    </StyledAvatar>
  )
}

Avatar.displayName = 'Avatar'
