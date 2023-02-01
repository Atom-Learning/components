import { Overlay } from '@radix-ui/react-dialog'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { styled } from '~/stitches'
import { fadeIn, fadeOut } from '~/utilities'

export const SidedrawerOverlay = styled(Overlay, {
  animationFillMode: 'forwards',
  bg: '$alpha600',
  cursor: 'pointer',
  height: '100vh',
  left: '0',
  position: 'fixed',
  top: '0',
  width: '100vw',
  zIndex: MAX_Z_INDEX - 1,
  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 250ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 550ms ease-out`
    }
  }
})
