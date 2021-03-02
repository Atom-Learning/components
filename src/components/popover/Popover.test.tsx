import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Popover } from '.'

describe(`Popover component`, () => {
  it('renders a visible popover with no content and no children ', async () => {
    const { container } = render(<Popover visible aria-label="Empty popover" />)

    expect(await screen.getByRole('tooltip')).toHaveAttribute(
      'aria-hidden',
      'false'
    )
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a visible popover with content only', async () => {
    const { container } = render(
      <Popover visible aria-label="Popover with text" content="Content" />
    )

    await screen.getByRole('tooltip')

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders popover with the align left variant', async () => {
    const { container } = render(
      <Popover visible align="left" aria-label="Some text" content="Hello" />
    )

    await screen.getByRole('tooltip')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a child with the popover hidden', async () => {
    const { container } = render(
      <Popover visible={false} aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )

    expect(await screen.getByText('Click me')).toBeInTheDocument()
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders the tooltip once trigger is clicked', async () => {
    const handleClick = jest.fn()
    render(
      <Popover visible={false} aria-label="Popover" content="Content">
        <button onClick={handleClick}>Click me</button>
      </Popover>
    )

    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
