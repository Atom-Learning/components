import { DismissibleTrigger } from '~/components/dismissible/DismissibleTrigger'

import { DismissibleGroupItem } from './DismissibleGroupItem'
import { DismissibleGroupRoot } from './DismissibleGroupRoot'

type TDismissibleGroup = typeof DismissibleGroupRoot & {
  Item: typeof DismissibleGroupItem
  Trigger: typeof DismissibleTrigger
}

export const DismissibleGroup = DismissibleGroupRoot as TDismissibleGroup
DismissibleGroup.Item = DismissibleGroupItem
DismissibleGroup.Trigger = DismissibleTrigger
DismissibleGroup.displayName = 'DismissibleGroup'
