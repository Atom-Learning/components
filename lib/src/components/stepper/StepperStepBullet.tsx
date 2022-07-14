import { styled } from '~/stitches'

import { Flex } from '../flex'

export const StepperStepBullet = styled(Flex, {
  position: 'relative',
  p: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  size: '$3',
  borderRadius: '50%',
  border: 'none',
  bg: '$tonal50',
  zIndex: 1,
  variants: {
    status: {
      default: { bg: '$tonal50', color: '$tonal400' },
      active: {
        bg: 'white',
        color: '$primaryMid',
        border: '2px solid',
        borderColor: 'currentColor'
      },
      viewed: { bg: '$primary', color: 'white' },
      success: { bg: '$success', color: 'white' }
    }
  }
})
