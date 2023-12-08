import * as React from 'react'

import { Flex } from '~/components/flex'
import { styled } from '~/stitches'

const StyledList = styled(Flex, {
  width: '100%',
  p: 0,
  m: 0,
  listStyle: 'none',
  '& &': {
    pl: '$space$4'
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
  '& & & & & &': {
    pl: '$space$9'
  },
  '& > *:not(:first-child)': {
    mt: '$0'
  }
})

type TreeListProps = Omit<
  React.ComponentPropsWithoutRef<typeof Flex>,
  'direction'
>

export const TreeList = React.forwardRef(
  (
    props: TreeListProps,
    ref: React.ForwardedRef<HTMLUListElement>
  ): JSX.Element => (
    <StyledList as="ul" ref={ref} gap={1} {...props} direction="column" />
  )
)
