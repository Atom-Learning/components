import { Close } from '@atom-learning/icons'
import React, { useEffect } from 'react'

import { ActionIcon } from '../action-icon'
import { Dismissible } from '../dismissible'
import { Icon } from '../icon'
import { useSectionMessageContext } from './SectionMessageContext'

export const SectionMessageDismiss = ({
  label = 'Dismiss',
  css,
  ...rest
}: React.ComponentProps<typeof ActionIcon>): JSX.Element => {
  const { setHasDismiss } = useSectionMessageContext()

  useEffect(() => {
    setHasDismiss(true)
    return () => setHasDismiss(false)
  }, [setHasDismiss])

  return (
    <Dismissible.Trigger asChild>
      <ActionIcon
        label={label}
        css={{
          m: 'auto',
          position: 'absolute',
          top: '$2',
          right: '$2',
          ...css
        }}
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
