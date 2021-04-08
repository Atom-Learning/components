import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { TextareaField } from '.'

describe('TextareaField component', () => {
  it('renders', async () => {
    const { container } = render(
      <Form>
        <TextareaField
          name="description"
          id="description"
          placeholder="placeholder"
        />
      </Form>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <TextareaField
          name="description"
          id="description"
          placeholder="placeholder"
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with an error', async () => {
    const { container } = render(
      <Form>
        <TextareaField
          name="description"
          id="description"
          placeholder="placeholder"
          error="Error Message"
        />
      </Form>
    )

    expect(container).toMatchSnapshot()
  })
})
