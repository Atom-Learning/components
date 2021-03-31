import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { CheckboxField } from '.'

describe('CheckboxField component', () => {
  it('renders', async () => {
    const { container } = render(
      <CheckboxField label="Example" name="example" />
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      // workaround for failing axe test -
      // Radix's checkbox renders an <input type="checkbox" hidden=""/> but
      // doesn't give it role="none" so axe wants it to have a label
      <label>
        <CheckboxField label="Example" name="example" title="example" />
      </label>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
