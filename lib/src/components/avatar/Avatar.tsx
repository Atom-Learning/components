import * as React from 'react'

import { User } from '@atom-learning/icons'
import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'
import { Box } from '../box'
import { Icon } from '../icon'
import { Image } from '../image'

const avatarRootStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  border: '2px solid $tonal100',
  backgroundColor: '$white',
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
}

const StyledDiv = styled('div', avatarRootStyles)
const StyledButton = styled('button', {
  all: 'unset',
  ...avatarRootStyles,
  '&:not([disabled])': {
    '&:hover': {
      borderColor: '$tonal400',
      backgroundColor: '$tonal50'
    },
    '&:active': {
      borderColor: '$primary',
      backgroundColor: '$tonal100'
    },
    '&:focus-visible': focusVisibleStyleBlock()
  },
  '&[disabled]': {
    opacity: '30%',
    cursor: 'not-allowed'
  }
})

type TAvatarProps = React.ComponentProps<
  typeof StyledDiv | typeof StyledButton
> & { name?: string } & (
    | {
        onClick: React.MouseEventHandler<HTMLButtonElement>
        disabled?: boolean
      }
    | { onClick?: never; disabled?: never }
  )

export type TAvatarRootContext = {
  name?: TAvatarProps['name']
  size: TAvatarProps['size']
}

export const AvatarRootContext = React.createContext<TAvatarRootContext>({
  name: undefined,
  size: 'lg'
})

export const AvatarRootProvider: React.FC<TAvatarProps> = ({
  children,
  name,
  size
}) => {
  const value = React.useMemo<TAvatarRootContext>(
    () => ({ name, size }),
    [name, size]
  )

  return (
    <AvatarRootContext.Provider value={value}>
      {children}
    </AvatarRootContext.Provider>
  )
}

export const AvatarRoot: React.FC<TAvatarProps> = ({
  children,
  size = 'lg',
  name,
  disabled = false,
  onClick
}) => {
  if (onClick) {
    return (
      <StyledButton
        size={size}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        css={{ cursor: disabled ? 'auto' : 'pointer' }}
      >
        <AvatarRootProvider name={name} size={size}>
          {children}
        </AvatarRootProvider>
      </StyledButton>
    )
  }

  return (
    <StyledDiv size={size}>
      <AvatarRootProvider name={name} size={size}>
        {children}
      </AvatarRootProvider>
    </StyledDiv>
  )
}

type TAvatarIconProps = {
  is: typeof Icon
}

const toIconSize = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'md',
  xl: 'lg',
  xxl: 'lg'
}

const AvatarIcon: React.FC<TAvatarIconProps> = ({ is }) => {
  const rootContext = React.useContext(AvatarRootContext)
  const { size } = rootContext
  const iconSize = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toIconSize[s]),
    [size]
  )

  return <Icon size={iconSize} is={is} css={{ color: '$tonal400' }} />
}

const AvatarPlaceholder: React.FC<Record<string, never>> = () => {
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

const AvatarInitial: React.FC<Record<string, never>> = () => {
  const rootContext = React.useContext(AvatarRootContext)
  const { name } = rootContext

  if (name) {
    return <Box>{name[0].toUpperCase()}</Box>
  }

  return <AvatarPlaceholder />
}

const StyledImage = styled(Image, {
  size: '100%',
  objectFit: 'cover'
})

type TAvatarImageProps = typeof StyledImage & {
  src: string
}

const AvatarImage: React.FC<TAvatarImageProps> = ({ src }) => {
  const rootContext = React.useContext(AvatarRootContext)
  const { name } = rootContext

  if (src) {
    return <StyledImage src={src} alt={name ? `${name}'s avatar` : 'avatar'} />
  }

  return <AvatarInitial />
}

type TAvatar = typeof AvatarRoot & {
  Image: typeof AvatarImage
  Initial: typeof AvatarInitial
  Placeholder: typeof AvatarPlaceholder
  Icon: typeof AvatarIcon
}

export const Avatar = AvatarRoot as TAvatar
Avatar.Image = AvatarImage
Avatar.Initial = AvatarInitial
Avatar.Placeholder = AvatarPlaceholder
Avatar.Icon = AvatarIcon
Avatar.displayName = 'Avatar'
