import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Icon } from '../icon/Icon'
import { ActionIcon } from '.'

describe('ActionIcon component', () => {
  it('renders', async () => {
    const { container } = render(
      <ActionIcon label="Mark as complete" onClick={() => null}>
        <Icon is={() => <svg />} />
      </ActionIcon>
    )

    expect(container).toMatchSnapshot()
  })

  it('throws with missing or invalid child', async () => {
    expect(() => render(<ActionIcon />)).toThrow()

    expect(() => render(<ActionIcon>An invalid child</ActionIcon>)).toThrow()

    expect(() =>
      render(
        <ActionIcon>
          <p>An invalid child</p>
        </ActionIcon>
      )
    ).toThrow()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <ActionIcon label="Mark as complete">
        <Icon is={() => <svg />} />
      </ActionIcon>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a link', () => {
    render(
      <ActionIcon
        label="Mark as complete"
        href="https:/www.google.com"
        role="link"
      >
        <Icon is={() => <svg />} />
      </ActionIcon>
    )
    expect(screen.queryByRole('link')).toHaveAttribute(
      'href',
      'https:/www.google.com'
    )
  })

  it('renders a disabled link', () => {
    render(
      <ActionIcon
        disabled
        label="Mark as complete"
        href="https:/www.google.com"
        role="link"
      >
        <Icon is={() => <svg />} />
      </ActionIcon>
    )

    expect(screen.queryByRole('link')).not.toHaveAttribute('href')
  })
})
