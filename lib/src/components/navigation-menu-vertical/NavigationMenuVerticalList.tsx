import { List } from '@radix-ui/react-navigation-menu'

import { styled } from '~/stitches'

const StyledList = styled(List, {
  p: 0,
  m: 0,
  listStyle: 'none',
  '--navigation-menu-vertical-item-pl': '$space$4',
  '& &': {
    '--navigation-menu-vertical-item-pl': '$space$5'
  },
  '& & &': {
    '--navigation-menu-vertical-item-pl': '$space$7'
  },
  '& & & &': {
    '--navigation-menu-vertical-item-pl': '$space$8'
  },
  '& > *:not(:first-child)': {
    mt: '$0'
  }
})

export const NavigationMenuVerticalList = StyledList
