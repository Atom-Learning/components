import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Loader } from '.'

describe(`Loader component`, () => {
  it('renders a loader', async () => {
    const message = 'Content is loading'
    const { container } = render(<Loader message={message} />)

    await screen.getByRole('alert')
    await screen.getByText(message)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Loader />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
