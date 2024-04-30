import React from 'react'

import { ComponentsContext } from '~/context'
import { styled } from '~/stitches'
import { getExternalAnchorProps, isExternalUrl } from '~/utilities/uri'

import { DropdownMenuItem } from './DropdownMenuItem'

const StyledLink = styled('a', {
  textDecoration: 'none'
})

export const DropdownMenuLinkItem = ({
  children,
  href,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem> & { href: string }) => {
  const { Link: RouterLink } = React.useContext(ComponentsContext)

  return (
    <DropdownMenuItem {...props} asChild>
      <StyledLink
        as={isExternalUrl(href) ? 'a' : RouterLink}
        href={href}
        role="menuitem"
        {...getExternalAnchorProps(href)}
      >
        {children}
      </StyledLink>
    </DropdownMenuItem>
  )
}
