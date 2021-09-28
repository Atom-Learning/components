import { CalendarEvent } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Box } from '../box/Box'
import { Calendar } from '../calendar/Calendar'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'
import { Popover } from '../popover/Popover'
import { useDate } from './use-date'

type DateInputProps = {
  initialDate?: Date
  dateFormat?: string
}

export const DateInput: React.FC<DateInputProps> = ({
  initialDate,
  dateFormat,
  ...remainingProps
}) => {
  const { date, dateString, setDate } = useDate(initialDate, dateFormat)
  const [calendarOpen, setCalendarOpen] = React.useState(false)

  return (
    <Box css={{ position: 'relative' }}>
      <Input
        name="date"
        onChange={(event) => setDate(event.target.value, true)}
        value={dateString}
        {...remainingProps}
      />
      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <Popover.Trigger>
          <ActionIcon
            size="lg"
            css={{ position: 'absolute', top: 0, right: 0 }}
            label="Open calendar"
          >
            <Icon size="sm" is={CalendarEvent} />
          </ActionIcon>
        </Popover.Trigger>
        <Popover.Content side="bottom" align="end">
          <Calendar
            date={date || new Date()}
            selected={date}
            onDateSelected={(date) => {
              setCalendarOpen(false)
              setDate(date.date, false)
            }}
          />
        </Popover.Content>
      </Popover>
    </Box>
  )
}

DateInput.displayName = 'DateInput'
