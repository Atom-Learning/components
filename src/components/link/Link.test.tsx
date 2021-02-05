import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Link } from './'

describe(`Link component`, () => {
  it('renders an anchor', async () => {
    const { container } = render(<Link href="https://google.com/">GOOGLE</Link>)

    const link = await screen.getByText('GOOGLE')

    expect(link).toHaveAttribute('href', 'https://google.com/')
    expect(link).toHaveTextContent('GOOGLE')
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders an large anchor', async () => {
    const { container } = render(
      <Link href="https://google.com/" size="lg">
        GOOGLE
      </Link>
    )

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
