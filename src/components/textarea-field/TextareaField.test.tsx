import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { TextareaField } from '.'

describe('TextareaField component', () => {
  it('renders', async () => {
    const { container } = render(
      <TextareaField name="description" id="description" />
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <TextareaField name="description" id="description" />
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with an error', async () => {
    const { container } = render(
      <TextareaField
        name="description"
        id="description"
        error="Error Message"
      />
    )

    expect(container).toMatchSnapshot()
  })
})
