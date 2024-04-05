import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { expectToThrow } from '../../../test/custom-assertions/expect-to-throw'
import { Icon } from '../icon/Icon'
import { Tooltip } from '../tooltip'
import { ActionIcon } from '.'

const customRender = (children) =>
  render(<Tooltip.Provider>{children}</Tooltip.Provider>)

describe('ActionIcon component', () => {
  it('renders', async () => {
    const { container } = customRender(
      <ActionIcon label="Mark as complete" onClick={() => null}>
        <Icon is={() => <svg />} />
      </ActionIcon>
    )

    expect(container).toMatchSnapshot()
  })

  it('throws with missing or invalid child', async () => {
    expectToThrow(() => customRender(<ActionIcon />))

    expectToThrow(() => customRender(<ActionIcon>An invalid child</ActionIcon>))

    expectToThrow(() =>
      customRender(
        <ActionIcon>
          <p>An invalid child</p>
        </ActionIcon>
      )
    )
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = customRender(
      <ActionIcon label="Mark as complete">
        <Icon is={() => <svg />} />
      </ActionIcon>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a link', () => {
    customRender(
      <ActionIcon label="Mark as complete" href="/somewhere">
        <Icon is={() => <svg />} />
      </ActionIcon>
    )
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/somewhere')
    expect(screen.queryByRole('link')).not.toHaveAttribute('target')
    expect(screen.queryByRole('link')).not.toHaveAttribute('rel')
  })

  it('renders an external link with the correct attributes', () => {
    const { container } = customRender(
      <ActionIcon label="Mark as complete" href="https://www.google.com">
        <Icon is={() => <svg />} />
      </ActionIcon>
    )
    expect(screen.queryByRole('link')).toHaveAttribute(
      'href',
      'https://www.google.com'
    )
    expect(screen.queryByRole('link')).toHaveAttribute('target', '_blank')
    expect(screen.queryByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    )

    expect(container).toMatchSnapshot()
  })

  it('renders a disabled link', () => {
    customRender(
      <ActionIcon
        disabled
        label="Mark as complete"
        href="https://www.google.com"
        role="link"
      >
        <Icon is={() => <svg />} />
      </ActionIcon>
    )

    expect(screen.queryByRole('link')).not.toHaveAttribute('href')
    expect(screen.queryByRole('link')).toHaveAttribute('target')
    expect(screen.queryByRole('link')).toHaveAttribute('rel')
  })
})
