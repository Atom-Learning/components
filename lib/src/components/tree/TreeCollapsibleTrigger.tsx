import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import React from 'react'

import { Flex } from '~/components/flex'
import { Icon, StyledIcon } from '~/components/icon'
import { ActionIcon } from '~/components/action-icon'
import { styled } from '~/stitches'

import { TreeCollapsibleContext } from './TreeCollapsible'
import { TreeItemContent } from './TreeItemContent'
import { TreeItem } from './TreeItem'

const StyledTreeCollapsibleTrigger = styled(Trigger, {
  position: 'absolute',
  left: 0,
  top: 0,
  transform: 'translateY(-50%)',
  background: 'red'
})

const StyledActionIcon = styled(ActionIcon, {
  [`&[data-state="open"] ${StyledIcon}`]: {
    transition: 'transform 300ms',
    transform: 'rotate(-90deg)',
    '[data-state="open"] > &': {
      transform: 'rotate(0deg)'
    }
  }
})

type TNavigationMenuCollapsibleTriggerProps = React.ComponentProps<
  typeof StyledTreeCollapsibleTrigger
>

export const TreeCollapsibleTrigger = ({
  children,
  ...rest
}: TNavigationMenuCollapsibleTriggerProps) => {
  const { setTriggerRef } = React.useContext(
    TreeCollapsibleContext
  )

  return (
    <Flex align="center" gap={2} {...rest}>
      <StyledTreeCollapsibleTrigger asChild>
        <StyledActionIcon size="sm" ref={setTriggerRef} label="ey"><Icon is={ChevronDown} /></StyledActionIcon>
      </StyledTreeCollapsibleTrigger>
      <TreeItemContent>{children}</TreeItemContent>
    </Flex>

  )
}
