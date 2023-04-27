import { Box } from '~/components/box'
import { styled } from '~/stitches'

export const NoOverflowContainer = styled(Box, {
  size: '100%',
  borderRadius: 'inherit',
  overflow: 'hidden'
})

NoOverflowContainer.displayName = 'NoOverflowContainer'
