import { Content, Portal } from '@radix-ui/react-dialog'
import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { styled } from '~/stitches'
import { slideInLeft, slideOutLeft } from '~/utilities'

import { SidedrawerOverlay } from './SidedrawerOverlay'

const StyledContent = styled(Content, {
  bg: 'white',
  boxShadow: '$2',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  maxWidth: '304px',
  width: '100%',
  zIndex: MAX_Z_INDEX,
  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${slideInLeft} 250ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${slideOutLeft} 250ms ease-out`
    }
  }
})

export const SidedrawerContent: React.FC = ({ children }) => (
  <Portal>
    <SidedrawerOverlay data-testid="sidedrawer_overlay" />
    <StyledContent role="navigation">{children}</StyledContent>
  </Portal>
)
