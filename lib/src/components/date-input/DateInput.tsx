import { CalendarEvent } from '@atom-learning/icons'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { Props as DayzedInterface } from 'dayzed'
import * as React from 'react'

import { DIALOG_Z_INDEX } from '~/constants/zIndices'
import { getFieldIconSize } from '~/utilities'
import { useCallbackRefState } from '~/utilities/hooks/useCallbackRef'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Box } from '../box/Box'
import { Calendar, CalendarTranslationProps } from '../calendar/Calendar'
import { DEFAULT_LABELS } from '../calendar/constants'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'
import { Popover } from '../popover/Popover'
import { DEFAULT_DATE_FORMAT } from './constants'
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

const formatDateToString = (date?: Date, dateFormat = DEFAULT_DATE_FORMAT) =>
  date ? dayjs(date).format(dateFormat) : ''

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

    const [inputElRef, setInputElRef] = useCallbackRefState()
    React.useImperativeHandle(ref, () => inputElRef as HTMLInputElement)

    const dateString = formatDateToString(date, dateFormat)

    const handleInputChange = React.useCallback(
      (event) => {
        const newDateString = event.target.value
        const parsedInputDate = dayjs(newDateString, dateFormat)
        const newDate = parsedInputDate.isValid()
          ? parsedInputDate.toDate()
          : undefined
        setDate(newDate)
        onChange?.(newDate)
      },
      [dateFormat, onChange]
    )

    const handleCalendarChange = React.useCallback(
      (newDate) => {
        setDate(newDate)

        const mirrorChangeToInputElement = () => {
          if (!inputElRef) return

          // Call the `set` function on the input value directly to mirror the change.
          // Props to: https://stackoverflow.com/a/46012210
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            'value'
          )?.set
          nativeInputValueSetter?.call(
            inputElRef,
            formatDateToString(newDate, dateFormat)
          )
          const event = new Event('input', { bubbles: true })
          inputElRef.dispatchEvent(event)
        }
        mirrorChangeToInputElement()
      },
      [dateFormat, inputElRef]
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
          ref={setInputElRef}
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
