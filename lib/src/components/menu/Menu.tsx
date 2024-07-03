import * as React from 'react'
import { Box } from '../box'
import { Root } from '@radix-ui/react-roving-focus'

import { styled } from '~/stitches'

const StyledRoot = styled(Root, {

})

export const Menu = (props) => (
  <StyledRoot role="menubar" aria-orientation="vertical" {...props} />
)

// This also needs to handle the entire logic of what's selected and what not :)
// Edit 2024: Or does it?

// Visuals ONLY
