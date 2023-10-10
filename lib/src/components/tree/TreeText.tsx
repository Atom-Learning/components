import React from 'react'

import { Text } from '~/components/text'

type TStyledTreeTextProps = React.ComponentProps<typeof Text>

export const TreeText = (
  props: TStyledTreeTextProps
): JSX.Element => {
  return <Text size="md" as="span" {...props} />
}
