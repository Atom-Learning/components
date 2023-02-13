import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Input } from '../input'
import { FieldWrapper } from '.'
import { Form } from '../form'

const ExampleField = () => (
  // Form is required because the FieldWrapper uses the useFormContext hook
  <Form onSubmit={jest.fn()}>
    <FieldWrapper
      label="Example Field"
      fieldId="example"
      prompt={{ label: 'Example prompt', link: 'https://example.com' }}
    >
      <Input name="example" id="example" />
    </FieldWrapper>
  </Form>
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

  // TODO: unskip when we can pass custom messages into the FieldWrapper
  it.skip('renders provided error', async () => {
    render(<ExampleField />)

    expect(await screen.findByText('Example error')).toBeVisible()
  })

  it('renders provided prompt', async () => {
    render(<ExampleField />)
    const link = await screen.findByRole('link')

    expect(link).toHaveTextContent('Example prompt')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
