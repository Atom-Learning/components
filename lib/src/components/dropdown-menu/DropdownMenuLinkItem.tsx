import React from 'react'

import { styled } from '~/stitches'

import { DropdownMenuItem } from './DropdownMenuItem'
import { isExternalLink } from '~/utilities/uri'

const StyledLink = styled('a', {
  textDecoration: 'none'
})

export const DropdownMenuLinkItem: React.FC<
  React.ComponentProps<typeof DropdownMenuItem> & { href: string }
> = ({ children, href, ...props }) => {
  const externalLinkProps = isExternalLink(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <DropdownMenuItem {...props} asChild>
      <StyledLink href={href} role="menuitem" {...externalLinkProps}>
        {children}
      </StyledLink>
    </DropdownMenuItem>
  )
}
