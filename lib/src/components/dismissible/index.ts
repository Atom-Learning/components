import { DismissibleRoot } from './DismissibleRoot'
import { DismissibleTrigger } from './DismissibleTrigger'

type TDismissible = typeof DismissibleRoot & {
  Trigger: typeof DismissibleTrigger
}

export const Dismissible = DismissibleRoot as TDismissible
Dismissible.Trigger = DismissibleTrigger
Dismissible.displayName = 'Dismissible'
