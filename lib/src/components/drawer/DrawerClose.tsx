import { Close } from '@atom-learning/icons'
import { Close as DialogClose } from '@radix-ui/react-dialog'
import React from 'react'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'

export const DrawerClose = (
  props: Omit<React.ComponentProps<typeof ActionIcon>, 'children'>
) => (
  <DialogClose asChild>
    <ActionIcon
      theme="neutral"
      appearance="simple"
      size="md"
      hasTooltip={false}
      {...props}
    >
      <Icon is={Close} />
    </ActionIcon>
  </DialogClose>
)
