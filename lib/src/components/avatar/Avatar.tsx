import * as React from 'react'

import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'

import { AvatarIcon } from './AvatarIcon'
import { AvatarImage } from './AvatarImage'
import { AvatarInitial } from './AvatarInitial'
import { AvatarPlaceholder } from './AvatarPlaceholder'

const avatarRootStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$tonal400',
  borderRadius: '$round',
  border: '2px solid $tonal100',
  backgroundColor: '$white',
  overflow: 'hidden',
  variants: {
    size: {
      xs: { size: '$2' },
      sm: { size: '$3' },
      md: { size: '$4' },
      lg: { size: '$5' },
      xl: { size: '$6' },
      xxl: { size: '$7' }
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
}) => (
  <AvatarRootProvider name={name} size={size}>
    {onClick ? (
      <StyledButton
        size={size}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        css={{ cursor: disabled ? 'auto' : 'pointer' }}
      >
        {children}
      </StyledButton>
    ) : (
      <StyledDiv size={size}>{children}</StyledDiv>
    )}
  </AvatarRootProvider>
)

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
