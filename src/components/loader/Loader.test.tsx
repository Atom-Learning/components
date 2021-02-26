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
    expect(await axe(container)).toHaveNoViolations()
  })
})
