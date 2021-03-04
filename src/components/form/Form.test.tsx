import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Button, InputField } from '../'
import { Form } from '.'

describe(`Form component`, () => {
  it('renders a form', async () => {
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
      <Form onSubmit={console.log}>
        <InputField
          name="name"
          label="Name"
          validation={{ required: 'Name is required' }}
        />
        <Button>Submit</Button>
      </Form>
    )

    userEvent.click(screen.getByRole('button'))

    expect(await screen.findByText('Name is required'))
  })
})
