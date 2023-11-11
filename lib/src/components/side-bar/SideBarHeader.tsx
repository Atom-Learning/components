import { styled } from '~/stitches'

import { sideBarSection } from './SideBar.styles'

export const SideBarHeader = styled('div', {
  ...sideBarSection,
  minHeight: '$6', // At least the height of the TopBar
  borderBottomWidth: '1px',
  borderStyle: 'solid'
})
