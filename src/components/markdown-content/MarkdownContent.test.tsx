import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Box } from '../box'
import { MarkdownContent } from '.'
import { mockMarkdown } from './__mockdata__/mockMarkdown'

describe('MarkdownContent component', () => {
  it('renders', async () => {
    const { container } = render(<MarkdownContent content={mockMarkdown} />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<MarkdownContent content={mockMarkdown} />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('supports directives', () => {
    render(
      <MarkdownContent
        content={`:someDirective[This text will be shown as content]{aria-label="someDirective box"}`}
        handleDirectives={(node, handleNode) => {
          if (node.name === 'someDirective') {
            return (
              <Box role="main" {...node.attributes}>
                {node.children.map(handleNode)}
              </Box>
            )
          }
        }}
      />
    )

    const box = screen.getByRole('main', { name: 'someDirective box' })
    const text = screen.getByText('This text will be shown as content')

    expect(box).toBeVisible()
    expect(box).toContainElement(text)
  })
})
