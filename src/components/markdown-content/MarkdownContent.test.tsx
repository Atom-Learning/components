import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Box } from '../box'
import { Text } from '../text'
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

  it('overwrites default components', () => {
    render(
      <MarkdownContent
        content="This text will not be rendered"
        customComponents={{
          paragraph: () => <Text>This text will be rendered instead</Text>
        }}
      />
    )

    expect(screen.queryByText('This text will not be rendered')).toBeNull()
    expect(screen.getByText('This text will be rendered instead')).toBeVisible()
  })

  it('supports directives', () => {
    render(
      <MarkdownContent
        content={`:someDirective[This text will be shown as content]{aria-label="someDirective box"}`}
        customComponents={{
          textDirective: ({ node, handleNode }) => {
            const { name, attributes, children } = node

            if (name === 'someDirective') {
              return (
                <Box role="main" {...attributes}>
                  {children.map(handleNode)}
                </Box>
              )
            }

            return null
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
