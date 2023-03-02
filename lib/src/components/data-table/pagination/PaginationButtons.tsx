import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import React from 'react'

import type { CSS } from '~/stitches'

import { ActionIcon } from '../../action-icon'
import { Flex } from '../../flex'
import { Icon } from '../../icon'
import { Select } from '../../select'
import { Text } from '../../text'

export const DirectionButton: React.FC<{
  css?: CSS
  direction: 'next' | 'previous'
  disabled: boolean
  onClick: () => void
}> = ({ direction, ...remainingProps }) => {
  const isNext = direction === 'next'

  return (
    <ActionIcon
      appearance="outline"
      isRounded
      label={isNext ? 'Next page' : 'Previous page'}
      name={isNext ? 'Next page' : 'Previous page'}
      size="md"
      {...remainingProps}
    >
      <Icon is={isNext ? ChevronRight : ChevronLeft} />
    </ActionIcon>
  )
}

export const GotoPageSelect: React.FC<{
  pageIndex: number
  pageCount: number
  gotoPage: (pageNumber: number) => void
  disabled: boolean
}> = ({ gotoPage, pageCount, pageIndex, disabled }) => {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <Select
        value={pageIndex}
        size="sm"
        css={{ mr: '$3' }}
        disabled={disabled}
        onChange={(e) => {
          gotoPage(Number(e.target.value))
        }}
      >
        {Array.from({ length: pageCount }, (z, x) => x).map((i) => {
          return (
            <option key={i} value={i}>
              {i + 1}
            </option>
          )
        })}
      </Select>
      <Text size="sm" css={{ flex: 'none' }}>{`of ${pageCount} ${
        pageCount > 1 ? 'pages' : 'page'
      }`}</Text>
    </Flex>
  )
}
