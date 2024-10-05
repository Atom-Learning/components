import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Button, InputField } from '../'
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

    screen.getByRole('form')

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

        <Button type="submit" onClick={jest.fn()}>
          Submit
        </Button>
      </Form>
    )

    await userEvent.click(screen.getByText('Submit'))

    expect(await screen.findByText('Name is required'))
  })

  it('passes form methods to render prop', async () => {
    render(
      <Form onSubmit={jest.fn()}>
        {({ formState }) => (
          <>
            <InputField
              name="name"
              label="Name"
              validation={{ required: 'Name is required' }}
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
      </Form>
    )

    expect(await screen.findByText('Submit')).toHaveAttribute('disabled', '')
  })

  it('checks data attributes are availabe in the DOM', async () => {
    render(
      <div>
        <Form onSubmit={jest.fn()} data-index-number="12345">
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

  it('should call onError if there are errors in the form and onSubmit when the errors are gone', async () => {
    const onSubmit = jest.fn()
    const onError = jest.fn()

    render(
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
    )
    await waitFor(() => screen.getByRole('button').click())

    expect(onError).toBeCalledTimes(1)
    expect(onSubmit).toBeCalledTimes(0)

    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'test5')

    await waitFor(() => screen.getByRole('button').click())

    expect(onError).toBeCalledTimes(1)
    expect(onSubmit).toBeCalledTimes(1)
  })
})
