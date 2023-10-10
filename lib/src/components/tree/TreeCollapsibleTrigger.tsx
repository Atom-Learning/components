import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import React from 'react'

import { Icon, StyledIcon } from '~/components/icon'
import { ActionIcon } from '~/components/action-icon'
import { styled } from '~/stitches'

import { TreeCollapsibleContext } from './TreeCollapsible'
import { TreeItemContent } from './TreeItemContent'

const StyledTreeCollapsibleTrigger = styled(Trigger, {
  position: 'absolute',
  left: 0,
  top: 0
})

const StyledActionIcon = styled(ActionIcon, {
  [`& ${StyledIcon}`]: {
    transition: 'transform 300ms',
    transform: 'rotate(-90deg)'
  },
  [`&[data-state="open"] ${StyledIcon}`]: {
    transform: 'rotate(0deg)'
  }
})

type TNavigationMenuCollapsibleTriggerProps = React.ComponentProps<
  typeof TreeItemContent
>

export const TreeCollapsibleTrigger = ({
  children,
  ...rest
}: TNavigationMenuCollapsibleTriggerProps) => {
  const { setTriggerRef } = React.useContext(
    TreeCollapsibleContext
  )

  return (
    <TreeItemContent {...rest}>
      <StyledTreeCollapsibleTrigger asChild>
        <StyledActionIcon size="sm" ref={setTriggerRef} label="ey" theme="neutral"><Icon is={ChevronDown} /></StyledActionIcon>
      </StyledTreeCollapsibleTrigger>
      {children}
    </TreeItemContent>
  )
}
