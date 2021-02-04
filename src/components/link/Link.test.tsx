import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Link } from './'

describe(`Link component`, () => {
  it('renders an anchor', async () => {
    const { container } = render(<Link href="https://google.com/">GOOGLE</Link>)

    const renderedLink = (await screen.getByText('GOOGLE')) as HTMLAnchorElement

    expect(renderedLink.href).toBe('https://google.com/')
    expect(renderedLink.text).toBe('GOOGLE')
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
