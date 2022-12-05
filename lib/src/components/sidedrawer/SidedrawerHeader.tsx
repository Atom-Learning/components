import React from 'react'

import { styled } from '~/stitches'

import { TopBar } from '../top-bar'

const StyledHeader = styled('header', {
  '> div': {
    width: '100%'
  }
})

export const SidedrawerHeader: React.FC = ({ children }) => (
  <StyledHeader>
    <TopBar
      css={{
        mx: '$3'
      }}
    >
      {children}
    </TopBar>
  </StyledHeader>
)
