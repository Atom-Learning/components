import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { CheckboxTreeItemContent } from './CheckboxTreeItemContent'

type CheckboxTreeItemProps = React.ComponentProps<typeof Tree.Item> &
  React.ComponentProps<typeof CheckboxGroup.Item>

export const CheckboxTreeItem = ({
  value,
  title,
  onCheckedChange,
  children,
  ...rest
}: CheckboxTreeItemProps): JSX.Element => {
  const checkboxItemProps = { value, title, onCheckedChange }
  return (
    <Tree.Item {...rest}>
      <CheckboxTreeItemContent>
        <CheckboxGroup.Item {...checkboxItemProps} />
        {children}
      </CheckboxTreeItemContent>
    </Tree.Item>
  )
}
