import { Close as DialogClose } from '@radix-ui/react-dialog'
import { Close } from '@atom-learning/icons'
import React from 'react'

import { Icon } from '../icon/Icon'
import { ActionIcon } from '../action-icon/ActionIcon'

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
