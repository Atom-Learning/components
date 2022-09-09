import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { InlineMessage } from './InlineMessage'

describe(`InlineMessage component`, () => {
  it('renders an inline message', async () => {
    const { container } = render(
      <InlineMessage>This is an Inline Message</InlineMessage>
    )

    await screen.getByText('This is an Inline Message')

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <InlineMessage>This is an Inline Message</InlineMessage>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('does not render icon when showIcon prop is false', async () => {
    const { container } = render(
      <InlineMessage showIcon={false}>This is an Inline Message</InlineMessage>
    )

    const icon = container.querySelector('svg')
    expect(icon).toBeFalsy()
  })
})
