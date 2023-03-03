import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Input } from '../input'
import { FieldWrapper } from '.'

const ExampleField = () => (
  <FieldWrapper
    label="Example Field"
    fieldId="example"
    error="Example error"
    prompt={{ label: 'Example prompt', link: 'https://example.com' }}
  >
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

  it('links renders provided prompt', async () => {
    render(<ExampleField />)
    const link = await screen.findByRole('link')

    expect(link).toHaveTextContent('Example prompt')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('links renders provided prompt with an onClick', async () => {
    const promptClickMock = jest.fn()

    render(
      <FieldWrapper
        label="Example Field"
        fieldId="example"
        error="Example error"
        prompt={{ label: 'Example prompt', onClick: promptClickMock }}
      >
        <Input name="example" id="example" />
      </FieldWrapper>
    )
    const button = await screen.findByRole('button')

    expect(button).toHaveTextContent('Example prompt')

    userEvent.click(button)

    expect(promptClickMock).toHaveBeenCalledTimes(1)
  })
})
