import React from 'react'
import { ActionIcon as BaseActionIcon } from '../action-icon'
import { DropdownMenu } from '../dropdown-menu'
import { Flex } from '../flex'
import { Icon } from '../icon'
import { EllypsisVertical } from '@atom-learning/icons'

import { styled, CSS } from '~/stitches'

type ActionsOverflowMenuProps = Omit<
  React.ComponentProps<typeof BaseActionIcon>,
  'children'
>

const StyledActionIcon = styled(BaseActionIcon, {
  borderRadius: '4px',
  '&[data-state="open"]': {
    background: '$primaryLight'
  },
  '&:hover': {
    background: '$primaryLight'
  },
  '& > svg': { color: '$tonal400' }
})

const ActionsOverflowMenu: React.FC<ActionsOverflowMenuProps> = ({
  children,
  label = 'Click to expand'
}) => {
  return (
    <Flex css={{ alignItems: 'center', mr: '-$2' }}>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <ActionIcon icon={EllypsisVertical} label={label} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={16}>{children}</DropdownMenu.Content>
      </DropdownMenu>
    </Flex>
  )
}

const Actions: React.FC<{ css?: CSS }> = ({ children, css }) => {
  return (
    <Flex css={{ gap: '$1', alignItems: 'center', ...css }}>{children}</Flex>
  )
}

type ActionIconProps = Omit<
  React.ComponentProps<typeof StyledActionIcon>,
  'size' | 'children'
> & { icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }

const ActionIcon: React.ForwardRefExoticComponent<ActionIconProps> =
  React.forwardRef(({ icon, label, ...rest }, forwardedRef) => {
    return (
      <StyledActionIcon label={label} size="lg" ref={forwardedRef} {...rest}>
        <Icon is={icon} />
      </StyledActionIcon>
    )
  })

export { Actions, ActionIcon, ActionsOverflowMenu }
