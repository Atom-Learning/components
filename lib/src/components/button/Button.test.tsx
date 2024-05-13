import { Ok } from '@atom-learning/icons'
import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Icon } from '../icon'
import { Button } from '.'
import { ComponentsProvider } from '../../context'

describe(`Button component`, () => {
  const props = { onClick: jest.fn() }

  it('renders a button', async () => {
    const { container } = render(<Button {...props}>BUTTON</Button>)

    await screen.getByText('BUTTON')

    expect(container).toMatchSnapshot()
  })

  it('renders a button - has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Button {...props}>BUTTON</Button>)

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
  })

  it('renders a outline button - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Button appearance="outline" {...props}>
        BUTTON
      </Button>
    )

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
  })

  it('renders a disabled button - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Button disabled {...props}>
        BUTTON
      </Button>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled warning outline button', async () => {
    const { container } = render(
      <Button disabled appearance="outline" theme="warning" {...props}>
        BUTTON
      </Button>
    )

    const button = await screen.getByText('BUTTON')

    expect(button).toBeDisabled()
    expect(container).toMatchSnapshot()
  })

  it('renders a outline button with secondary theme', async () => {
    const { container } = render(
      <Button appearance="outline" theme="secondary" {...props}>
        BUTTON
      </Button>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders a disabled warning outline button - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Button disabled appearance="outline" theme="warning" {...props}>
        BUTTON
      </Button>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a button with an icon', async () => {
    const { container } = render(
      <Button {...props}>
        BUTTON <Icon is={Ok} />
      </Button>
    )

    await screen.getByText('BUTTON')

    expect(container).toMatchSnapshot()
  })

  it('renders a button with an icon - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Button {...props}>
        BUTTON <Icon is={Ok} />
      </Button>
    )

    await screen.getByText('BUTTON')

    expect(await axe(container)).toHaveNoViolations()
  })

  it('onClick is called when button is clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>BUTTON</Button>)

    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalled()
  })

  it('is polymorphic', async () => {
    render(
      <Button as="a" href="https://app.atomlearning.co.uk">
        BUTTON
      </Button>
    )

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://app.atomlearning.co.uk')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).not.toHaveAttribute('type', 'button')
  })

  it('renders an anchor if provided a link', async () => {
    render(<Button href="/somewhere">ATOM</Button>)

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/somewhere')
    expect(link).not.toHaveAttribute('target')
    expect(link).not.toHaveAttribute('rel')
  })

  describe('Loading state', () => {
    it('renders a loading button', async () => {
      const { container } = render(
        <Button isLoading {...props}>
          BUTTON
        </Button>
      )

      expect(await screen.getByRole('alert')).toBeInTheDocument()

      expect(container).toMatchSnapshot()
      expect(await axe(container)).toHaveNoViolations()
    })

    it('renders a loading button - has no programmatically detectable a11y issues', async () => {
      const { container } = render(
        <Button isLoading {...props}>
          BUTTON
        </Button>
      )

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

    it('works with ComponentsProvider', async () => {
      const { container } = render(
        <ComponentsProvider Link={(props) => <p {...props} />}>
          <Button href="https://google.com/">EXTERNAL</Button>
          <Button href="/hello">INTERNAL</Button>
        </ComponentsProvider>
      )

      expect(container.querySelector('p')).toBeInTheDocument()
      expect(screen.getByRole('link')).toBeInTheDocument()
    })
  })
})
