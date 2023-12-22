import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { CheckboxTreeItemContent } from './CheckboxTreeItemContent'

type CheckboxGroupCollapsibleTriggerProps = React.ComponentProps<
  typeof Tree.CollapsibleTrigger
> &
  React.ComponentProps<typeof CheckboxGroup.AllItem>

export const CheckboxTreeCollapsibleTrigger = ({
  onCheckedChange,
  title,
  label,
  children,
  ...rest
}: CheckboxGroupCollapsibleTriggerProps): JSX.Element => {
  const treeCollapsibleTriggerProps = { label }
  const checkboxAllItemProps = { onCheckedChange, title }
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
