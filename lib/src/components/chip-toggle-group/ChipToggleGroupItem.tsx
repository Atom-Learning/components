import * as React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Ok } from '@atom-learning/icons'

import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'
import { Icon } from '~/components/icon'
import { Chip } from '~/components/chip'

const StyledChipToggleIcon = styled(Icon, {
  display: 'none'
})

const StyledChipToggleGroupItem = styled(Chip.Root, {
  '&:not([disabled])': {
    cursor: 'pointer',
    '&:hover': {
      bg: '$tonal100',
      color: '$tonal600',
      borderColor: 'currentColor'
    },
    '&:focus-visible': {
      ...focusVisibleStyleBlock()
    },
    '&[data-state="on"]': {
      '&:hover': {
        bg: '$white',
        color: '$primaryDark'
      }
    }
  },
  '&[data-state="off"]': {
    color: '$tonal400',
    bg: '$tonal50',
    borderColor: '$tonal200'
  },
  '&[data-state="on"]': {
    [`& ${StyledChipToggleIcon}`]: {
      display: 'block'
    }
  }
})

type TChipToggleGroupItem = React.ComponentProps<typeof ToggleGroup.Item> &
  React.ComponentProps<typeof StyledChipToggleGroupItem>

export const ChipToggleGroupItem: React.FC<TChipToggleGroupItem> = ({
  size = 'md',
  children,
  ...rest
}) => {
  return (
    <ToggleGroup.Item {...rest} asChild>
      <StyledChipToggleGroupItem asWorkaround="button">
        <StyledChipToggleIcon is={Ok} size={size === 'lg' ? 'md' : 'sm'} />
        <Chip.Content>{children}</Chip.Content>
      </StyledChipToggleGroupItem>
    </ToggleGroup.Item>
  )
}
