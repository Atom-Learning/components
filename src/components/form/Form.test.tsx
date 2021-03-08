import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Button, InputField, PasswordField } from '../'
import { Form } from '.'

describe(`Form component`, () => {
  // the Loader's CSS turns up in the snapshot.
  // TODO: figure out why ...
  it.skip('renders a form', async () => {
    const { container } = render(
      <Form onSubmit={jest.fn()}>
        <InputField name="name" label="Name" />
      </Form>
    )

    await screen.getByRole('form')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('passes error messages to fields', async () => {
    render(
      <Form onSubmit={jest.fn()}>
        <InputField
          name="name"
          label="Name"
          validation={{ required: 'Name is required' }}
        />
        <PasswordField
          name="password"
          validation={{ required: 'Password is required' }}
        />
        <Button type="submit" onClick={jest.fn()}>
          Submit
        </Button>
      </Form>
    )

    userEvent.click(screen.getByText('Submit'))

    expect(await screen.findByText('Name is required'))
    expect(await screen.findByText('Password is required'))
  })
})
