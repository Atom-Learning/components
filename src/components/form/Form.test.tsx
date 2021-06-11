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

    const nameInput = screen.getByRole('textbox', { name: 'name' })
    const secretInput = screen.getByRole('textbox', { name: 'secret' })

    userEvent.type(nameInput, 'Kawhi Leonard')
    userEvent.type(secretInput, 'Very secret secret')

    expect(JSON.parse(sessionStorage.getItem('nameAndSecret'))).toEqual(
      expect.anything()
    )
    expect(JSON.parse(sessionStorage.getItem('nameAndSecret')).name).toEqual(
      'Kawhi Leonard'
    )
    expect(
      JSON.parse(sessionStorage.getItem('nameAndSecret')).secret
    ).toBeFalsy()
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

    userEvent.type(screen.getByRole('textbox', { name: 'name' }), 'Kyle Lowry')
    expect(screen.getByRole('textbox')).toHaveValue('Kyle Lowry')
    expect(JSON.parse(sessionStorage.getItem('nameForm')).name).toEqual(
      'Kyle Lowry'
    )
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
})
