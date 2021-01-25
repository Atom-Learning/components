import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Image } from './'

describe(`Image component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Image css={{ m: 'auto', height: 100, width: 100 }} alt="image" />
    )
    await screen.findByAltText('image')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(
      <main>
        <Image alt="" />
      </main>,
      document.body
    )

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
