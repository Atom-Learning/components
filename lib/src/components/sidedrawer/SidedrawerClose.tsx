import { Close as DialogClose } from '@radix-ui/react-dialog'
import { Close } from '@atom-learning/icons'
import React from 'react'

import { Icon } from '../icon/Icon'
import { ActionIcon } from '../action-icon/ActionIcon'

export const SidedrawerClose: React.FC = () => (
  <DialogClose asChild>
    <ActionIcon theme="neutral" appearance="simple" label="close" size="md">
      <Icon is={Close} />
    </ActionIcon>
  </DialogClose>
)
