import { AnswerIdentifier } from './AnswerIdentifier'
import { AnswerToggleGroupItem } from './AnswerToggleGroupItem'
import { AnswerToggleGroupItemInput } from './AnswerToggleGroupItemInput'
import { AnswerToggleGroupRoot } from './AnswerToggleGroupRoot'

export const AnswerToggleGroup = Object.assign(AnswerToggleGroupRoot, {
  Item: AnswerToggleGroupItem,
  ItemInput: AnswerToggleGroupItemInput,
  Identifier: AnswerIdentifier
})

AnswerToggleGroup.displayName = 'AnswerToggleGroup'
