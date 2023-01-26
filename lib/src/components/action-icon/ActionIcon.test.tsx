import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { expectToThrow } from '../../../test/custom-assertions/expect-to-throw'
import { Icon } from '../icon/Icon'
import { Tooltip } from '../tooltip'
import { ActionIcon } from '.'

/** `ActionIcon`s that renders a tooltip so it needs a `Tooltip.Provider`.
 * In practice, `Tooltip.Provider` is rendered once at the root of an app,
 * but this wrapper provides it for these tests.
 */
const Wrapper: React.FC = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('ActionIcon component', () => {
  it('renders', async () => {
    const { container } = render(
      <Wrapper>
        <ActionIcon label="Mark as complete" onClick={() => null}>
          <Icon is={() => <svg />} />
        </ActionIcon>
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('throws with missing or invalid child', async () => {
    expectToThrow(() =>
      render(
        <Wrapper>
          <ActionIcon />
        </Wrapper>
      )
    )

    expectToThrow(() =>
      render(
        <Wrapper>
          <ActionIcon>An invalid child</ActionIcon>
        </Wrapper>
      )
    )

    expectToThrow(() =>
      render(
        <Wrapper>
          <ActionIcon>
            <p>An invalid child</p>
          </ActionIcon>
        </Wrapper>
      )
    )
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <ActionIcon label="Mark as complete">
          <Icon is={() => <svg />} />
        </ActionIcon>
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a link', () => {
    render(
      <Wrapper>
        <ActionIcon
          label="Mark as complete"
          href="https:/www.google.com"
          role="link"
        >
          <Icon is={() => <svg />} />
        </ActionIcon>
      </Wrapper>
    )
    expect(screen.queryByRole('link')).toHaveAttribute(
      'href',
      'https:/www.google.com'
    )
  })

  it('renders a disabled link', () => {
    render(
      <Wrapper>
        <ActionIcon
          disabled
          label="Mark as complete"
          href="https:/www.google.com"
          role="link"
        >
          <Icon is={() => <svg />} />
        </ActionIcon>
      </Wrapper>
    )

    expect(screen.queryByRole('link')).not.toHaveAttribute('href')
  })
})
