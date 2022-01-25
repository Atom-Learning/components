import { IdProvider } from '@radix-ui/react-id'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { DateInput } from '.'

describe('DateInput component', () => {
  it('renders', async () => {
    const { container } = render(
      <IdProvider>
        <DateInput aria-label="test" />
      </IdProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<DateInput aria-label="test" />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('opens date picker when clicked', async () => {
    render(<DateInput aria-label="test" />)

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(await screen.findByRole('dialog')).toBeVisible()
  })

  it('allows external behaviour to be passed down to the "onDateSelected" callback', async () => {
    const changeSpy = jest.fn()
    render(<DateInput aria-label="test" onChange={changeSpy} />)

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(await screen.findByRole('dialog')).toBeVisible()
    fireEvent.click(screen.getByText('15'))
    await waitFor(() => expect(changeSpy).toHaveBeenCalled())
  })
})
