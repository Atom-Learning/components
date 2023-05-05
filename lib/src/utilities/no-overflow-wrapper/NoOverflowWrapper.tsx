import { Box } from '~/components/box'
import { styled } from '~/stitches'

export const noOverflowStyleBlock = (): {
  size: string
  borderRadius: string
  overflow: string
} => {
  return {
    size: '100%',
    borderRadius: 'inherit',
    overflow: 'hidden'
  }
}

export const NoOverflowWrapper = styled(Box, noOverflowStyleBlock())

NoOverflowWrapper.displayName = 'NoOverflowWrapper'
