import { Close } from '@atom-learning/icons'
import React from 'react'
import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'

interface SidedrawerCloseProps {
  onClose: () => void
}

export const SidedrawerClose: React.FC<SidedrawerCloseProps> = ({
  onClose
}) => (
  <ActionIcon appearance="simple" size="md" onClick={onClose}>
    <Icon
      is={Close}
      css={{
        color: '$tonal300'
      }}
    />
  </ActionIcon>
)
