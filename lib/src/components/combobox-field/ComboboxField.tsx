import { Combobox as BaseCombobox, ComboboxOptionText } from '@reach/combobox'
import * as React from 'react'

import { globalCss, styled } from '~/stitches'

import { ComboboxFieldInput } from './ComboboxFieldInput'
import { ComboboxFieldList } from './ComboboxFieldList'
import { ComboboxFieldOption } from './ComboboxFieldOption'
import { ComboboxFieldPopover } from './ComboboxFieldPopover'

globalCss({ ':root': { '--reach-combobox': 1 } })()

const StyledComboboxField = styled(BaseCombobox, {})

type ComboboxFieldProps = React.ComponentProps<typeof StyledComboboxField>

export const ComboboxField: React.FC<ComboboxFieldProps> & {
  Input: typeof ComboboxFieldInput
  Popover: typeof ComboboxFieldPopover
  List: typeof ComboboxFieldList
  Option: typeof ComboboxFieldOption
  OptionText: typeof ComboboxOptionText
} = (props) => <StyledComboboxField {...props} />

ComboboxField.displayName = 'ComboboxField'
ComboboxField.Option = ComboboxFieldOption
ComboboxField.Input = ComboboxFieldInput
ComboboxField.Popover = ComboboxFieldPopover
ComboboxField.List = ComboboxFieldList
ComboboxField.OptionText = ComboboxOptionText
