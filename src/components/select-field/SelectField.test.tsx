import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { SelectField } from '.'

describe('SelectField component', () => {
  it('renders', async () => {
    const { container } = render(
      <Form>
        <SelectField
          label="Example options"
          name="example"
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 }
          ]}
        />
      </Form>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <SelectField
          label="Example options"
          name="example"
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 }
          ]}
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
