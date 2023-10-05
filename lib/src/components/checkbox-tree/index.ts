import { CheckboxTreeItem } from './CheckboxTreeItem'
import { CheckboxTreeAllItem } from './CheckboxTreeAllItem'
import { CheckboxTreeRoot } from './CheckboxTreeRoot'

type TCheckboxTree = typeof CheckboxTreeRoot & {
  Item: typeof CheckboxTreeItem
  AllItem: typeof CheckboxTreeAllItem
}

export const CheckboxTree = CheckboxTreeRoot as TCheckboxTree
CheckboxTree.Item = CheckboxTreeItem
CheckboxTree.AllItem = CheckboxTreeAllItem
CheckboxTree.displayName = 'CheckboxTree'
