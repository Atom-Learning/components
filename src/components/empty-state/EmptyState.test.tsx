import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { EmptyState } from '.'

const SimpleExample = (size) => (
  <EmptyState size={size}>
    <EmptyState.Title>No users found!</EmptyState.Title>
    <EmptyState.Body>
      You need to add some users before you can use this feature
    </EmptyState.Body>
  </EmptyState>
)

describe('EmptyState component', () => {
  it('renders a size xs component', async () => {
    const { container } = render(<SimpleExample size="xs" />)

    expect(container).toMatchSnapshot()
  })

  it('renders a size sm component', async () => {
    const { container } = render(<SimpleExample size="sm" />)

    expect(container).toMatchSnapshot()
  })

  it('renders a size md component', async () => {
    const { container } = render(<SimpleExample size="md" />)

    expect(container).toMatchSnapshot()
  })

  it('renders a size lg component', async () => {
    const { container } = render(<SimpleExample size="lg" />)

    expect(container).toMatchSnapshot()
  })

  it('renders a size xl component', async () => {
    const { container } = render(<SimpleExample size="xl" />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<EmptyState />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders title and body correctly ', async () => {
    render(<SimpleExample />)
    expect(screen.getByText('No users found!')).toBeVisible()
    expect(
      screen.getByText(
        'You need to add some users before you can use this feature'
      )
    ).toBeVisible()
  })
})
