import React from 'react'

import { styled } from '~/stitches'

import { sidedrawerItemStyles } from './Sidedrawer.styles'

const StyledLink = styled('a', sidedrawerItemStyles)
const StyledButton = styled('button', sidedrawerItemStyles)

type SidedrawerItemProps = {
  active?: boolean
  disabled?: boolean
  href?: string
  onClick?: () => void
}

export const SidedrawerItem: React.FC<SidedrawerItemProps> = ({
  active,
  children,
  disabled,
  href,
  onClick,
  ...remainingProps
}) => {
  if (href) {
    return (
      <StyledLink
        active={active}
        href={href}
        onClick={onClick}
        {...remainingProps}
      >
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledButton
      active={active}
      disabled={disabled}
      onClick={onClick}
      {...remainingProps}
    >
      {children}
    </StyledButton>
  )
}
