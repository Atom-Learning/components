import React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'

const StyledTreeText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  fontWeight: 'var(--navigation-menu-vertical-item-font-weight)'
})

type TStyledTreeTextProps = React.ComponentProps<
  typeof StyledTreeText
>

export const TreeText = (
  props: TStyledTreeTextProps
): JSX.Element => {
  return <StyledTreeText size="md" as="span" {...props} />
}
