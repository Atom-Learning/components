import { TileToggleGroupItem } from './TileToggleGroupItem'
import { TileToggleGroupRoot } from './TileToggleGroupRoot'

type TTileToggleGroup = typeof TileToggleGroupRoot & {
  Item: typeof TileToggleGroupItem
}

export const TileToggleGroup = TileToggleGroupRoot as TTileToggleGroup
TileToggleGroup.Item = TileToggleGroupItem
TileToggleGroup.displayName = 'TileToggleGroup'
