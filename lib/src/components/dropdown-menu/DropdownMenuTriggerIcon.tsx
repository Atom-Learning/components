import React from 'react'
import { ChevronDown } from '@atom-learning/icons'
import { DropdownMenuContext } from './DropdownMenu.context'

import { styled } from '~/stitches'

import { Icon } from '../icon'

export const StyledDropdownMenuTriggerIcon = styled(Icon, {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform .2s ease'
  },
  variants: {
    open: {
      true: { transform: 'rotate(-180deg)' },
      false: { transform: 'rotate(0deg)' }
    }
  }
})

export const DropdownMenuTriggerIcon = (props) => {
  const { isOpen } = React.useContext(DropdownMenuContext)
  return <StyledDropdownMenuTriggerIcon is={ChevronDown} size="md" open={isOpen} {...props} />

}
