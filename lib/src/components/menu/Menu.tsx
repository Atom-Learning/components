import * as React from 'react'
import { Box } from '../box'
import { Root, Anchor } from '@radix-ui/react-menu'

import { styled } from '~/stitches'

const StyledRoot = styled(Box, {
  bg: 'blue',
  '& > data-radix-popper-content-wrapper': {
    position: 'static !important',
    bg: 'yellow'
  }
})

export const Menu = ({ children, ...rest }) => (
  <StyledRoot>
    <Root role="menubar" aria-orientation="vertical" {...rest} modal={false}>
      {/* <Anchor asChild>
      <Box data-myrto />
    </Anchor> */}
      {children}

    </Root>
  </StyledRoot>
)

// This also needs to handle the entire logic of what's selected and what not :)
// Edit 2024: Or does it?
// Edit 2024 (later): It doesn't.

// Visuals ONLY
