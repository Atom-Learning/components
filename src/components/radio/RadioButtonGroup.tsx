import * as RadioGroup from '@radix-ui/react-radio-group'

import { styled } from '~/stitches'

export const RadioButtonGroup = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
})

RadioButtonGroup.displayName = 'RadioButtonGroup'
