import { CalendarEvent } from '@atom-learning/icons'
import type { Props as DayzedInterface } from 'dayzed'
import * as React from 'react'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Box } from '../box/Box'
import { Calendar, CalendarTranslationProps } from '../calendar/Calendar'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'
import { Popover } from '../popover/Popover'
import { DEFAULT_DATE_FORMAT } from './constants'
import { useDate } from './use-date'

export type DateInputProps = DayzedInterface &
  CalendarTranslationProps & {
    initialDate?: Date
    dateFormat?: string
    disabled?: boolean
    size?: 'sm' | 'md'
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
      size = 'md',
      labels = {
        open: 'Open calendar',
        next: 'Next month',
        previous: 'Previous month'
      },
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
          size={size}
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
              label={labels.open}
              size={size === 'sm' ? 'md' : 'lg'}
              theme="neutral"
            >
              <Icon size="sm" is={CalendarEvent} />
            </ActionIcon>
          </Popover.Trigger>
          <Popover.Content
            css={{ pr: '$sizes$2' }}
            side="bottom"
            align="end"
            showCloseButton={false}
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
              labels={labels}
            />
          </Popover.Content>
        </Popover>
      </Box>
    )
  }
)

DateInput.displayName = 'DateInput'
