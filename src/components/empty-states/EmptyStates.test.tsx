import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { EmptyStates } from '.'

const SimpleExample = () => (
  <EmptyStates size="lg">
    <EmptyStates.Title>No users found!</EmptyStates.Title>
    <EmptyStates.Body>
      You need to add some users before you can use this feature
    </EmptyStates.Body>
  </EmptyStates>
)

describe('EmptyStates component', () => {
  it('renders', async () => {
    const { container } = render(<EmptyStates />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<EmptyStates />)

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
