import { styled } from '~/stitches'

import { Text } from '../text'

export const StepperStepLabel = styled(Text, {
  fontWeight: 600,
  variants: {
    direction: {
      vertical: { textAlign: 'left' },
      horizontal: { textAlign: 'center' }
    },
    status: {
      default: { color: '$tonal300', fontWeight: 400 },
      active: {
        color: '$primaryMid'
      },
      viewed: { color: '$tonal600' },
      completed: { color: '$primary' },
      success: { color: '$success' },
      reviewed: {}
    }
  }
})
