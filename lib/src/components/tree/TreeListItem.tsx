import * as React from 'react'

import { Flex } from '~/components/flex'

type TTreeListItemProps = React.ComponentProps<typeof Flex>

export const TreeListItem = (props: TTreeListItemProps): JSX.Element => {
  return <Flex as="li" gap={2} align="center" {...props} />
}
