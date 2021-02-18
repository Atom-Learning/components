import { render, screen } from '@testing-library/react'
import React from 'react'

import { RadioButtonGroup } from '.'

describe(`RadioButtonGroup component`, () => {
  it('renders an empty radio button group', async () => {
    const { container } = render(<RadioButtonGroup />)

    const group = await screen.getByRole('radiogroup')

    expect(group.children.length).toBe(0)
    expect(container).toMatchSnapshot()
  })

  it('renders a radio button group and its children', async () => {
    const { container } = render(
      <RadioButtonGroup>
        <div>hello</div>
      </RadioButtonGroup>
    )

    await screen.getByRole('radiogroup')

    expect(container.children.length).toBe(1)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })
})
