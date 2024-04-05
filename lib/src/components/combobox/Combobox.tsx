import { Combobox as BaseCombobox, ComboboxOptionText } from '@reach/combobox'

import { globalCss, styled } from '~/stitches'

import { ComboboxInput } from './ComboboxInput'
import { ComboboxList } from './ComboboxList'
import { ComboboxOption } from './ComboboxOption'
import { ComboboxPopover } from './ComboboxPopover'

globalCss({ ':root': { '--reach-combobox': 1 } })()

export const Combobox = Object.assign(styled(BaseCombobox, {}), {
  displayName: 'Combobox',
  Option: ComboboxOption,
  Input: ComboboxInput,
  Popover: ComboboxPopover,
  List: ComboboxList,
  OptionText: ComboboxOptionText
})
