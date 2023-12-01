import * as React from 'react'

import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

const StyledNavigationMenuVerticalIcon = styled(Icon, {
  alignSelf: 'start'
})
export const NavigationMenuVerticalIcon = (
  props: React.ComponentProps<typeof StyledNavigationMenuVerticalIcon>
): JSX.Element => <StyledNavigationMenuVerticalIcon size="md" {...props} />
