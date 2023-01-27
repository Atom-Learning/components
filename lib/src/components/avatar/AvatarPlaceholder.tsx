import { User } from '@atom-learning/icons'
import * as React from 'react'

import { Box } from '../box'
import { Icon } from '../icon'

export const AvatarPlaceholder: React.FC<Record<string, never>> = () => {
  return (
    <Box css={{ position: 'relative', size: '100%' }}>
      <Icon is={User} css={{ size: '100%' }} />
    </Box>
  )
}
