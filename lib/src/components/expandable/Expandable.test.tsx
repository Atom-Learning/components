import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Expandable } from '.'

const ExampleExpandable = (props) => (
  <Expandable {...props}>
    <Expandable.Header>
      <Expandable.Brand>
        <Expandable.BrandLogo alt="Logo" src="" />
      </Expandable.Brand>
    </Expandable.Header>
    <Expandable.Main>Main content</Expandable.Main>
    <Expandable.Footer>Footer content</Expandable.Footer>
  </Expandable>
)

describe('Expandable component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleExpandable />)
    expect(container).toMatchSnapshot()
  })

  it('renders as static type', async () => {
    const { container } = render(<ExampleExpandable type="static" />)
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleExpandable />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders', async () => {
    const { container } = render(<ExampleExpandable role="navigation" />)

    const sidebar = screen.getByRole('navigation')
    userEvent.hover(sidebar)
    expect(container).toMatchSnapshot()
  })
})
