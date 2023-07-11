import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../form'
import { Tooltip } from '../tooltip'
import { CreatePasswordField } from '.'
import { Button } from '../button'

const props: React.ComponentProps<typeof CreatePasswordField> = {
  name: 'password',
  label: 'Create a password',
  defaultValidation: {
    '7+ characters': false,
    'Contains number': false,
    'Contains symbol': false
  },
  validate: () =>
    Promise.resolve({
      '7+ characters': true,
      'Contains number': false,
      'Contains symbol': true
    })
}

const customRender = () =>
  render(
    <Tooltip.Provider>
      <Form onSubmit={jest.fn()}>
        <CreatePasswordField {...props} />
        <Button type="submit">Submit</Button>
      </Form>
    </Tooltip.Provider>
  )

describe(`CreatePasswordField component`, () => {
  it('renders', () => {
    const { container } = customRender()

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = customRender()

    expect(await axe(container)).toHaveNoViolations()
  })

  it('displays validation messages when focusing on the input', () => {
    customRender()

    expect(screen.queryByText('7+ characters')).not.toBeInTheDocument()
    expect(screen.queryByText('Contains number')).not.toBeInTheDocument()
    expect(screen.queryByText('Contains symbol')).not.toBeInTheDocument()

    userEvent.click(screen.getByLabelText('Create a password'))

    expect(screen.getByText('7+ characters')).toBeVisible()
    expect(screen.getByText('Contains number')).toBeVisible()
    expect(screen.getByText('Contains symbol')).toBeVisible()
  })

  it('displays validation messages on blur after the form has been touched', () => {
    customRender()

    const passwordInput = screen.getByText('Create a password')
    userEvent.type(passwordInput, 'password')
    userEvent.tab()

    expect(screen.getByText('7+ characters')).toBeVisible()
    expect(screen.getByText('Contains number')).toBeVisible()
    expect(screen.getByText('Contains symbol')).toBeVisible()
  })

  it('displays validation messages when trying to submit the form', async () => {
    customRender()

    userEvent.click(screen.getByRole('button', { name: 'Submit' }))

    expect(await screen.findByText('7+ characters')).toBeVisible()
  })

  it('displays validation styling to the input when the value is not valid', () => {
    const { container } = customRender()

    userEvent.click(screen.getByRole('button', { name: 'Submit' }))

    expect(container).toMatchSnapshot()
  })
})
