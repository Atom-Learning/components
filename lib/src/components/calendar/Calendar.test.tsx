import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { Calendar } from '.'
// NOTE: We need to set the date or the 'isToday' class on individual
// dates will cause these snapshots to fail every new day this test is
// run. Setting this system time means this is kept consistent.
Date.now = jest.fn(() => Date.parse('2021-12-14'))

const props = {
  onDateSelected: jest.fn(),
  date: new Date('12/25/21'),
  setYear: jest.fn()
}

const Wrapper = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('Calendar component', () => {
  it('renders', async () => {
    const { container } = render(
      <Wrapper>
        <Calendar {...props} />
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <Calendar {...props} />
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('changes month when change month arrows are pressed', async () => {
    render(
      <Wrapper>
        <Calendar {...props} />
      </Wrapper>
    )

    const arrow = await screen.findByLabelText('Next month')
    fireEvent.click(arrow)

    expect(await screen.queryByText('Dec 2021')).not.toBeInTheDocument()
  })

  it('opens the change year view when year is clicked', async () => {
    render(
      <Wrapper>
        <Calendar {...props} />
      </Wrapper>
    )

    const yearButton = await screen.findByText('Dec 2021')
    fireEvent.click(yearButton)

    expect(await screen.queryByText('Dec 2021')).not.toBeInTheDocument()
    expect(await screen.findByText('2020')).toBeVisible()
  })

  it('changes year when change year arrows are pressed', async () => {
    render(
      <Wrapper>
        <Calendar {...props} />
      </Wrapper>
    )

    const yearButton = await screen.findByText('Dec 2021')
    fireEvent.click(yearButton)

    const arrow = await screen.findByLabelText('Next year')
    fireEvent.click(arrow)

    expect(await screen.queryByText('2021')).not.toBeInTheDocument()
    expect(await screen.findByText('2025')).toBeVisible()
  })

  it('cannot select year later than max date year', async () => {
    render(
      <Wrapper>
        <Calendar {...props} maxDate={new Date('2025-01-01')} />
      </Wrapper>
    )

    const yearButton = await screen.findByText('Dec 2021')
    fireEvent.click(yearButton)

    const arrow = await screen.findByLabelText('Next year')
    fireEvent.click(arrow)

    expect(await screen.queryByText('2021')).not.toBeInTheDocument()
    expect(await screen.findByText('2025')).toBeVisible()
    expect(await screen.queryByText('2026')).not.toBeInTheDocument()
  })

  it('cannot select year earlier than min date year', async () => {
    render(
      <Wrapper>
        <Calendar {...props} minDate={new Date('2000-01-01')} />
      </Wrapper>
    )

    const yearButton = await screen.findByText('Dec 2021')
    fireEvent.click(yearButton)

    const arrow = await screen.findByLabelText('Previous year')
    fireEvent.click(arrow)

    expect(await screen.queryByText('2021')).not.toBeInTheDocument()
    expect(await screen.findByText('2000')).toBeVisible()
    expect(await screen.queryByText('1999')).not.toBeInTheDocument()
  })

  it('renders translated weekday names', async () => {
    render(
      <Wrapper>
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
      </Wrapper>
    )

    expect(await screen.findByText('Måndag')).toBeVisible()
  })

  it('renders translated month names', async () => {
    render(
      <Wrapper>
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
      </Wrapper>
    )

    expect(await screen.findByText('Augusti 2021')).toBeVisible()
  })
})
