import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Calendar } from '.'

describe('Calendar component', () => {
  it('renders', async () => {
    const { container } = render(<Calendar onDateSelected={() => null} />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Calendar onDateSelected={() => null} />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('changes month when change month arrows are pressed', async () => {
    render(<Calendar onDateSelected={() => null} date={new Date('12/25/21')} />)

    const arrow = await screen.findByLabelText('Next month')
    fireEvent.click(arrow)

    expect(await screen.queryByText('Dec 2021')).not.toBeInTheDocument()
  })

  it('renders translated weekday names', async () => {
    render(
      <Calendar
        onDateSelected={() => null}
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
        onDateSelected={() => null}
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
