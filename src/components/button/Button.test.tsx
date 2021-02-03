import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Button } from '.'

describe(`Button component`, () => {
  it('renders a button', async () => {
    const { container } = render(<Button>BUTTON</Button>)

    await screen.getByText('BUTTON')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders a outline button', async () => {
    const { container } = render(<Button variant="outline">BUTTON</Button>)

    await screen.getByText('BUTTON')
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled button', async () => {
    const { container } = render(<Button disabled>BUTTON</Button>)

    const button = await screen.getByText('BUTTON')

    expect(button).toBeDisabled()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled secondary outline button', async () => {
    const { container } = render(
      <Button disabled variant="outline" theme="secondary">
        BUTTON
      </Button>
    )

    const button = await screen.getByText('BUTTON')

    expect(button).toBeDisabled()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  // TODO: figure out accessibility test issue
})
