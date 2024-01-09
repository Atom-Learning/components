import { styled } from '~/stitches'

import { Text } from '../text'

export const StepperStepLabel = styled(Text, {
  fontWeight: 600,
  variants: {
    direction: {
      vertical: { ml: '$3', textAlign: 'left' },
      horizontal: { mt: '$3', textAlign: 'center' }
    },
    status: {
      default: { color: '$tonal300', fontWeight: 400 },
      active: {
        color: '$primary900'
      },
      viewed: { color: '$tonal600' },
      completed: { color: '$primary800' },
      success: { color: '$success' },
      reviewed: {}
    }
  }
})
