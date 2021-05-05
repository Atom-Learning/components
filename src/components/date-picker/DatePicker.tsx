import * as React from 'react'
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle'

import { styled } from '~/stitches'

const StyledDatePicker = styled(ReactDatePicker, {
  '& .react-calendar__navigation__arrow': {
    border: 'unset',
    backgroundColor: 'unset',
    fontSize: '$md',
    size: '$3'
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
  '& .react-date-picker__inputGroup__input': {
    '-moz-appearance': 'textfield',
    minWidth: 60,
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
    },
    '&:not(:last-child)': {
      mr: '$2'
    }
  },
  '& .react-date-picker__calendar': {
    color: '$tonal800',
    boxShadow: '$1',
    bg: 'white',
    borderRadius: '$0',
    p: '$3',
    width: 220,
    opacity: 1,
    visibility: 'visible',
    transition: 'all 75ms ease-out'
  },
  '&.react-date-picker--closed .react-date-picker__calendar': {
    opacity: 0,
    visibility: 'hidden'
  },
  '& .react-calendar__month-view__weekdays': {
    fontSize: '$sm',
    fontFamily: '$sans',
    py: '$2'
  },
  '& .react-calendar__tile': {
    bg: 'unset',
    height: '$2',
    border: 'unset'
  },
  '& .react-calendar__month-view__days__day--neighboringMonth': {
    color: '$tonal400'
  },
  '& .react-calendar__tile--active': {
    bg: '$tonal400'
  }
})

type DatePickerProps = {
  date?: Date
}

export const DatePicker: React.FC<DatePickerProps> = ({
  date = new Date()
}) => {
  return (
    <StyledDatePicker onChange={(value) => console.log(value)} value={date} />
  )
}

DatePicker.displayName = 'DatePicker'
