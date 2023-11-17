import { styled } from '~/stitches'

import { drawerSection } from './Drawer.styles'

export const DrawerHeader = styled('div', {
  ...drawerSection,
  minHeight: '$6', // At least the height of the TopBar
  borderBottom: '1px solid $base3'
})
