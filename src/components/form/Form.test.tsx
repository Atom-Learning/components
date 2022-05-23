import { render, screen, waitFor } from '@testing-library/react'
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
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form onSubmit={jest.fn()}>
        <InputField name="name" label="Name" />
      </Form>
    )

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

  it('passes form methods to render prop function', async () => {
    render(
      <Form
        onSubmit={jest.fn()}
        render={({ formState }) => (
          <>
            <InputField
              name="name"
              label="Name"
              validation={{ required: 'Name is required' }}
            />
            <PasswordField
              name="password"
              validation={{ required: 'Password is required' }}
            />
            <Button
              type="submit"
              onClick={jest.fn()}
              disabled={!formState.isValid}
            >
              Submit
            </Button>
          </>
        )}
      />
    )

    expect(await screen.findByText('Submit')).toHaveAttribute('disabled', '')
  })

  it('saves form data to sessionStorage when persist prop is sent through', async () => {
    render(
      <Form onSubmit={jest.fn()} persist={{ id: 'nameAndYearGroup' }}>
        <InputField
          name="name"
          label="Name"
          validation={{ required: 'Name is required' }}
        />
        <InputField
          name="yearGroup"
          label="Year Group"
          validation={{ required: 'Year group is required' }}
        />
        <Button type="submit" onClick={jest.fn()}>
          Submit
        </Button>
      </Form>
    )

    expect(sessionStorage.getItem('nameAndYearGroup')).toEqual(
      expect.anything()
    )
  })

  it('checks user input values are being persisted in sessionStorage', async () => {
    render(
      <Form onSubmit={jest.fn()} persist={{ id: 'nameForm' }}>
        <InputField
          name="name"
          label="Name"
          type="text"
          validation={{ required: 'Name is required' }}
        />
        <Button type="submit" onClick={jest.fn()}>
          Submit
        </Button>
      </Form>
    )
    const input = screen.getByRole('textbox', { name: 'Name' })

    userEvent.type(input, 'Kyle Lowry')
    expect(input).toHaveValue('Kyle Lowry')
    expect(JSON.parse(sessionStorage.getItem('nameForm')).name).toEqual(
      'Kyle Lowry'
    )
  })

  it('saves form data to sessionStorage excluding secret field', async () => {
    render(
      <Form
        onSubmit={jest.fn()}
        persist={{ id: 'nameAndSecret', exclude: ['secret'] }}
      >
        <InputField
          name="name"
          label="Name"
          type="text"
          validation={{ required: 'Name is required' }}
        />
        <InputField
          name="secret"
          label="Secret"
          type="text"
          validation={{ required: 'Secret is required' }}
        />
        <Button type="submit" onClick={jest.fn()}>
          Submit
        </Button>
      </Form>
    )

    const nameInput = screen.getByRole('textbox', { name: 'Name' })
    const secretInput = screen.getByRole('textbox', { name: 'Secret' })

    userEvent.type(nameInput, 'Kawhi Leonard')
    userEvent.type(secretInput, 'Very secret secret')

    const parsedStorage = JSON.parse(sessionStorage.getItem('nameAndSecret'))
    expect(parsedStorage).toEqual(expect.anything())
    expect(parsedStorage.name).toEqual('Kawhi Leonard')
    expect(parsedStorage.secret).toBeFalsy()
  })

  it('checks data attributes are availabe in the DOM', async () => {
    render(
      <div>
        <Form
          onSubmit={jest.fn()}
          persist={{ id: 'cityForm' }}
          data-index-number="12345"
        >
          <InputField
            name="city"
            label="City"
            validation={{ required: 'City is required' }}
          />
          <Button type="submit" onClick={jest.fn()}>
            Submit
          </Button>
        </Form>
      </div>
    )
    expect(screen.getByRole('form').getAttribute('data-index-number')).toEqual(
      '12345'
    )
  })

  it('should call onError if there are erros in the form and onSubmit when the errors are gone', async () => {
    const onSubmit = jest.fn()
    const onError = jest.fn()

    render(
      <div>
        <Form onSubmit={onSubmit} onError={onError}>
          <InputField
            name="test"
            label="Test"
            validation={{
              required: 'Test is required',
              minLength: {
                value: 5,
                message: 'Test needs length 5'
              }
            }}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
    await waitFor(() => screen.getByRole('button').click())

    expect(onError).toBeCalledTimes(1)
    expect(onSubmit).toBeCalledTimes(0)

    const input = screen.getByRole('textbox')

    userEvent.type(input, 'test5')

    await waitFor(() => screen.getByRole('button').click())

    expect(onError).toBeCalledTimes(1)
    expect(onSubmit).toBeCalledTimes(1)
  })
})
