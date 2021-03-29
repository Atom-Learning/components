import { IdProvider } from '@radix-ui/react-id'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { RadioButton, RadioButtonGroup } from '.'

describe(`Radio component`, () => {
  it('renders a radio button', async () => {
    const { container } = render(
      <IdProvider>
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="indicator" />
        </RadioButtonGroup>
      </IdProvider>
    )

    // filtering on hidden is needed to find the visibile item as Radix adds a hidden input before the visible button
    await screen.getByRole('radio', { hidden: false })

    expect(container).toMatchSnapshot()
  })

  it('renders a radio button - has no programmatically detectable a11y issues', async () => {
    render(
      <IdProvider>
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="indicator" />
        </RadioButtonGroup>
      </IdProvider>
    )

    // filtering on hidden is needed to find the visibile item as Radix adds a hidden input before the visible button
    const radio = await screen.getByRole('radio', { hidden: false })
    expect(await axe(radio)).toHaveNoViolations()
  })

  it('renders a disabled radio button', async () => {
    const { container } = render(
      <IdProvider>
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="disabled indicator" disabled />
        </RadioButtonGroup>
      </IdProvider>
    )
    // filtering on hidden is needed to find the visibile item as Radix adds a hidden input before the visible button
    await screen.getByRole('radio', { hidden: false })

    expect(container).toMatchSnapshot()
  })

  it('renders a disabled radio button - has no programmatically detectable a11y issues', async () => {
    render(
      <IdProvider>
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="disabled indicator" disabled />
        </RadioButtonGroup>
      </IdProvider>
    )
    // filtering on hidden is needed to find the visibile item as Radix adds a hidden input before the visible button
    const radio = await screen.getByRole('radio', { hidden: false })

    expect(await axe(radio)).toHaveNoViolations()
  })
})
