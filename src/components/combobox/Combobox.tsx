import { Combobox as BaseCombobox, ComboboxOptionText } from '@reach/combobox'
import * as React from 'react'

import { globalCss, styled } from '~/stitches'

import { ComboboxInput } from './ComboboxInput'
import { ComboboxList } from './ComboboxList'
import { ComboboxOption } from './ComboboxOption'
import { ComboboxPopover } from './ComboboxPopover'

globalCss({ ':root': { '--reach-combobox': 1 } })()

const StyledCombobox = styled(BaseCombobox, {})

type ComboboxProps = React.ComponentProps<typeof StyledCombobox>

export const Combobox: React.FC<ComboboxProps> & {
  Input: typeof ComboboxInput
  Popover: typeof ComboboxPopover
  List: typeof ComboboxList
  Option: typeof ComboboxOption
  OptionText: typeof ComboboxOptionText
} = (props) => <StyledCombobox {...props} />

Combobox.displayName = 'Combobox'
Combobox.Option = ComboboxOption
Combobox.Input = ComboboxInput
Combobox.Popover = ComboboxPopover
Combobox.List = ComboboxList
Combobox.OptionText = ComboboxOptionText
