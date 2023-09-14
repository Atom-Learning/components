import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { DateInput } from '.'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { DEFAULT_DATE_FORMAT } from './constants'

dayjs.extend(customParseFormat)

const DateInputImplementation = (props) => (
  <Tooltip.Provider>
    <DateInput aria-label="test" {...props} />
  </Tooltip.Provider>
)

describe('DateInput component', () => {
  it('renders', async () => {
    const { container } = render(<DateInputImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<DateInputImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('opens date picker when clicked', async () => {
    render(<DateInputImplementation />)

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(await screen.findByRole('dialog')).toBeVisible()
  })

  it('allows an external change handler to be passed to the component', async () => {
    const changeSpy = jest.fn()
    render(
      <DateInputImplementation
        onChange={changeSpy}
        initialDate={dayjs('14/09/2023', DEFAULT_DATE_FORMAT)}
      />
    )

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(await screen.findByRole('dialog')).toBeVisible()
    fireEvent.click(screen.getByText('15'))
    await waitFor(() =>
      expect(changeSpy).toHaveBeenCalledWith(
        dayjs('15/09/2023', DEFAULT_DATE_FORMAT).toDate()
      )
    )
  })

  it('renders lg size', async () => {
    const { container } = render(<DateInputImplementation size="lg" />)

    expect(container).toMatchSnapshot()
  })
})
