import React from 'react'

import { TreeItemContent } from './TreeItemContent'
import { TreeListItem } from './TreeListItem'


type TTreeItemProps = React.ComponentProps<typeof TreeItemContent>

export const TreeItem = (
  { children, ...rest }: TTreeItemProps
): JSX.Element => {
  return <TreeListItem><TreeItemContent {...rest}>{children}</TreeItemContent></TreeListItem>
}
