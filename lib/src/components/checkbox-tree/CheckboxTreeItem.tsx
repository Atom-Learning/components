import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { CheckboxTreeItemContent } from './CheckboxTreeItemContent'

type CheckboxTreeItemProps = Omit<
  React.ComponentProps<typeof Tree.Item> &
    React.ComponentProps<typeof CheckboxGroup.Item>,
  'required' | 'asChild'
>

export const CheckboxTreeItem = ({
  value,
  title,
  onCheckedChange,
  children,
  disabled,
  ...rest
}: CheckboxTreeItemProps): JSX.Element => {
  const checkboxItemProps = { value, title, onCheckedChange, disabled }
  return (
    <Tree.Item {...rest}>
      <CheckboxTreeItemContent>
        <CheckboxGroup.Item {...checkboxItemProps} />
        {children}
      </CheckboxTreeItemContent>
    </Tree.Item>
  )
}
