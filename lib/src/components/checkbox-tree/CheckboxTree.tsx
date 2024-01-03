import React from 'react'
import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { CheckboxTreeCollapsible } from './CheckboxTreeCollapsible'
import { CheckboxTreeCollapsibleContent } from './CheckboxTreeCollapsibleContent'
import { CheckboxTreeCollapsibleTrigger } from './CheckboxTreeCollapsibleTrigger'
import { CheckboxTreeItem } from './CheckboxTreeItem'

type CheckboxTreeRootProps = Omit<
  React.ComponentProps<typeof CheckboxGroup> &
    React.ComponentProps<typeof Tree>,
  'asChild'
>

export const CheckboxTreeRoot = ({
  checked,
  defaultChecked,
  onCheckedChange,
  ...rest
}: CheckboxTreeRootProps) => {
  const checkboxGroupProps = { checked, defaultChecked, onCheckedChange }
  return (
    <CheckboxGroup {...checkboxGroupProps} asChild>
      <Tree {...rest} />
    </CheckboxGroup>
  )
}

export const CheckboxTree = Object.assign(CheckboxTreeRoot, {
  Collapsible: CheckboxTreeCollapsible,
  CollapsibleContent: CheckboxTreeCollapsibleContent,
  CollapsibleTrigger: CheckboxTreeCollapsibleTrigger,
  Item: CheckboxTreeItem
})
