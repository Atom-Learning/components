import * as React from 'react'

import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

const StyledBadgeIcon = styled(Icon)

export const BadgeIcon = (
  props: React.ComponentProps<typeof StyledBadgeIcon>
) => <StyledBadgeIcon size="sm" {...props} />
