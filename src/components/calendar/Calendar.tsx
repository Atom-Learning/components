import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import type { Props as DayzedInterface } from 'dayzed'
import { useDayzed } from 'dayzed'
import * as React from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Heading } from '~/components/heading'
import { Icon } from '~/components/icon'
import { Text } from '~/components/text'
import type { CSS } from '~/stitches'
import { styled } from '~/stitches'

import { monthNamesShort, weekdayNamesShort } from './constants'

const Day = styled('button', {
  bg: 'transparent',
  border: 'none',
  borderRadius: '$0',
  color: '$tonal900',
  cursor: 'pointer',
  fontFamily: '$body',
  fontSize: '$sm',
  height: '$3',
  transition: 'background-color 75ms',
  '&:hover': {
    bg: '$tonal200'
  },
  '&:focus': {
    outline: '2px solid $tonal200'
  },
  variants: {
    isSelected: {
      true: { bg: '$tonal100' }
    },
    isToday: {
      true: { border: '2px solid $tonal200' }
    },
    isOutsideMonth: {
      true: { color: '$tonal400' }
    }
  }
})

type CalendarProps = DayzedInterface & {
  css?: CSS
}

export const Calendar: React.FC<CalendarProps> = ({
  css,
  ...remainingProps
}) => {
  const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed(
    remainingProps
  )

  if (!calendars.length) return null

  return (
    <Box css={{ position: 'relative', width: 320, ...(css as any) }}>
      <Flex
        css={{
          justifyContent: 'space-between',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0
        }}
      >
        <ActionIcon {...getBackProps({ calendars })} label="Previous month">
          <Icon is={ChevronLeft} />
        </ActionIcon>
        <ActionIcon {...getForwardProps({ calendars })} label="Next month">
          <Icon is={ChevronRight} />
        </ActionIcon>
      </Flex>
      {calendars.map(({ month, year, weeks }) => (
        <div key={`${month}${year}`}>
          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '$3',
              mb: '$3'
            }}
          >
            <Heading size="xs">
              {monthNamesShort[month]} {year}
            </Heading>
          </Flex>
          <Box css={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {weekdayNamesShort.map((weekday) => (
              <Text
                as="span"
                size="sm"
                key={`${month}${year}${weekday}`}
                css={{ mb: '$3', fontWeight: 600, textAlign: 'center' }}
              >
                {weekday}
              </Text>
            ))}
          </Box>
          <Box css={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {weeks.map((week, weekIndex) =>
              week.map((dateObj, index) => {
                const key = `${month}${year}${weekIndex}${index}`

                if (!dateObj) return <div key={key} />

                const { date, selected, today, prevMonth, nextMonth } = dateObj

                return (
                  <Day
                    isOutsideMonth={prevMonth || nextMonth}
                    isSelected={selected}
                    isToday={today}
                    key={key}
                    {...getDateProps({ dateObj })}
                  >
                    {date.getDate()}
                  </Day>
                )
              })
            )}
          </Box>
        </div>
      ))}
    </Box>
  )
}

Calendar.displayName = 'Calendar'
