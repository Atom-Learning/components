import { Close } from '@atom-learning/icons'
import * as React from 'react'
import invariant from 'invariant'

import { styled } from '../../stitches'

import { ActionIcon } from '../action-icon'
import { Divider } from '../divider'
import { Flex } from '../flex'
import { Icon } from '../icon/Icon'
import { Stack } from '../stack'
import { Text } from '../text'
import { BulkAction } from './BulkAction'
import { BulkActionsDropdown } from './BulkActionsDropdown'
import { BulkDropdownAction } from './BulkDropdownAction'

const StyledContainer = styled(Flex, {
  minHeight: '56px',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  bg: '$backgroundAccent',
  p: '$2 $4',
  borderRadius: '$0 $0 0 0'
})

type BulkActionsBarProps = {
  label: string
  cancelLabel: string
  onCancel: () => void
} & React.ComponentProps<typeof StyledContainer>

export const BulkActionsBar: React.FC<BulkActionsBarProps> & {
  Action: typeof BulkAction,
  Dropdown: typeof BulkActionsDropdown,
  DropdownAction: typeof BulkDropdownAction
} = ({ label, cancelLabel, onCancel, children, ...rest }) => {
  invariant(
    React.Children.count(children) > 0,
    `At least one child is required for ${BulkActionsBar.displayName}`
  )

  return (
    <StyledContainer {...rest}>
      <Text size="sm">{label}</Text>
      <Stack
        css={{
          '& :first-child': {
            flexWrap: 'nowrap'
          }
        }}
      >
        {children}
        <Divider orientation="vertical" />
        <BulkActionsBar.Action text={cancelLabel} onClick={onCancel} />
        <ActionIcon
          onClick={onCancel}
          label="close"
          css={{
            '@media (min-width: 640px)': {
              display: 'none'
            }
          }}
        >
          <Icon is={Close} />
        </ActionIcon>
      </Stack>
    </StyledContainer>
  )
}

BulkActionsBar.displayName = 'BulkActionsBar'
BulkActionsBar.Action = BulkAction
BulkActionsBar.Dropdown = BulkActionsDropdown
BulkActionsBar.DropdownAction = BulkDropdownAction
