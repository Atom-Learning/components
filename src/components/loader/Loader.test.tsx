import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Loader } from '.'

describe(`Loader component`, () => {
  it('renders a loader', async () => {
    const { container } = render(<Loader />)

    await screen.getByRole('alert')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
