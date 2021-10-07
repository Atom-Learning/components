import React from 'react'

import { styled } from '~/stitches'

import { DropdownMenuItem } from './DropdownMenuItem'

const StyledLink = styled('a', {
  alignItems: 'center',
  color: 'currentColor',
  display: 'flex',
  textDecoration: 'none'
})

export const DropdownMenuLinkItem: React.FC<
  React.ComponentProps<typeof DropdownMenuItem> & { href: string }
> = ({ children, href, ...props }) => (
  <DropdownMenuItem {...props} role="presentation">
    <StyledLink href={href} role="menuitem">
      {children}
    </StyledLink>
  </DropdownMenuItem>
)
