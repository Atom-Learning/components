import { IdProvider } from '@radix-ui/react-id'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { DateInput } from '.'

describe('DateInput component', () => {
  it('renders', async () => {
    const { container } = render(
      <IdProvider>
        <DateInput onDateSelected={() => null} aria-label="test" />
      </IdProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <DateInput onDateSelected={() => null} aria-label="test" />
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('opens date picker when clicked', async () => {
    render(<DateInput onDateSelected={() => null} aria-label="test" />)

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(await screen.findByRole('dialog')).toBeVisible()
  })
})
