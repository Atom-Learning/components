import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Input } from '../input'
import { FieldWrapper } from '.'

const ExampleField = () => (
  <FieldWrapper label="Example Field" fieldId="example" error="Example error">
    <Input name="example" id="example" />
  </FieldWrapper>
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

  it('links the label to an input', async () => {
    render(<ExampleField />)

    userEvent.click(await screen.findByText('Example Field'))

    expect(await screen.findByRole('textbox')).toHaveFocus()
  })

  it('links renders provided error', async () => {
    render(<ExampleField />)

    expect(await screen.findByText('Example error')).toBeVisible()
  })
})
