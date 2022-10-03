import type { CSS } from '~/stitches'

import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import React from 'react'
import { Flex } from '../../flex'
import { Select } from '../../select'
import { Text } from '../../text'
import { ActionIcon } from '../../action-icon'
import { Icon } from '../../icon'
import { Tooltip } from '../../tooltip'

export const DirectionButton: React.FC<{
  css?: CSS
  direction: 'next' | 'previous'
  disabled: boolean
  onClick: () => void
}> = ({ direction, ...remainingProps }) => {
  const isNext = direction === 'next'

  return (
    <TooltipActionIcon
      appearance="outline"
      icon={isNext ? ChevronRight : ChevronLeft}
      isRounded
      label={isNext ? 'Next page' : 'Previous page'}
      name={isNext ? 'Next page' : 'Previous page'}
      size="md"
      {...remainingProps}
    />
  )
}

export const GotoPageSelect: React.FC<{
  pageIndex: number
  pageCount: number
  gotoPage: (pageNumber: number) => void
}> = ({ gotoPage, pageCount, pageIndex }) => {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <Select
        value={pageIndex}
        size="sm"
        css={{ mr: '$3' }}
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

type TooltipActionIconProps = React.ComponentProps<typeof ActionIcon> &
  React.ComponentProps<typeof Icon> & {
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    iconSize?: 'sm' | 'md' | 'lg'
  }
export const TooltipActionIcon: React.FC<
  Omit<TooltipActionIconProps, 'children' | 'is'>
> = ({ icon, label, ...rest }) => {
  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <ActionIcon label={label} {...rest}>
          <Icon is={icon} />
        </ActionIcon>
      </Tooltip.Trigger>
      <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip>
  )
}
