import { DismissibleTrigger } from '~/components/dismissible/DismissibleTrigger'

import { DismissibleGroupItem } from './DismissibleGroupItem'
import { DismissibleGroupRoot } from './DismissibleGroupRoot'

export const DismissibleGroup = Object.assign(DismissibleGroupRoot, {
  Item: DismissibleGroupItem,
  Trigger: DismissibleTrigger
})
