import { styled } from '~/stitches'

import { sideBarSection } from './SideBar.styles'

export const SideBarMain = styled('div', {
  ...sideBarSection,
  flexGrow: 1,
  overflowY: 'auto'
})
