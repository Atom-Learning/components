import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled } from '~/stitches'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'


const StyledCollapsibleTreeItemTriggerIcon = styled(Icon, {
  transition: 'transform 300ms',
  '[data-state="open"] > &': {
    transform: 'rotate(0deg)'
  },
  '[data-state="closed"] > &': {
    transform: 'rotate(-90deg)'
  }
})

const StyledCollapsibleTreeItemTrigger = styled(Trigger, {})

type TCollapsibleTreeItemTriggerProps = React.ComponentProps<typeof ActionIcon>

export const CollapsibleTreeItemTrigger = (props: TCollapsibleTreeItemTriggerProps): JSX.Element => {

  return (
    <StyledCollapsibleTreeItemTrigger asChild>
      <ActionIcon size="sm" {...props}><StyledCollapsibleTreeItemTriggerIcon is={ChevronDown} /></ActionIcon>
    </StyledCollapsibleTreeItemTrigger>
  )
}
