import * as RadioGroup from '@radix-ui/react-radio-group'

import { styled } from '~/stitches'

export const RadioButtonGroup = styled(RadioGroup.Root, {
  display: 'flex',
  flexWrap: 'wrap',
  variants: {
    direction: {
      row: { flexDirection: 'row', gap: '$5' },
      column: { flexDirection: 'column' }
    }
  }
})

RadioButtonGroup.displayName = 'RadioButtonGroup'
