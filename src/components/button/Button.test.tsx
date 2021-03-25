import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Button } from '.'

describe(`Button component`, () => {
  const props = { onClick: jest.fn() }

  it('renders a button', async () => {
    const { container } = render(<Button {...props}>BUTTON</Button>)

    await screen.getByText('BUTTON')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a outline button', async () => {
    const { container } = render(
      <Button appearance="outline" {...props}>
        BUTTON
      </Button>
    )

    await screen.getByText('BUTTON')
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled button', async () => {
    const { container } = render(
      <Button disabled {...props}>
        BUTTON
      </Button>
    )

    const button = await screen.getByText('BUTTON')

    expect(button).toBeDisabled()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled secondary outline button', async () => {
    const { container } = render(
      <Button disabled appearance="outline" theme="secondary" {...props}>
        BUTTON
      </Button>
    )

    const button = await screen.getByText('BUTTON')

    expect(button).toBeDisabled()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('onClick is called when button is clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>BUTTON</Button>)

    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalled()
  })

  it.only('is polymorphic', async () => {
    render(
      <Button as="a" href="https://app.atomlearning.co.uk">
        BUTTON
      </Button>
    )

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://app.atomlearning.co.uk')
  })

  describe('Loading state', () => {
    it('renders a loading button', async () => {
      const { container } = render(
        <Button isLoading {...props}>
          BUTTON
        </Button>
      )

      expect(await screen.queryByText('BUTTON')).not.toBeVisible()
      expect(await screen.getByRole('alert')).toBeInTheDocument()

      expect(container).toMatchSnapshot()
      expect(await axe(container)).toHaveNoViolations()
    })

    it('onClick is prevented if button is in loading state', async () => {
      const handleClick = jest.fn()
      render(
        <Button onClick={handleClick} isLoading>
          BUTTON
        </Button>
      )

      fireEvent.click(screen.getByRole('button'))

      expect(handleClick).toHaveBeenCalledTimes(0)
    })
  })
})
