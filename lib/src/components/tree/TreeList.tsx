import * as React from 'react'

import { Flex } from '~/components/flex'
import { styled } from '~/stitches'

const StyledList = styled(Flex, {
  width: '100%',
  p: 0,
  m: 0,
  listStyle: 'none',
  '& &': {
    pl: '$space$4',
  },
  '& & &': {
    pl: '$space$5'
  },
  '& & & &': {
    pl: '$space$7'
  },
  '& & & & &': {
    pl: '$space$8'
  },
  '& > *:not(:first-child)': {
    mt: '$0'
  }
})

type TreeListProps = Omit<React.ComponentPropsWithoutRef<typeof Flex>, 'direction'>

export const TreeList = (props: TreeListProps): JSX.Element => <StyledList as='ul' gap={1} {...props} direction='column' />
