import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from '.'

describe(`Checkbox component`, () => {
  it('renders a checkbox', async () => {
    const { container } = render(
      // workaround for failing axe test -
      // Radix's checkbox renders an <input type="checkbox" hidden=""/> but
      // doesn't give it role="none" so axe wants it to have a label
      <label>
        <Checkbox title="test" />
      </label>
    )

    await screen.getByRole('checkbox')

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      // workaround for failing axe test -
      // Radix's checkbox renders an <input type="checkbox" hidden=""/> but
      // doesn't give it role="none" so axe wants it to have a label
      <label>
        <Checkbox title="test" />
      </label>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
