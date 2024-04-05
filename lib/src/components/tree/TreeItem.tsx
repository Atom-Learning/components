import React from 'react'

import { TreeItemContent } from './TreeItemContent'
import { TreeListItem } from './TreeListItem'

type TreeItemProps = React.ComponentProps<typeof TreeItemContent>

export const TreeItem = ({ children, ...rest }: TreeItemProps): JSX.Element => {
  return (
    <TreeListItem>
      <TreeItemContent {...rest}>{children}</TreeItemContent>
    </TreeListItem>
  )
}
