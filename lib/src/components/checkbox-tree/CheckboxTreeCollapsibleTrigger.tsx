import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { CheckboxTreeItemContent } from './CheckboxTreeItemContent'

type CheckboxGroupCollapsibleTriggerProps = Omit<
  React.ComponentProps<typeof Tree.CollapsibleTrigger> &
    React.ComponentProps<typeof CheckboxGroup.AllItem>,
  'required' | 'asChild'
>

export const CheckboxTreeCollapsibleTrigger = ({
  onCheckedChange,
  title,
  label,
  children,
  disabled,
  ...rest
}: CheckboxGroupCollapsibleTriggerProps): JSX.Element => {
  const treeCollapsibleTriggerProps = { label }
  const checkboxAllItemProps = { onCheckedChange, title, disabled }
  return (
    <Tree.CollapsibleTrigger {...treeCollapsibleTriggerProps} {...rest}>
      <CheckboxTreeItemContent
        onClick={
          //  Don't propagate click and don't open/close the collapsible when the label/checkbox are clicked
          (e) => e.stopPropagation()
        }
      >
        <CheckboxGroup.AllItem {...checkboxAllItemProps} />
        {children}
      </CheckboxTreeItemContent>
    </Tree.CollapsibleTrigger>
  )
}
