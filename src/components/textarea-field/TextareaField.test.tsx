import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { TextareaField } from '.'

describe('TextareaField component', () => {
  it('renders', async () => {
    const { container } = render(
      <TextareaField
        name="description"
        id="description"
        placeholder="placeholder"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <TextareaField
        name="description"
        id="description"
        placeholder="placeholder"
      />
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with an error', async () => {
    const { container } = render(
      <TextareaField
        name="description"
        id="description"
        placeholder="placeholder"
        error="Error Message"
      />
    )

    expect(container).toMatchSnapshot()
  })
})
