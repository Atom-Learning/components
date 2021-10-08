import React from 'react'

import { styled } from '~/stitches'

import { DropdownMenuItem } from './DropdownMenuItem'

const StyledLink = styled('a', {
  textDecoration: 'none'
})

export const DropdownMenuLinkItem: React.FC<
  React.ComponentProps<typeof DropdownMenuItem> & { href: string }
> = ({ children, href, ...props }) => (
  <DropdownMenuItem {...props} asChild>
    <StyledLink href={href} role="menuitem">
      {children}
    </StyledLink>
  </DropdownMenuItem>
)
