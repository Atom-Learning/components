import { EllypsisVertical } from '@atom-learning/icons'
import React from 'react'

import { CSS, styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { DropdownMenu } from '../dropdown-menu'
import { Flex } from '../flex'
import { Icon } from '../icon'

type ActionsOverflowMenuProps = Omit<
  React.ComponentProps<typeof ActionIcon>,
  'children'
>

const StyledActionIcon = styled(ActionIcon, {
  borderRadius: '$0',
  '&[data-state="open"]': {
    background: '$primaryLight'
  },
  '&:hover': {
    background: '$primaryLight'
  },
  '& > svg': { color: '$tonal400' }
})

export const ActionsOverflowMenu: React.FC<ActionsOverflowMenuProps> = ({
  children,
  label = 'Click to expand'
}) => {
  return (
    <Flex css={{ alignItems: 'center', mr: '-$2' }}>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <AppBarActionIcon icon={EllypsisVertical} label={label} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={16}>{children}</DropdownMenu.Content>
      </DropdownMenu>
    </Flex>
  )
}

export const Actions: React.FC<{ css?: CSS }> = ({ children, css }) => {
  return (
    <Flex css={{ gap: '$2', alignItems: 'center', ...css }}>{children}</Flex>
  )
}

type AppBarActionIconProps = Omit<
  React.ComponentProps<typeof StyledActionIcon>,
  'size' | 'children'
> & { icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }

export const AppBarActionIcon: React.ForwardRefExoticComponent<AppBarActionIconProps> =
  React.forwardRef(({ icon, ...rest }, forwardedRef) => {
    return (
      <StyledActionIcon size="md" ref={forwardedRef} {...rest}>
        <Icon is={icon} />
      </StyledActionIcon>
    )
  })
