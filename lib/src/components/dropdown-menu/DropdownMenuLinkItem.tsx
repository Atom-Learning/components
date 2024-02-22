import React from 'react'

import { styled } from '~/stitches'
import { getExternalAnchorProps } from '~/utilities/uri'

import { DropdownMenuItem } from './DropdownMenuItem'

const StyledLink = styled('a', {
  textDecoration: 'none'
})

export const DropdownMenuLinkItem = ({
  children,
  href,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem> & { href: string }) => (
  <DropdownMenuItem {...props} asChild>
    <StyledLink href={href} role="menuitem" {...getExternalAnchorProps(href)}>
      {children}
    </StyledLink>
  </DropdownMenuItem>
)
