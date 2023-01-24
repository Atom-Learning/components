import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import type { Props as DayzedInterface } from 'dayzed'
import { useDayzed } from 'dayzed'
import * as React from 'react'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { Text } from '~/components/text'
import { Button } from '~/components/button'
import type { CSS } from '~/stitches'
import { styled } from '~/stitches'

import { monthNamesShort, weekdayNamesShort, DEFAULT_LABELS } from './constants'
import { Day } from './Day'

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '$1 $2'
})

const StyledButton = styled(Button, {
  color: '$tonal600',
  p: '$3',
  width: '$6',
  variants: {
    selected: {
      false: {
        color: '$tonal600 !important',
        fontWeight: '400',
        '&:hover': {
          bg: '$tonal100 !important',
          color: '$tonal600 !important'
        },
        '&[disabled]': { bg: 'white !important' }
      }
    }
  }
})

export type CalendarTranslationProps = {
  monthNames?: string[]
  weekdayNames?: string[]
  labels?: {
    open: string
    next: string
    previous: string
    nextYear: string
    previousYear: string
  }
}

type CalendarProps = DayzedInterface &
  CalendarTranslationProps & {
    css?: CSS
    refDateToday?: React.RefObject<HTMLButtonElement>
    refDateSelected?: React.RefObject<HTMLButtonElement>
    setYear: (date: Date) => Promise<void>
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
  labels = DEFAULT_LABELS,
  date = new Date(),
  minDate,
  maxDate,
  setYear,
  ...remainingProps
}) => {
  const [showYears, setShowYears] = React.useState<boolean>(false)
  const [currentYear, setCurrentYear] = React.useState<number>(
    date?.getFullYear()
  )

  const handleSetYear = (year: number): void => {
    const newDate = date
    newDate.setFullYear(year)
    setYear(newDate)
    setShowYears(false)
  }

  const isAtMinYear = minDate && currentYear - 16 <= minDate.getFullYear()
  const isAtMaxYear = maxDate && currentYear >= maxDate.getFullYear()

  const yearList = Array.from({ length: 16 }, (_, i) => {
    const year = currentYear - i
    if (
      (maxDate && year > maxDate.getFullYear()) ||
      (minDate && year < minDate.getFullYear())
    )
      return 0
    return year
  })

  const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed({
    firstDayOfWeek,
    showOutsideDays: true,
    date,
    minDate,
    maxDate,
    ...remainingProps
  })

  if (!calendars.length) return null

  return (
    <Box
      css={{ position: 'relative', width: 'min-content', mt: '-$1', ...css }}
    >
      <Flex css={{ position: 'absolute', top: 0, right: '-$1' }}>
        <ActionIcon
          label={labels[showYears ? 'previousYear' : 'previous']}
          theme="neutral"
          size="md"
          {...(!showYears && getBackProps({ calendars }))}
          {...(showYears && {
            onClick: () => setCurrentYear(currentYear - 16)
          })}
          disabled={showYears && isAtMinYear}
        >
          <Icon is={ChevronLeft} />
        </ActionIcon>
        <ActionIcon
          label={labels[showYears ? 'nextYear' : 'next']}
          theme="neutral"
          size="md"
          {...(!showYears && getForwardProps({ calendars }))}
          {...(showYears && {
            onClick: () => setCurrentYear(currentYear + 16)
          })}
          disabled={showYears && isAtMaxYear}
        >
          <Icon is={ChevronRight} />
        </ActionIcon>
      </Flex>
      {showYears && (
        <Grid
          css={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            pt: '$7',
            direction: 'rtl',
            gridGap: '$3 $1'
          }}
        >
          {yearList.map((year, i) => {
            const isCurrentYear = year === date.getFullYear()
            if (!year)
              return <Box key={i} css={{ width: '$6', height: '$4' }} />

            return (
              <StyledButton
                key={`${year}${i}`}
                theme={isCurrentYear ? 'primary' : 'neutral'}
                onClick={() => handleSetYear(year)}
                selected={isCurrentYear}
              >
                {year}
              </StyledButton>
            )
          })}
        </Grid>
      )}
      {!showYears &&
        calendars.map(({ month, year, weeks }) => (
          <Box key={`${month}${year}`}>
            <Flex css={{ height: '$4', alignItems: 'center', mb: '$4' }}>
              <Button
                theme="neutral"
                css={{ px: '0', color: '$tonal600' }}
                onClick={() => setShowYears(true)}
              >
                {monthNames[month]} {year}
              </Button>
            </Flex>
            <Grid css={{ mb: '$3' }}>
              {offsetWeekdayNames(weekdayNames, firstDayOfWeek).map(
                (weekday) => (
                  <Text
                    as="span"
                    size="sm"
                    key={`${month}${year}${weekday}`}
                    css={{ fontWeight: 600, textAlign: 'center' }}
                  >
                    {weekday}
                  </Text>
                )
              )}
            </Grid>
            <Grid>
              {weeks.map((week, weekIndex) =>
                week.map((dateObj, index) => {
                  const key = `${month}${year}${weekIndex}${index}`

                  if (!dateObj) return <div key={key} />

                  const { date, selected, today, prevMonth, nextMonth } =
                    dateObj

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
                      type="button"
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
