import { CalendarEvent } from '@atom-learning/icons'
import type { Props as DayzedInterface } from 'dayzed'
import * as React from 'react'

import { DIALOG_Z_INDEX } from '~/constants/zIndices'
import { getFieldIconSize } from '~/utilities'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Box } from '../box/Box'
import { Calendar, CalendarTranslationProps } from '../calendar/Calendar'
import { DEFAULT_LABELS } from '../calendar/constants'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'
import { Popover } from '../popover/Popover'

import { DEFAULT_DATE_FORMAT } from './constants'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export type DateInputProps = Omit<DayzedInterface, 'onDateSelected'> &
  CalendarTranslationProps & {
    initialDate?: Date
    dateFormat?: string
    disabled?: boolean
    size?: 'sm' | 'md' | 'lg'
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
    const [date, setDate] = React.useState(
      initialDate ? dayjs(initialDate).toDate() : undefined
    )

    const formatDateToString = (date?: Date) =>
      date ? dayjs(date).format(dateFormat) : ''
    const dateString = formatDateToString(date)

    React.useEffect(() => {
      onChange?.(date)
    }, [date, onChange])

    const handleInputChange = React.useCallback(
      (event) => {
        const newDateString = event.target.value
        const parsedInputDate = dayjs(newDateString, dateFormat)
        setDate(
          parsedInputDate.isValid() ? parsedInputDate.toDate() : undefined
        )
      },
      [dateFormat]
    )

    const [inputRefreshKey, setInputRefreshKey] = React.useState(0)
    const handleCalendarChange = React.useCallback(
      (newDate) => {
        setDate(newDate)
        setInputRefreshKey((prevKey) => prevKey + 1) // Remount the Input
      },
      [dateFormat]
    )

    const updatedLabels = {
      ...DEFAULT_LABELS,
      ...labels
    }

    const [calendarOpen, setCalendarOpen] = React.useState(false)

    const refDateToday = React.useRef<HTMLButtonElement>(null)
    const refDateSelected = React.useRef<HTMLButtonElement>(null)

    const iconSize = React.useMemo(() => getFieldIconSize(size), [size])

    return (
      <Box css={{ position: 'relative', height: 'max-content' }}>
        <Input
          name="date"
          disabled={disabled}
          size={size}
          {...remainingProps}
          onChange={handleInputChange}
          ref={ref}
          /* (!)
           * There appears to be some weird side effect of using `value` + `onChange` + `validation`
           * (a combination which implementation sometimes uses)
           * which eats the onChange effect, thus leaving the value not being set into the state appropriately;
           * Causing the field to appear to be glitching and not typing/backspacing.
           *
           * The following is a hack/workaround to tackle this.
           * We are basically working instead of with a controlled `value` - with an uncontrolled input using `defaultValue`.
           * But because we need this value to match any changes from the calendar - we are requesting a remount of the component when the calernar `onChange` runs, so the input is defaulted and set to the new internal state value.
           */
          key={inputRefreshKey}
          defaultValue={dateString}
        />
        <Popover modal open={calendarOpen} onOpenChange={setCalendarOpen}>
          <Popover.Trigger asChild>
            <ActionIcon
              css={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '0'
              }}
              disabled={disabled}
              label={updatedLabels.open}
              size={iconSize}
              theme="neutral"
              hasTooltip={false}
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
                  await handleCalendarChange(date.date)
                  if (revalidate) revalidate()
                }}
                setYear={async (date) => {
                  await handleCalendarChange(date)
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
