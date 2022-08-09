import * as React from 'react'
import { Close, Ok } from '@atom-learning/icons'

import { Flex } from '../flex'
import { Text } from '../text'
import { Icon } from '../icon'
import { ActionIcon } from '../action-icon'
import { styled } from '~/stitches'

const ChipContainer = styled(Flex, {
  pl: '$2',
  bg: '$primaryLight',
  border: '1px solid $primary',
  borderRadius: '$0',
  alignItems: 'center',
  '& p': {
    color: '$primary'
  },
  '&:hover': {
    bg: 'white',
    border: '1px solid $primaryDark',
    '& p': {
      color: '$primaryDark'
    },
    '& svg': {
      color: '$primaryDark'
    }
  },
  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '2px'
  },
  variants: {
    size: {
      sm: { height: '$2' },
      md: { height: '$3' },
      lg: { height: '$4' }
    },
    mode: {
      filter: {
        cursor: 'pointer',
        pr: '$2'
      },
      input: {
        pr: '$1'
      }
    },
    selected: {
      true: { pr: '$3' },
      false: {}
    },
    disabled: {
      true: {
        opacity: '0.3',
        pointerEvents: 'none'
      }
    }
  },
  compoundVariants: [
    {
      mode: 'filter',
      selected: false,
      css: {
        bg: '$tonal50',
        border: '1px solid $tonal200',
        '& p': { color: '$tonal400' },
        '&:hover': {
          bg: '$tonal100',
          border: '1px solid $tonal400',
          '& p': {
            color: '$tonal600'
          },
          '& svg': {
            color: '$tonal600'
          }
        }
      }
    },
    {
      selected: false,
      mode: 'filter',
      size: 'md',
      css: { px: '$3' }
    },
    {
      selected: false,
      mode: 'filter',
      size: 'lg',
      css: { px: '$3' }
    },
    {
      selected: true,
      mode: 'filter',
      size: 'sm',
      css: { pr: '$2' }
    }
  ]
})

interface ChipProps {
  label: string
  selected?: boolean
  icon?: SVGSVGElement
  onSelectedChange?: (value?: boolean) => void
}

type ChipType = React.ComponentProps<typeof ChipContainer> & ChipProps

export const Chip: React.FC<ChipType> = ({
  mode = 'filter',
  label,
  selected = false,
  size = 'md',
  icon,
  onSelectedChange,
  disabled = false,
  ...remainingProps
}) => {
  const [internalSelected, setInternalSelected] =
    React.useState<boolean>(selected)

  const handleSelectedChange = (value: boolean): void => {
    setInternalSelected(value)
    onSelectedChange?.(value)
  }

  const isFilterMode = mode === 'filter'

  return (
    <ChipContainer
      size={size}
      mode={mode}
      selected={isFilterMode && internalSelected}
      disabled={disabled}
      {...(isFilterMode && {
        onClick: () => handleSelectedChange(!internalSelected)
      })}
      tabIndex={0}
      {...remainingProps}
    >
      {((icon && !isFilterMode) || internalSelected) && (
        <Icon
          aria-label={isFilterMode ? 'SelectedIcon' : 'ChipIcon'}
          is={isFilterMode ? Ok : icon}
          size={size === 'lg' ? 'md' : 'sm'}
          css={{ color: '$primary', mr: '$1' }}
        />
      )}
      <Text size={size === 'lg' ? 'md' : 'sm'}>{label}</Text>
      {!isFilterMode && (
        <ActionIcon
          label="Close"
          // size css will be replaced with size prop when action icon size fixes are done
          css={{
            ml: '$1',
            color: '$tonal200',
            size: size === 'sm' ? '$2' : '$3'
          }}
          disabled={!!disabled}
          onClick={onSelectedChange}
        >
          <Icon is={Close} />
        </ActionIcon>
      )}
    </ChipContainer>
  )
}
