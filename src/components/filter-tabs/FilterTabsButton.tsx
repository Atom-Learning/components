import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import React from 'react'

import { styled } from '~/stitches'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'

const FilterTabsIconContainer = styled(ActionIcon, {
  bg: 'rgba(255, 255, 255, 0.6) !important',
  '&:hover': { bg: 'rgba(255, 255, 255, 0.8) !important' },
  position: 'absolute',
  zIndex: '2',
  top: '0'
})

export enum Side {
  LEFT = 'left',
  RIGHT = 'right'
}

type FilterTabsButtonProps = {
  side: Side
  visible: boolean
  onClick: (direction: Side) => void
  disabled?: boolean
}

export const FilterTabsButton: React.FC<FilterTabsButtonProps> = ({
  side,
  visible,
  onClick,
  disabled = false
}) => {
  if (!visible) return null

  return (
    <FilterTabsIconContainer
      onClick={() => onClick(side)}
      size="xl"
      label={`scroll ${side}`}
      css={{ [`${side}`]: '0' }}
      disabled={disabled}
    >
      <Icon is={side === Side.LEFT ? ChevronLeft : ChevronRight} />
    </FilterTabsIconContainer>
  )
}
