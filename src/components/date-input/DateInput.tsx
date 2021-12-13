import { CalendarEvent } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Box } from '../box/Box'
import { Calendar, CalendarTranslationProps } from '../calendar/Calendar'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'
import { Popover } from '../popover/Popover'
import { DEFAULT_DATE_FORMAT } from './constants'
import { useDate } from './use-date'
import type { Props as DayzedInterface } from 'dayzed'

export type DateInputProps = DayzedInterface &
  CalendarTranslationProps & {
    initialDate?: Date
    dateFormat?: string
    disabled?: boolean
  }

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      initialDate,
      dateFormat = DEFAULT_DATE_FORMAT,
      firstDayOfWeek = 1,
      disabled,
      monthNames,
      weekdayNames,
      ...remainingProps
    },
    ref
  ) => {
    const { date, dateString, setDate } = useDate(initialDate, dateFormat)

    const [calendarOpen, setCalendarOpen] = React.useState(false)

    const refDateToday = React.useRef<HTMLButtonElement>(null)
    const refDateSelected = React.useRef<HTMLButtonElement>(null)

    return (
      <Box css={{ position: 'relative' }}>
        <Input
          name="date"
          disabled={disabled}
          {...remainingProps}
          onChange={(event) => setDate(event.target.value, true)}
          value={dateString}
          ref={ref}
        />
        <Popover modal open={calendarOpen} onOpenChange={setCalendarOpen}>
          <Popover.Trigger asChild>
            <ActionIcon
              css={{ position: 'absolute', top: 0, right: 0 }}
              disabled={disabled}
              label="Open calendar"
              size="lg"
              theme="neutral"
            >
              <Icon size="sm" is={CalendarEvent} />
            </ActionIcon>
          </Popover.Trigger>
          <Popover.Content
            side="bottom"
            align="end"
            onOpenAutoFocus={(e) => {
              e.preventDefault()
              if (date) {
                refDateSelected.current?.focus()
              } else {
                refDateToday.current?.focus()
              }
            }}
          >
            <Calendar
              date={date || new Date()}
              selected={date}
              onDateSelected={(date) => {
                setCalendarOpen(false)
                setDate(date.date, false)
              }}
              refDateToday={refDateToday}
              refDateSelected={refDateSelected}
              firstDayOfWeek={firstDayOfWeek}
              monthNames={monthNames}
              weekdayNames={weekdayNames}
            />
          </Popover.Content>
        </Popover>
      </Box>
    )
  }
)

DateInput.displayName = 'DateInput'
