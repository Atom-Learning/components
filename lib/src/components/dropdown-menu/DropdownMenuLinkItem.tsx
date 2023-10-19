import React from 'react'

import { styled } from '~/stitches'

import { DropdownMenuItem } from './DropdownMenuItem'
import { getExternalAnchorProps } from '~/utilities/uri'

const StyledLink = styled('a', {
  textDecoration: 'none'
})

export const DropdownMenuLinkItem: React.FC<
  React.ComponentProps<typeof DropdownMenuItem> & { href: string }
> = ({ children, href, ...props }) => (
  <DropdownMenuItem {...props} asChild>
    <StyledLink href={href} role="menuitem" {...getExternalAnchorProps(href)}>
      {children}
    </StyledLink>
  </DropdownMenuItem>
)
