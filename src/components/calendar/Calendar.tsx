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

type CalendarProps = DayzedInterface & {
  css?: CSS
  refDateToday?: React.RefObject<HTMLButtonElement>
  refDateSelected?: React.RefObject<HTMLButtonElement>
}

export const Calendar: React.FC<CalendarProps> = ({
  css,
  refDateSelected,
  refDateToday,
  ...remainingProps
}) => {
  const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed({
    firstDayOfWeek: 1,
    showOutsideDays: true,
    ...remainingProps
  })

  if (!calendars.length) return null

  return (
    <Box css={{ position: 'relative', width: 'min-content', ...css }}>
      {calendars.map(({ month, year, weeks }) => (
        <div key={`${month}${year}`}>
          <Flex css={{ alignItems: 'center', mb: '$4', mt: '-$1' }}>
            <Heading size="xs">
              {monthNamesShort[month]} {year}
            </Heading>
            <ActionIcon
              label="Previous month"
              theme="neutral"
              size="lg"
              css={{ ml: 'auto' }}
              {...getBackProps({ calendars })}
            >
              <Icon is={ChevronLeft} />
            </ActionIcon>
            <ActionIcon
              label="Next month"
              theme="neutral"
              size="lg"
              css={{ mr: '-$1' }}
              {...getForwardProps({ calendars })}
            >
              <Icon is={ChevronRight} />
            </ActionIcon>
          </Flex>
          <Grid css={{ mb: '$3' }}>
            {weekdayNamesShort.map((weekday) => (
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
        </div>
      ))}
    </Box>
  )
}

Calendar.displayName = 'Calendar'
