import * as React from 'react'

import { Flex } from '~/components/flex'

type TreeListItemProps = React.ComponentProps<typeof Flex>

export const TreeListItem = (props: TreeListItemProps): JSX.Element => {
  return <Flex as="li" gap={2} align="center" {...props} />
}
