import { Close as DialogClose } from '@radix-ui/react-dialog'
import { Close } from '@atom-learning/icons'
import React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon/Icon'
import { ActionIcon } from '../action-icon/ActionIcon'

const StyledActionIcon = styled(ActionIcon, {
  '> svg': {
    color: '$tonal300',
    '&:hover': {
      color: '$tonal500'
    }
  }
})

export const SidedrawerClose: React.FC = () => (
  <DialogClose asChild>
    <StyledActionIcon appearance="simple" label="close" size="md">
      <Icon is={Close} />
    </StyledActionIcon>
  </DialogClose>
)
