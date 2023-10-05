import { CheckboxGroupItem } from './CheckboxGroupItem'
import { CheckboxGroupAllItem } from './CheckboxGroupAllItem'
import { CheckboxGroupRoot } from './CheckboxGroupRoot'

type TCheckboxGroup = typeof CheckboxGroupRoot & {
  Item: typeof CheckboxGroupItem
  AllItem: typeof CheckboxGroupAllItem
}

export const CheckboxGroup = CheckboxGroupRoot as TCheckboxGroup
CheckboxGroup.Item = CheckboxGroupItem
CheckboxGroup.AllItem = CheckboxGroupAllItem
CheckboxGroup.displayName = 'CheckboxGroup'
