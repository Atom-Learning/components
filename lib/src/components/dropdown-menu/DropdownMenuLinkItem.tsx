import React from 'react'

import { styled } from '~/stitches'
import { getExternalAnchorProps, isExternalUrl } from '~/utilities/uri'

import { DropdownMenuItem } from './DropdownMenuItem'
import { ComponentsContext } from '~/context'

const StyledLink = styled('a', {
  textDecoration: 'none'
})

export const DropdownMenuLinkItem = ({
  children,
  href,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem> & { href: string }) => {
  const { Link: ExternalLink } = React.useContext(ComponentsContext)

  return (
    <DropdownMenuItem {...props} asChild>
      <StyledLink
        as={isExternalUrl(href) ? 'a' : ExternalLink}
        href={href}
        role="menuitem"
        {...getExternalAnchorProps(href)}
      >
        {children}
      </StyledLink>
    </DropdownMenuItem>
  )
}
