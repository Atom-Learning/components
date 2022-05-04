import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Editor } from '.'

describe(`Editor component`, () => {
  it('renders', async () => {
    const { container } = await render(
      <Editor />
    )
    // await screen.findByText('Editor')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(<Editor />)

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
