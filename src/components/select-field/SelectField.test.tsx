import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { SelectField } from '.'

describe('SelectField component', () => {
  it('renders', async () => {
    const { container } = render(
      <Form>
        <SelectField label="Example options" name="example">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </SelectField>
      </Form>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <SelectField label="Example options" name="example">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </SelectField>
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
