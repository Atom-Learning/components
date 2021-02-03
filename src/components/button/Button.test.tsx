import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Button } from '.'

describe(`Button component`, () => {
  it('renders a button', async () => {
    const { container } = render(<Button>BUTTON</Button>)

    await screen.getByText('BUTTON')
    expect(container).toMatchSnapshot()
  })
  it('renders a outline button', async () => {
    const { container } = render(<Button variant="outline">BUTTON</Button>)

    await screen.getByText('BUTTON')
    expect(container).toMatchSnapshot()
  })

  it('renders a button with the disabled property set to true', async () => {
    // TODO: should it be separated from snapshot?
    const { container } = render(<Button disabled>BUTTON</Button>)

    const button = await screen.getByText('BUTTON')
    expect(button).toBeDisabled()

    expect(container).toMatchSnapshot()
  })

  it('renders a button with the disabled styling', async () => {
    const { container } = render(<Button disabled>BUTTON</Button>)

    await screen.getByText('BUTTON')

    expect(container).toMatchSnapshot()
  })

  // TODO: figure out accessibility test issue
  it('has no programmatically detectable a11y issues', async () => {
    render(
      <main>
        <Button>BUTTON</Button>
      </main>
    )
    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
