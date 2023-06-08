import { styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'

import { Flex } from '../flex'

export const Stack = styled(Flex, {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '$2',
  justifyContent: 'flex-start',
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      'row-reverse': { flexDirection: 'row-reverse' },
      column: { flexDirection: 'column' }
    },
    wrap: {
      wrap: { flexWrap: 'wrap' },
      'no-wrap': { flexWrap: 'no-wrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' }
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      'space-between': { justifyContent: 'space-between' },
      'space-around': { justifyContent: 'space-around' }
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      'space-between': { alignItems: 'space-between' },
      'space-around': { alignItems: 'space-around' }
    },
    gap: createThemeVariants('space', { gap: '$key' })
  }
})

Stack.displayName = 'Stack'
