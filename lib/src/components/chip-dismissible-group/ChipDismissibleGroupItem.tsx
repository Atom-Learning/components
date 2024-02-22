import { Close } from '@atom-learning/icons'
import * as React from 'react'

import { Chip } from '~/components/chip'
import { DismissibleGroup } from '~/components/dismissible-group'
import { styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'

const StyledChipDismissibleGroupItem = styled(Chip, { px: '$1' })

export type TChipDismissibleGroupItem = React.ComponentProps<
  typeof DismissibleGroup.Item
> &
  React.ComponentProps<typeof StyledChipDismissibleGroupItem> & {
    dismissActionLabel: string
  }

export const ChipDismissibleGroupItem = ({
  size = 'md',
  children,
  dismissActionLabel = 'Dismiss',
  ...rest
}: TChipDismissibleGroupItem) => {
  return (
    <DismissibleGroup.Item asChild {...rest}>
      <StyledChipDismissibleGroupItem size={size}>
        <Chip.Content>{children}</Chip.Content>
        <DismissibleGroup.Trigger asChild>
          <ActionIcon
            label={dismissActionLabel}
            css={{ color: '$tonal200' }}
            size={size === 'sm' ? 'xs' : 'sm'}
          >
            <Icon is={Close} />
          </ActionIcon>
        </DismissibleGroup.Trigger>
      </StyledChipDismissibleGroupItem>
    </DismissibleGroup.Item>
  )
}
