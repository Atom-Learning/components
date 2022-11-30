import { Content, Portal } from '@radix-ui/react-dialog'
import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { keyframes, styled } from '~/stitches'

import { SidedrawerOverlay } from './SidedrawerOverlay'

const slideIn = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0)' }
})

const slideOut = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-100%)' }
})

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
      animation: `${slideIn} 250ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${slideOut} 250ms ease-out`
    }
  }
})

export const SidedrawerContent: React.FC = ({ children }) => (
  <Portal>
    <SidedrawerOverlay data-testid="sidedrawer_overlay" />
    <StyledContent role="navigation">{children}</StyledContent>
  </Portal>
)
