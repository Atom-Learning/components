import { Ok } from '@atom-learning/icons'
import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Icon } from '../icon'
import { Button } from '.'

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
  })

  it('renders a rounded button ', async () => {
    const { container } = render(
      <Button isRounded {...props}>
        BUTTON <Icon is={Ok} />
      </Button>
    )

    await screen.getByText('BUTTON')

    expect(container).toMatchSnapshot()
  })

  describe('Loading state', () => {
    it('renders a loading button', async () => {
      const { container } = render(
        <Button isLoading {...props}>
          BUTTON
        </Button>
      )

      // expect(await screen.queryByText('BUTTON')).not.toBeVisible()
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

    it('renders an anchor if provided a link', async () => {
      render(<Button href="https://atomlearning.co.uk">ATOM</Button>)

      expect(await screen.findByRole('link')).toHaveAttribute(
        'href',
        'https://atomlearning.co.uk'
      )
    })
  })
})
