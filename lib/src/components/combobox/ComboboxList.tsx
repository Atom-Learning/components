import { ComboboxList as BaseComboboxList } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxList = styled(BaseComboboxList, {
  listStyle: 'none',
  m: 0,
  p: 0,
  userSelect: 'none'
})
