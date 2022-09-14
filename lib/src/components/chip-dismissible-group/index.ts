import { ChipDismissibleGroupItem } from './ChipDismissibleGroupItem'
import { ChipDismissibleGroupRoot } from './ChipDismissibleGroupRoot'

type TChipDismissibleGroup = typeof ChipDismissibleGroupRoot & {
  Item: typeof ChipDismissibleGroupItem
}

export const ChipDismissibleGroup =
  ChipDismissibleGroupRoot as TChipDismissibleGroup
ChipDismissibleGroup.Item = ChipDismissibleGroupItem
ChipDismissibleGroup.displayName = 'ChipDismissibleGroup'
