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
  bg: '$grey200',
  zIndex: 1,
  flex: 'none',
  variants: {
    status: {
      default: { bg: '$grey200', color: '$grey700' },
      active: {
        bg: 'white',
        color: '$primary900',
        border: '2px solid',
        borderColor: 'currentColor'
      },
      viewed: {
        bg: 'white',
        border: '2px solid $grey600',
        color: '$grey1000'
      },
      completed: { bg: '$primary800', color: 'white' },
      reviewed: { bg: '$primary900', color: 'white' },
      success: { bg: '$success', color: 'white' }
    }
  }
})
