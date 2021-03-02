import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Popover } from '.'

describe(`Popover component`, () => {
  it('renders a visible popover ', async () => {
    const { container } = render(<Popover show aria-label="Empty popover" />)

    await screen.getByRole('tooltip')

    // expect() no children TODO:
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a visible popover with a child', async () => {
    const { container } = render(
      <Popover show aria-label="Popover containing text">
        hello
      </Popover>
    )

    await screen.getByRole('tooltip')

    expect(screen.getByText('hello')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  // it.skip('hidden popover', async () => {
  //   const { container } = render(<Popover aria-label="Some text" />)

  //   await screen.getByRole('tooltip')

  //   expect(screen.getByRole('tooltip')).not.toBeInTheDocument()
  //   expect(screen.getByRole('tooltip')).toHaveAttribute('aria-hidden', true)

  //   // expect(container).toMatchSnapshot()
  //   expect(await axe(container)).toHaveNoViolations()
  // })

  it('renders a left aligning popover', async () => {
    const { container } = render(
      <Popover show align="left" aria-label="Some text" />
    )

    await screen.getByRole('tooltip')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it.todo('renders a passed trigger without the tooltip')
  it.todo('renders the tooltip once trigger is clicked')
})
