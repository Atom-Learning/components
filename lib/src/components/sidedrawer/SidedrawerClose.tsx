import { Close as DialogClose } from '@radix-ui/react-dialog'
import { Close } from '@atom-learning/icons'
import React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon/Icon'

const StyledIcon = styled(Icon, {
  color: '$tonal300',
  cursor: 'pointer',
  margin: '$3',
  '&:hover': {
    color: '$tonal500'
  }
})

export const SidedrawerClose: React.FC = () => (
  <DialogClose asChild>
    <StyledIcon aria-label="close" is={Close} />
  </DialogClose>
)
