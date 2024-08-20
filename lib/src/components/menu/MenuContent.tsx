import * as React from 'react'
import { Content } from '@radix-ui/react-menu'

import { styled } from '~/stitches'

const StyledContent = styled(Content, {
  '--radix-dropdown-menu-content-transform-origin': 'none',
  '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
  '--radix-dropdown-menu-content-available-height':
    'var(--radix-popper-available-height)',
  '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
  '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)',
  position: 'relative !important',
  bg: 'red'
})

export const MenuContent = React.forwardRef((props, ref) => (
  <StyledContent ref={ref} role="menubar" aria-orientation="vertical" {...props} />
))
