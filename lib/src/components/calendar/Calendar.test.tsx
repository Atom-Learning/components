import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Calendar } from '.'

// NOTE: We need to set the date or the 'isToday' class on individual
// dates will cause these snapshots to fail every new day this test is
// run. Setting this system time means this is kept consistent.
Date.now = jest.fn(() => Date.parse('2021-12-14'))

const props = {
  onDateSelected: jest.fn(),
  date: new Date('12/25/21')
}

describe('Calendar component', () => {
  it('renders', async () => {
    const { container } = render(<Calendar {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Calendar {...props} />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('changes month when change month arrows are pressed', async () => {
    render(<Calendar {...props} />)

    const arrow = await screen.findByLabelText('Next month')
    fireEvent.click(arrow)

    expect(await screen.queryByText('Dec 2021')).not.toBeInTheDocument()
  })

  it('renders translated weekday names', async () => {
    render(
      <Calendar
        {...props}
        weekdayNames={[
          'Måndag',
          'Tisdag',
          'Onsdag',
          'Torsdag',
          'Fredag',
          'Lördag',
          'Söndag'
        ]}
      />
    )

    expect(await screen.findByText('Måndag')).toBeVisible()
  })

  it('renders translated month names', async () => {
    render(
      <Calendar
        {...props}
        date={new Date('08/01/21')}
        monthNames={[
          'Januri',
          'Februari',
          'Mars',
          'April',
          'Maj',
          'Juni',
          'Juli',
          'Augusti',
          'September',
          'Oktober',
          'November',
          'December'
        ]}
      />
    )

    expect(await screen.findByText('Augusti 2021')).toBeVisible()
  })
})
