import { IdProvider } from '@radix-ui/react-id'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Toggle } from '.'

describe(`Toggle component`, () => {
  it('renders a toggle switch', async () => {
    const { container } = render(<Toggle />)

    expect(container).toMatchSnapshot()
  })
})
