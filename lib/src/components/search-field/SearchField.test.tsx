import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../form'
import { SearchField } from './SearchField'

describe(`SearchField component`, () => {
  it('renders a field with a search input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <SearchField
          label="Search Field"
          name="searchField"
          placeholder="Search Field"
        />
      </Form>
    )

    await screen.getByPlaceholderText('Search Field')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <SearchField
          label="Search Field"
          name="searchField"
          placeholder="Search Field"
          disabled
        />
      </Form>
    )

    const input = await screen.findByPlaceholderText('Search Field')

    expect(container).toMatchSnapshot()
    expect(input).toHaveAttribute('disabled')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state - has no programmatically detectable a11y issues', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <Form>
        <SearchField
          llabel="Search Field"
          name="searchField"
          placeholder="Search Field"
          validation={{ required: errorText }}
        />
        <button type="submit">Submit</button>
      </Form>
    )
    userEvent.click(getByRole('button'))
    await findByText(errorText)

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
