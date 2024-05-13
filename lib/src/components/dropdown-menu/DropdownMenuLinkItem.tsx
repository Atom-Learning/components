import React from 'react'

import { useProvidedComponents } from '~/context'
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
}: React.ComponentProps<typeof DropdownMenuItem> & { href: string }) => {
  const { RouterLink } = useProvidedComponents({ href })

  return (
    <DropdownMenuItem {...props} asChild>
      <StyledLink
        as={RouterLink}
        href={href}
        role="menuitem"
        {...getExternalAnchorProps(href)}
      >
        {children}
      </StyledLink>
    </DropdownMenuItem>
  )
}
