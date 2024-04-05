import { styled } from '~/stitches'

import { drawerSection } from './Drawer.styles'

export const DrawerMain = styled('div', {
  ...drawerSection,
  flexGrow: 1,
  overflowY: 'auto'
})
