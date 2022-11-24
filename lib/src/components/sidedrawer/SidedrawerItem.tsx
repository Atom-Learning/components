import React from 'react'

import { styled } from '~/stitches'

import { sidedrawerItemStyles } from './Sidedrawer.styles'

const StyledLink = styled('a', sidedrawerItemStyles)
const StyledButton = styled('button', sidedrawerItemStyles)

type SidedrawerItemProps = {
  active?: boolean
} & (
  | {
      href: string
      onClick?: never
    }
  | {
      href?: never
      onClick: () => void
    }
)

export const SidedrawerItem: React.FC<SidedrawerItemProps> = ({
  active,
  children,
  href,
  onClick
}) =>
  href ? (
    <StyledLink active={active} href={href}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton active={active} onClick={onClick}>
      {children}
    </StyledButton>
  )
