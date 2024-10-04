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
  color: '$grey800',
  borderRadius: '$round',
  border: '2px solid $grey200',
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
      borderColor: '$grey800',
      backgroundColor: '$grey100'
    },
    '&:active': {
      borderColor: '$primary800',
      backgroundColor: '$grey200'
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

export const AvatarRootProvider = ({ children, name, size }: TAvatarProps) => {
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

export const AvatarRoot = ({
  children,
  size = 'lg',
  name,
  disabled = false,
  onClick
}: TAvatarProps) => (
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

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Initial: AvatarInitial,
  Placeholder: AvatarPlaceholder,
  Icon: AvatarIcon
})

AvatarRoot.displayName = 'Avatar'
