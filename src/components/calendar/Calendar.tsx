import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import type { Props as DayzedInterface } from 'dayzed'
import { useDayzed } from 'dayzed'
import * as React from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Heading } from '~/components/heading'
import { Icon } from '~/components/icon'
import { Stack } from '~/components/stack'
import { Text } from '~/components/text'
import type { CSS } from '~/stitches'
import { styled } from '~/stitches'

import { monthNamesShort, weekdayNamesShort } from './constants'

const Day = styled('button', {
  bg: '$$hello',
  border: 'none',
  borderRadius: '$round',
  color: '$tonal900',
  cursor: 'pointer',
  fontFamily: '$body',
  fontSize: '$sm',
  size: '$3',
  p: 0,
  transition: 'background-color 75ms',
  '&:hover': {
    bg: '$tonal200'
  },
  '&:focus': {
    outline: '2px solid $primary'
  },
  variants: {
    isSelected: {
      true: {
        bg: '$primary',
        color: 'white',
        '&:hover': { bg: '$primary' }
      }
    },
    isToday: {
      true: { outline: '2px solid $tonal200' }
    },
    isOutsideMonth: {
      true: { color: '$tonal400' }
    }
  }
})

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '$2'
})

type CalendarProps = DayzedInterface & {
  css?: CSS
}

export const Calendar: React.FC<CalendarProps> = ({
  css,
  ...remainingProps
}) => {
  const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed({
    showOutsideDays: true,
    ...remainingProps
  })

  if (!calendars.length) return null

  return (
    <Box css={{ position: 'relative', width: 'min-content', ...(css as any) }}>
      {calendars.map(({ month, year, weeks }) => (
        <div key={`${month}${year}`}>
          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'space-between',
              pl: '$1',
              mb: '$4'
            }}
          >
            <Heading size="xs">
              {monthNamesShort[month]} {year}
            </Heading>
            <Stack gap="2">
              <ActionIcon
                {...getBackProps({ calendars })}
                label="Previous month"
                theme="neutral"
              >
                <Icon is={ChevronLeft} />
              </ActionIcon>
              <ActionIcon
                {...getForwardProps({ calendars })}
                label="Next month"
                theme="neutral"
              >
                <Icon is={ChevronRight} />
              </ActionIcon>
            </Stack>
          </Flex>
          <Grid>
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
          </Grid>
          <Grid>
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
          </Grid>
        </div>
      ))}
    </Box>
  )
}

Calendar.displayName = 'Calendar'
