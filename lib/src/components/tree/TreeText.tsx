import React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'

type TStyledTreeTextProps = React.ComponentProps<typeof Text>

const StyledTreeText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  py: '$0',
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
  textOverflow: 'ellipsis'
})

export const TreeText = (props: TStyledTreeTextProps): JSX.Element => {
  return <StyledTreeText size="md" as="span" {...props} noCapsize />
}
