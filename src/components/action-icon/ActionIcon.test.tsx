import { render } from '@testing-library/react'
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
})
