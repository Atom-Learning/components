import { CalendarEvent, Close } from '@atom-learning/icons'
import * as React from 'react'
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle'

import { styled } from '~/stitches'

const StyledDatePicker = styled(ReactDatePicker, {
  '& .react-date-picker__wrapper': {
    display: 'flex'
  },
  '& .react-calendar__navigation__arrow': {
    border: 'unset',
    backgroundColor: 'unset',
    fontSize: '$md',
    size: '$3'
  },
  '& .react-date-picker__clear-button': {
    mr: '$2'
  },
  '& .react-date-picker__button': {
    bg: '$tonal200',
    cursor: 'pointer',
    border: 'unset',
    size: '$4',
    p: 'unset',
    borderRadius: '$0',
    transition: 'background-color 75ms ease-out',
    '&:hover': {
      bg: '$tonal300'
    }
  },
  '& .react-date-picker__button svg': {
    size: '$1',
    fill: 'none',
    stroke: 'currentcolor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '2'
  },
  '& .react-calendar__navigation__label': {
    bg: 'unset',
    fontSize: '$sm',
    fontWeight: 600,
    border: 'unset',
    fontFamily: '$sans'
  },
  '& .react-date-picker__inputGroup__divider': {
    display: 'none'
  },
  '& .react-date-picker__inputGroup__day': {
    minWidth: 80
  },
  '& .react-date-picker__inputGroup__month': {
    minWidth: 80
  },
  '& .react-date-picker__inputGroup__year': {
    minWidth: 100
  },
  '& .react-date-picker__inputGroup__input': {
    '-moz-appearance': 'textfield',
    border: '1px solid $tonal500',
    borderRadius: '$0',
    boxShadow: 'none', // prevent default iOS default styling
    boxSizing: 'border-box',
    color: '$tonal900',
    cursor: 'text',
    fontFamily: '$sans',
    fontSize: '$md', // prevent iOS zooming on focus
    height: '$4',
    width: '100%',
    p: '$3 $2',
    mr: '$2',
    transition: 'all 100ms ease-out',
    '&:focus': {
      borderColor: '$primary900',
      boxShadow: 'inset 0 0 0 1px $colors$primary900',
      outline: 'none'
    },
    '&[disabled]': {
      backgroundColor: '$tonal300',
      color: '$tonal700',
      cursor: 'not-allowed'
    }
  },
  '& .react-date-picker__calendar': {
    color: '$tonal800',
    boxShadow: '$1',
    bg: 'white',
    borderRadius: '$0',
    p: '$3',
    width: 244,
    opacity: 1,
    visibility: 'visible',
    transition: 'all 75ms ease-out',
    transform: 'translateY($space$3)'
  },
  '&.react-date-picker--closed .react-date-picker__calendar': {
    opacity: 0,
    visibility: 'hidden'
  },
  '& .react-calendar__month-view__weekdays': {
    fontSize: '$xs',
    fontFamily: '$sans',
    py: '$2'
  },
  '& .react-calendar__tile': {
    bg: 'unset',
    height: '$2',
    border: 'unset',
    cursor: 'pointer',
    transition: 'all 75ms ease-out',
    '&:hover': {
      bg: '$tonal200'
    }
  },
  '& .react-calendar__month-view__days__day--neighboringMonth': {
    color: '$tonal400'
  },
  '& .react-calendar__tile--active': {
    bg: '$tonal200'
  }
})

type DatePickerProps = {
  date: Date
}

export const DatePicker: React.FC<DatePickerProps> = ({ date }) => {
  const [value, setValue] = React.useState<Date | Date[]>(date)

  return (
    <StyledDatePicker
      clearIcon={<Close />}
      calendarIcon={<CalendarEvent />}
      onChange={(val) => setValue(val)}
      value={value}
      yearPlaceholder="Year"
      dayPlaceholder="Day"
      monthPlaceholder="Month"
    />
  )
}

DatePicker.displayName = 'DatePicker'
