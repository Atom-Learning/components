import React from 'react'

import { Icon } from '../icon'

export const ToastIcon = (
  props: React.ComponentProps<typeof Icon>
): JSX.Element => <Icon size="sm" css={{ flex: '0 0 auto' }} {...props} />
