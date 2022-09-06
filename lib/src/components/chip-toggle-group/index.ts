import { ChipToggleGroupItem } from './ChipToggleGroupItem'
import { ChipToggleGroupRoot } from './ChipToggleGroupRoot'

type TChipToggleGroup = typeof ChipToggleGroupRoot & {
  Item: typeof ChipToggleGroupItem
}

export const ChipToggleGroup = ChipToggleGroupRoot as TChipToggleGroup
ChipToggleGroup.Item = ChipToggleGroupItem
ChipToggleGroup.displayName = 'ChipToggleGroupItem'
