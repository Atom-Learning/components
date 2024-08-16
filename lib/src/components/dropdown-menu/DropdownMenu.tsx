import * as React from 'react'
import { Root } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuProvider, DropdownMenuContext } from './DropdownMenu.context'

import { styled } from '~/stitches'

const StyledDropdownMenu = styled(Root, {})


const DropdownMenuInternal = (props) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownMenuContext)
  return <StyledDropdownMenu open={isOpen} onOpenChange={setIsOpen} {...props} />
}

export const DropdownMenu = ({ defaultOpen, onOpenChange, ...rest }) => (
  <DropdownMenuProvider defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <DropdownMenuInternal {...rest} />
  </DropdownMenuProvider>
)

// This also needs to handle the entire logic of what's selected and what not :)
// Edit 2024: Or does it?
