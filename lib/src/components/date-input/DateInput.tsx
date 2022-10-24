import { CalendarEvent } from '@atom-learning/icons'
import type { Props as DayzedInterface } from 'dayzed'
import * as React from 'react'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Box } from '../box/Box'
import { Calendar, CalendarTranslationProps } from '../calendar/Calendar'
import { DEFAULT_LABELS } from '../calendar/constants'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'
import { Popover } from '../popover/Popover'
import { DEFAULT_DATE_FORMAT } from './constants'
import { useDate } from './use-date'
import { DIALOG_Z_INDEX } from '~/constants/zIndices'

export type DateInputProps = Omit<DayzedInterface, 'onDateSelected'> &
  CalendarTranslationProps & {
    initialDate?: Date
    dateFormat?: string
    disabled?: boolean
    size?: 'sm' | 'md'
    revalidate?: () => Promise<boolean>
    onChange?: (value?: Date) => void
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
      labels,
      revalidate,
      onChange,
      minDate,
      maxDate,
      ...remainingProps
    },
    ref
  ) => {
    const { date, dateString, setDate } = useDate(initialDate, dateFormat)
    const updatedLabels = {
      ...DEFAULT_LABELS,
      ...labels
    }

    const [calendarOpen, setCalendarOpen] = React.useState(false)

    const refDateToday = React.useRef<HTMLButtonElement>(null)
    const refDateSelected = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
      onChange?.(date)
    }, [date, onChange])

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
              css={{ position: 'absolute', top: '0', right: '0' }}
              disabled={disabled}
              label={updatedLabels.open}
              size={size}
              theme="neutral"
            >
              <Icon is={CalendarEvent} />
            </ActionIcon>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              css={{ pr: '$sizes$2', zIndex: DIALOG_Z_INDEX }}
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
                onDateSelected={async (date) => {
                  setCalendarOpen(false)
                  await setDate(date.date, false)
                  if (revalidate) revalidate()
                }}
                setYear={async (date) => {
                  await setDate(date, false)
                  if (revalidate) revalidate()
                }}
                minDate={minDate}
                maxDate={maxDate}
                refDateToday={refDateToday}
                refDateSelected={refDateSelected}
                firstDayOfWeek={firstDayOfWeek}
                monthNames={monthNames}
                weekdayNames={weekdayNames}
                labels={updatedLabels}
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover>
      </Box>
    )
  }
)

DateInput.displayName = 'DateInput'
