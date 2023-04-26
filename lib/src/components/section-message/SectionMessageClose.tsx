import { Close } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon } from '../action-icon'
import { Box } from '../box'
import { Dismissible } from '../dismissible'
import { Icon } from '../icon'

export const SectionMessageClose = ({
  label = 'Dismiss',
  ...rest
}: React.ComponentProps<typeof ActionIcon>): JSX.Element => {
  return (
    <Dismissible.Trigger asChild>
      <Box css={{ m: 'auto', position: 'absolute', top: '$2', right: '$2' }}>
        <ActionIcon
          label={label}
          css={{}}
          size="sm"
          appearance="simple"
          theme="neutral"
          {...rest}
        >
          <Icon is={Close} />
        </ActionIcon>
      </Box>
    </Dismissible.Trigger>
  )
}
