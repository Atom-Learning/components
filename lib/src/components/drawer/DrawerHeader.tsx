import { styled } from '~/stitches'

import { drawerSection } from './Drawer.styles'

export const DrawerHeader = styled('div', {
  ...drawerSection,
  borderBottom: '1px solid $base3'
})
