import { Close } from '@atom-learning/icons'
import { Close as DialogClose } from '@radix-ui/react-dialog'
import React from 'react'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'

export const SidedrawerClose: React.FC<
  React.ComponentProps<typeof ActionIcon>
> = ({
  appearance = 'simple',
  label = 'close',
  size = 'md',
  theme = 'neutral',

  ...remainingProps
}) => (
  <DialogClose asChild>
    <ActionIcon
      theme={theme}
      appearance={appearance}
      size={size}
      label={label}
      {...remainingProps}
    >
      <Icon is={Close} />
    </ActionIcon>
  </DialogClose>
)
