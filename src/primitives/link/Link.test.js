import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Link } from '.'

describe(`Link component`, () => {
  it('renders an anchor', async () => {
    const { container } = render(<Link href="https://google.com/">GOOGLE</Link>)

    await screen.getByText('GOOGLE')
    expect(screen.getByText('GOOGLE').href).toBe('https://google.com/')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(
      <main>
        <Link href="https://google.com/">GOOGLE</Link>
      </main>,
      document.body
    )

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
