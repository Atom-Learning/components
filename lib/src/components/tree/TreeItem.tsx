import React from 'react'

import { styled } from '~/stitches'
import { Flex } from '~/components/flex'
import { TreeItemContent } from './TreeItemContent'


const StyledTreeItem = styled('li', {
  position: 'relative',
  // p: '$2',
  pl: `var(--navigation-menu-vertical-item-pl)`,
  width: '100%'
})

type TTreeItemProps = React.ComponentProps<typeof StyledTreeItem>

export const TreeItem = (
  { children, ...rest }: TTreeItemProps
): JSX.Element => {
  return <StyledTreeItem {...rest}><TreeItemContent>{children}</TreeItemContent></StyledTreeItem>
}
