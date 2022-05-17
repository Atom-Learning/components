import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useState } from 'react'

import { DEFAULT_DATE_FORMAT } from './constants'

dayjs.extend(customParseFormat)

export const useDate = (
  initialDate: Date | undefined,
  dateFormat = DEFAULT_DATE_FORMAT
): {
  dateString: string
  date: Date | undefined
  setDate: (inputDate: Date | string, isDateString: boolean) => void
} => {
  const [date, setDate] = useState(
    initialDate ? dayjs(initialDate).toDate() : undefined
  )
  const [dateString, setDateString] = useState(
    initialDate ? dayjs(initialDate).format(dateFormat) : ''
  )

  const saveDate = (inputDate, isDateString = false) => {
    const parsedInputDate = isDateString
      ? dayjs(inputDate, dateFormat)
      : dayjs(inputDate)

    setDate(parsedInputDate.isValid() ? parsedInputDate.toDate() : undefined)
    setDateString(isDateString ? inputDate : parsedInputDate.format(dateFormat))
  }

  return { dateString, date, setDate: saveDate }
}
