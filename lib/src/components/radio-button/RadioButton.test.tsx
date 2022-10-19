import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { RadioButton, RadioButtonGroup } from '.'

describe(`Radio component`, () => {
  it('renders a radio button', async () => {
    const { container } = render(
      <RadioButtonGroup>
        <RadioButton value="value" aria-label="indicator" />
      </RadioButtonGroup>
    )

    await screen.getByRole('radio')

    expect(container).toMatchSnapshot()
  })

  it('renders a radio button - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <label>
        Label
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="indicator" />
        </RadioButtonGroup>
      </label>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled radio button', async () => {
    const { container } = render(
      <RadioButtonGroup>
        <RadioButton value="value" aria-label="disabled indicator" disabled />
      </RadioButtonGroup>
    )

    await screen.getByRole('radio')

    expect(container).toMatchSnapshot()
  })

  it('renders a disabled radio button - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <label>
        Label
        <RadioButtonGroup>
          <RadioButton value="value" aria-label="disabled indicator" disabled />
        </RadioButtonGroup>
      </label>
    )

    await screen.getByRole('radio')

    expect(await axe(container)).toHaveNoViolations()
  })
})
