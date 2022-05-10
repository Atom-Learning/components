import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { EmptyStates } from '.'
// import lg from './lg1.svg'

const SimpleExample = () => (
  <EmptyStates size="lg" color="grey">
    <EmptyStates.Image src="" />
    <EmptyStates.Title>No users found!</EmptyStates.Title>
    <EmptyStates.Body>
      You need to add some users before you can use this feature
    </EmptyStates.Body>
  </EmptyStates>
)

describe('EmptyStates component', () => {
  it.skip('renders', async () => {
    const { container } = render(<EmptyStates />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<EmptyStates />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
