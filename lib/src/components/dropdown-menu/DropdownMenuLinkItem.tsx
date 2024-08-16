import React from 'react'

import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'
import { getExternalAnchorProps } from '~/utilities/uri'

import { dropdownMenuStyleInteractiveItem } from './DropdownMenuItem'
import { JustItem } from './JustItem'
import { Link } from '../link'

const StyledDropdownMenuLinkItem = styled(Item, dropdownMenuStyleInteractiveItem)

const StyledDropdownMenuLinkItemLink = styled(Link, {
  display: 'flex',
  textDecoration: 'none !important',
  color: 'inherit !important'
})

export const DropdownMenuLinkItem: React.FC<
  React.ComponentProps<typeof JustItem> & { href: string }
> = ({ children, href, ...props }) => (
  <StyledDropdownMenuLinkItem {...props} asChild>
    <StyledDropdownMenuLinkItemLink href={href} role="menuitem" {...getExternalAnchorProps(href)}>
      <JustItem>
        {children}
      </JustItem>
    </StyledDropdownMenuLinkItemLink>
  </StyledDropdownMenuLinkItem>
)
