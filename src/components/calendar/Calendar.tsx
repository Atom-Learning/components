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
import { Day } from './Day'

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '$1 $2'
})

export type CalendarTranslationProps = {
  monthNames?: string[]
  weekdayNames?: string[]
  labels?: { open: string; next: string; previous: string }
}

type CalendarProps = DayzedInterface &
  CalendarTranslationProps & {
    css?: CSS
    refDateToday?: React.RefObject<HTMLButtonElement>
    refDateSelected?: React.RefObject<HTMLButtonElement>
  }

const offsetWeekdayNames = (
  weekdayNames: string[],
  firstDayOfWeek: number
): string[] => {
  const start = weekdayNames.slice(0, firstDayOfWeek)
  const end = weekdayNames.slice(firstDayOfWeek)
  return end.concat(start)
}

export const Calendar: React.FC<CalendarProps> = ({
  css,
  refDateSelected,
  refDateToday,
  firstDayOfWeek = 0,
  monthNames = monthNamesShort,
  weekdayNames = weekdayNamesShort,
  labels = { next: 'Next month', previous: 'Previous month' },
  ...remainingProps
}) => {
  const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed({
    firstDayOfWeek,
    showOutsideDays: true,
    ...remainingProps
  })

  if (!calendars.length) return null

  return (
    <Box
      css={{ position: 'relative', width: 'min-content', mt: '-$1', ...css }}
    >
      <Flex css={{ position: 'absolute', top: 0, right: '-$1' }}>
        <ActionIcon
          label={labels.previous}
          theme="neutral"
          size="md"
          {...getBackProps({ calendars })}
        >
          <Icon is={ChevronLeft} />
        </ActionIcon>
        <ActionIcon
          label={labels.next}
          theme="neutral"
          size="md"
          {...getForwardProps({ calendars })}
        >
          <Icon is={ChevronRight} />
        </ActionIcon>
      </Flex>
      {calendars.map(({ month, year, weeks }) => (
        <Box key={`${month}${year}`}>
          <Flex css={{ height: '$4', alignItems: 'center', mb: '$4' }}>
            <Heading size="xs">
              {monthNames[month]} {year}
            </Heading>
          </Flex>
          <Grid css={{ mb: '$3' }}>
            {offsetWeekdayNames(weekdayNames, firstDayOfWeek).map((weekday) => (
              <Text
                as="span"
                size="sm"
                key={`${month}${year}${weekday}`}
                css={{ fontWeight: 600, textAlign: 'center' }}
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
                    ref={
                      selected ? refDateSelected : today ? refDateToday : null
                    }
                    {...getDateProps({ dateObj })}
                  >
                    {date.getDate()}
                  </Day>
                )
              })
            )}
          </Grid>
        </Box>
      ))}
    </Box>
  )
}

Calendar.displayName = 'Calendar'
