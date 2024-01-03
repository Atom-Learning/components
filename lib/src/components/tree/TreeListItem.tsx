import { styled } from '~/stitches'
import * as React from 'react'

import { Flex } from '~/components/flex'

type TreeListItemProps = React.ComponentProps<typeof Flex>

const StyledTreeListItem = styled(Flex, {
  '&:not(:first-child)': {
    mt: '$0'
  }
})

export const TreeListItem = React.forwardRef(
  (
    props: TreeListItemProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ): JSX.Element => {
    return (
      <StyledTreeListItem
        as="li"
        gap={2}
        align="center"
        {...props}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Stitches polymorphic components issue due to `as="li"`
        ref={ref}
        role="treeitem"
      />
    )
  }
)
