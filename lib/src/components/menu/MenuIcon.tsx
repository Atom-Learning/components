import * as React from 'react'

import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

const StyledMenuIcon = styled(Icon, {
  alignSelf: 'start'
})
export const MenuIcon = (
  props: React.ComponentProps<typeof StyledMenuIcon>
): JSX.Element => <StyledMenuIcon size="sm" {...props} />
