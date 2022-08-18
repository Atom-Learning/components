import * as React from 'react'
import { styled } from '~/stitches'
import { Chip } from '~/components/chip'
import { DismissibleGroup } from '~/components/dismissible-group'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { Close } from '@atom-learning/icons'

const StyledChipDismissibleGroupItem = styled(Chip.Root, { px: '$1' })

export type TChipDismissibleGroupItem = React.ComponentProps<
  typeof DismissibleGroup.Item
> &
  React.ComponentProps<typeof StyledChipDismissibleGroupItem>

export const ChipDismissibleGroupItem: React.FC<TChipDismissibleGroupItem> = ({
  size = 'md',
  children,
  ...rest
}) => {
  return (
    <DismissibleGroup.Item asChild {...rest}>
      <StyledChipDismissibleGroupItem size={size}>
        <Chip.Content>{children}</Chip.Content>
        <DismissibleGroup.Trigger asChild>
          <ActionIcon
            label="Dismiss" // size css will be replaced with size prop when action icon size fixes are done
            css={{
              color: '$tonal200',
              size: size === 'sm' ? '$2' : '$3'
            }}
          >
            <Icon is={Close} />
          </ActionIcon>
        </DismissibleGroup.Trigger>
      </StyledChipDismissibleGroupItem>
    </DismissibleGroup.Item>
  )
}
