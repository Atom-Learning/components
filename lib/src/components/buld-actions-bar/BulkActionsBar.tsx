import { Close, Ellypsis } from '@atom-learning/icons'
import * as React from 'react'
import invariant from 'invariant'

import { styled } from '../../stitches'

import { ActionIcon } from '../action-icon'
import { Divider } from '../divider'
import { DropdownMenu } from '../dropdown-menu'
import { Flex } from '../flex'
import { Icon } from '../icon/Icon'
import { Stack } from '../stack'
import { Text } from '../text'
import { BulkAction } from './BulkAction'
import { Box } from '../box'

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
  Action: typeof BulkAction
} = ({ label, cancelLabel, onCancel, children, ...rest }) => {
  const mainActions = []
  const otherActions = []

  invariant(
    React.Children.count(children) > 0,
    `At least one child is required for ${BulkActionsBar.displayName}`
  )

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      throw new Error('Ivalid child element')
    }

    invariant(
      child.type === BulkAction,
      `Children of type ${child?.type.displayName || child?.type} are not permitted. Only an ${BulkAction.displayName} component is allowed in ${BulkActionsBar.displayName}`
    )

    if (child.props.isMain) {
      mainActions.push(child)
    } else {
      otherActions.push(child)
    }
  })

  const renderLargeScreenOptions = () => {
    return otherActions.length ? (
      <Box
        css={{
          '@media (max-width: 640px)': {
            display: 'none'
          }
        }}
      >
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <ActionIcon label="other_actions_dropdown">
              <Icon is={Ellypsis} />
            </ActionIcon>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>{otherActions}</DropdownMenu.Content>
        </DropdownMenu>
      </Box>
    ) : null
  }

  const renderSmallScreenOptions = () => {
    return otherActions.length || mainActions.length ? (
      <Box
        css={{
          '@media (min-width: 640px)': {
            display: 'none'
          }
        }}
      >
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <ActionIcon label="all_actions_dropdown">
              <Icon is={Ellypsis} />
            </ActionIcon>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {mainActions.map((action, index) =>
              React.cloneElement(action, {
                isMain: false,
                key: `mainAction_${index}`
              })
            )}
            {otherActions}
          </DropdownMenu.Content>
        </DropdownMenu>
      </Box>
    ) : null
  }

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
        {mainActions}
        {renderLargeScreenOptions()}
        {renderSmallScreenOptions()}
        <Divider orientation="vertical" />
        <BulkActionsBar.Action text={cancelLabel} onClick={onCancel} isMain />
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
