import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Heading } from '.'

describe(`Heading component`, () => {
  it('renders a heading', async () => {
    const { container } = render(<Heading>HEADING</Heading>)

    await screen.getByText('HEADING')

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Heading>HEADING</Heading>)

    expect(await axe(container)).toHaveNoViolations()
  })
})
