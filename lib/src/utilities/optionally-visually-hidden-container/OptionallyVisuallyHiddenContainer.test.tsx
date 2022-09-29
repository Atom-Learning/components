import { render, screen } from '@testing-library/react'
import * as React from 'react'

import { OptionallyVisuallyHiddenContainer } from '.'

describe('TopBar component', () => {
  it('renders hidden content', async () => {
    const { container } = render(
      <OptionallyVisuallyHiddenContainer hidden>
        <p>hello</p>
      </OptionallyVisuallyHiddenContainer>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders visible content', async () => {
    const { container } = render(
      <OptionallyVisuallyHiddenContainer>
        <p>hello</p>
      </OptionallyVisuallyHiddenContainer>
    )

    expect(container).toMatchSnapshot()
  })
})
