import { ChevronDown } from '@atom-learning/icons'
import { Trigger } from '@radix-ui/react-collapsible'
import React from 'react'

import { Icon, StyledIcon } from '~/components/icon'
import { ActionIcon } from '~/components/action-icon'
import { styled } from '~/stitches'

import { TreeCollapsibleContext } from './TreeCollapsible'
import { TreeItemContent } from './TreeItemContent'

const StyledTreeCollapsibleTrigger = styled(TreeItemContent, {
  cursor: 'pointer'
})

const StyledActionIcon = styled(ActionIcon, {
  position: 'absolute',
  left: 0,
  top: 0,
  pointerEvents: 'none',
  [`${StyledIcon}`]: {
    transition: 'transform 300ms'
  },
  [`&[data-state="closed"] > ${StyledIcon}`]: {
    transform: 'rotate(-90deg)'
  },
  [`&[data-state="open"] > ${StyledIcon}`]: {
    transform: 'rotate(0deg)'
  }
})

type TNavigationMenuCollapsibleTriggerProps = React.ComponentProps<
  typeof TreeItemContent
> & {
  label: string
}

export const TreeCollapsibleTrigger = ({
  children,
  label,
  ...rest
}: TNavigationMenuCollapsibleTriggerProps) => {
  const { setTriggerRef, triggerRef } = React.useContext(TreeCollapsibleContext)

  return (
    <StyledTreeCollapsibleTrigger
      {...rest}
      onClick={(event) => {
        rest.onClick?.(event)
        triggerRef?.current?.click()
      }}
    >
      <Trigger asChild>
        <StyledActionIcon
          size="sm"
          ref={setTriggerRef}
          label={label}
          theme="neutral"
          hasTooltip={false}
          onClick={(e: PointerEvent) => e.stopPropagation()}
        >
          <Icon is={ChevronDown} />
        </StyledActionIcon>
      </Trigger>
      {children}
    </StyledTreeCollapsibleTrigger>
  )
}
