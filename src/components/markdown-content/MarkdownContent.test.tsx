import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { MarkdownContent } from '.'

describe("MarkdownContent component", () => {
  it('renders', async () => {
    const { container } = render(<MarkdownContent />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<MarkdownContent />)

    expect(await axe(container)).toHaveNoViolations()
  })
})