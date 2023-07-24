import { Ok } from '@atom-learning/icons'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

import { Chip } from '~/components/chip'
import { Icon } from '~/components/icon'
import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'

const StyledChipToggleIcon = styled(Icon, {
  display: 'none'
})

const StyledChipToggleGroupItem = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Chip, {
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
      <StyledChipToggleGroupItem as="button">
        <StyledChipToggleIcon is={Ok} size={size === 'lg' ? 'md' : 'sm'} />
        <Chip.Content>{children}</Chip.Content>
      </StyledChipToggleGroupItem>
    </ToggleGroup.Item>
  )
}
