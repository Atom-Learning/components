import { IdProvider } from '@radix-ui/react-id'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { RadioButton, RadioButtonGroup } from '.'

describe(`Radio component`, () => {
  it('renders a radio', async () => {
    const { container } = render(
      <IdProvider>
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="indicator" />
        </RadioButtonGroup>
      </IdProvider>
    )

    // filtering on hidden is needed to find the visibile item as Radix adds a hidden input before the visible button
    const radio = await screen.getByRole('radio', { hidden: false })

    expect(container).toMatchSnapshot()
    expect(await axe(radio)).toHaveNoViolations()
  })

  it('renders a disabled radio', async () => {
    const { container } = render(
      <IdProvider>
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="disabled indicator" disabled />
        </RadioButtonGroup>
      </IdProvider>
    )
    // filtering on hidden is needed to find the visibile item as Radix adds a hidden input before the visible button
    const radio = await screen.getByRole('radio', { hidden: false })

    expect(container).toMatchSnapshot()
    expect(await axe(radio)).toHaveNoViolations()
  })
})
