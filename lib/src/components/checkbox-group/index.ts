import { CheckboxGroupItem } from './CheckboxGroupItem'
import { CheckboxGroupAllItem } from './CheckboxGroupAllItem'
import { CheckboxGroupRoot } from './CheckboxGroupRoot'
import { CheckboxGroupSub } from './CheckboxGroupSub'

type CheckboxGroup = typeof CheckboxGroupRoot & {
  Item: typeof CheckboxGroupItem
  AllItem: typeof CheckboxGroupAllItem
  Sub: typeof CheckboxGroupSub
}

export const CheckboxGroup = CheckboxGroupRoot as CheckboxGroup
CheckboxGroup.Item = CheckboxGroupItem
CheckboxGroup.AllItem = CheckboxGroupAllItem
CheckboxGroup.Sub = CheckboxGroupSub
CheckboxGroup.displayName = 'CheckboxGroup'
