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
  }
})

type TreeListProps = Omit<React.ComponentProps<typeof Flex>, 'direction'>

export const TreeList: React.ForwardRefExoticComponent<TreeListProps> =
  React.forwardRef((props, ref) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Stitches polymorphic components issue due to `as="ul"`
    <StyledList as="ul" ref={ref} {...props} direction="column" />
  ))
