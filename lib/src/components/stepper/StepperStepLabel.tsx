import { styled } from '~/stitches'

import { Text } from '../text'

export const StepperStepLabel = styled(Text, {
  fontWeight: 600,
  textAlign: 'center',
  variants: {
    orientation: {
      vertical: { ml: '$3' },
      horizontal: { mt: '$3' }
    },
    status: {
      normal: { color: '$tonal400', fontWeight: 400 },
      active: {
        color: '$primaryMid'
      },
      viewed: { color: '$primary' },
      success: { color: '$success' }
    }
  }
})
