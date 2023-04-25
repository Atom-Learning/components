import { Close } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon } from '../action-icon'
import { Dismissible } from '../dismissible'
import { Icon } from '../icon'

export const SectionMessageClose = ({
  label = 'Dismiss',
  ...rest
}: React.ComponentProps<typeof ActionIcon>): JSX.Element => {
  return (
    <Dismissible.Trigger asChild>
      <ActionIcon
        label={label}
        css={{ ml: 'auto', mt: '-$2', mr: '-$2', mb: '-$2', pl: '$4' }}
        size="sm"
        appearance="simple"
        theme="neutral"
        {...rest}
      >
        <Icon is={Close} />
      </ActionIcon>
    </Dismissible.Trigger>
  )
}
