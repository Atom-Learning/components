import * as React from 'react'
import { styled } from '~/stitches'
import { Chip } from '~/components/chip'
import { DismissibleGroup } from '~/components/dismissible-group'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { Close } from '@atom-learning/icons'

const StyledChipDismissibleGroupItem = styled(Chip, { px: '$1' })

export type TChipDismissibleGroupItem = React.ComponentProps<
  typeof DismissibleGroup.Item
> &
  React.ComponentProps<typeof StyledChipDismissibleGroupItem> & {
    dismissActionLabel: string
  }

export const ChipDismissibleGroupItem: React.FC<TChipDismissibleGroupItem> = ({
  size = 'md',
  children,
  dismissActionLabel = 'Dismiss',
  ...rest
}) => {
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
