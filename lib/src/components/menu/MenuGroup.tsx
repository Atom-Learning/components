import * as React from 'react'

import { styled } from '~/stitches'

const StyledMenuGroup = styled('ul', {})

export const MenuGroup = (props) => (
  <StyledMenuGroup role="group" {...props} />
)
