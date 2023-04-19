import { Tile as TileRoot } from './Tile'
import { TileNoOverflowContainer } from './TileNoOverflowContainer'

type TTile = typeof TileRoot & {
  NoOverflowContainer: typeof TileNoOverflowContainer
}
export const Tile = TileRoot as TTile
Tile.NoOverflowContainer = TileNoOverflowContainer
Tile.displayName = 'Tile'

export { TileGroup } from './TileGroup'
