import * as React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Ok } from '@atom-learning/icons'

import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'
import { Icon } from '~/components/icon'
import { Chip } from '~/components/chip'

const StyledToggleIcon = styled(Icon, {
  display: 'none'
})

const StyledToggleGroupItem = styled(Chip.Root, {
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
    [`& ${StyledToggleIcon}`]: {
      display: 'block'
    }
  }
})

type TToggleGroupItem = React.ComponentProps<typeof ToggleGroup.Item> &
  React.ComponentProps<typeof StyledToggleGroupItem>

export const ToggleGroupItem: React.FC<TToggleGroupItem> = ({
  size = 'md',
  children,
  ...rest
}) => {
  return (
    <ToggleGroup.Item {...rest} asChild>
      <StyledToggleGroupItem asWorkaround="button">
        <StyledToggleIcon is={Ok} size={size === 'lg' ? 'md' : 'sm'} />
        <Chip.Content>{children}</Chip.Content>
      </StyledToggleGroupItem>
    </ToggleGroup.Item>
  )
}
