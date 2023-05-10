import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { InlineFieldWrapper } from '.'

const ExampleField = () => (
  <InlineFieldWrapper
    label="Example Field"
    name="example"
  >
    <input type="checkbox" id="example" name="example" />
  </InlineFieldWrapper>
)

describe('FieldWrapper component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleField />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleField />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
