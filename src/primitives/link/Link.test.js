import { render, screen } from '@testing-library/react'
import React from 'react'

import { Link } from '.'

describe(`Link component`, () => {
  it('renders an anchor', async () => {
    const { container } = render(<Link href="https://google.com/">GOOGLE</Link>)

    await screen.getByText('GOOGLE')
    expect(screen.getByText('GOOGLE').href).toBe('https://google.com/')
    expect(container).toMatchSnapshot()
  })
})
