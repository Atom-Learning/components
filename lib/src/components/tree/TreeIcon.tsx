import * as React from 'react'

import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

const StyledTreeIcon = styled(Icon, {
  flexShrink: 0,
  alignSelf: 'start'
})
export const TreeIcon = (
  props: React.ComponentProps<typeof StyledTreeIcon>
): JSX.Element => <StyledTreeIcon size="md" {...props} />
