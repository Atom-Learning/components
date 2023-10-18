import * as React from 'react'
import { Close } from '@atom-learning/icons'

import { Icon } from '../../icon'
import { ActionIcon } from '../../action-icon'
import { AlertDialog } from '../AlertDialog'

export const AlertDialogClose = () => (
  <AlertDialog.Cancel asChild>
    <ActionIcon
      label=""
      size="md"
      hasTooltip={false}
      appearance="simple"
      css={{ position: 'absolute', right: '$4', top: '$4' }}
    >
      <Icon is={Close} css={{ color: '$grey700' }} />
    </ActionIcon>
  </AlertDialog.Cancel>
)
