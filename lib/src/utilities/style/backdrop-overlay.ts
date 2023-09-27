import { DIALOG_Z_INDEX } from '~/constants/zIndices'
import { fadeIn, fadeOut } from '~/utilities'

export const backdropOverlay = {
  backgroundColor: '$alpha600',
  position: 'fixed',
  inset: 0,
  zIndex: DIALOG_Z_INDEX,
  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 250ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 550ms ease-out`
    }
  }
}
