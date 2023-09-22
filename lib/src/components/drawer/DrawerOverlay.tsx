import { Overlay } from '@radix-ui/react-dialog'

import { styled } from '~/stitches'
import { backdropOverlay } from '~/utilities/style/backdrop-overlay'

export const DrawerOverlay = styled(Overlay, backdropOverlay())
