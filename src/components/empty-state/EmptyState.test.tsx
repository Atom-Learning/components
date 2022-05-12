import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { EmptyState } from '.'

const SimpleExample = () => (
  <EmptyState>
    <EmptyState.Title>No users found!</EmptyState.Title>
    <EmptyState.Body>
      You need to add some users before you can use this feature
    </EmptyState.Body>
  </EmptyState>
)

describe('EmptyState component', () => {
  it('renders a component', async () => {
    const { container } = render(<EmptyState />)

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
