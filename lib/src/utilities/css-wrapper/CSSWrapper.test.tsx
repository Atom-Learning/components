import { render, screen } from '@testing-library/react'
import React from 'react'

import { CSSWrapper } from '.'

describe('CSSWrapper component', () => {
  it('renders if passed CSS blob', async () => {
    const { container } = render(
      <CSSWrapper css={{ m: 'auto', height: 100, width: 100 }}>
        <p>Example text</p>
      </CSSWrapper>
    )
    await container.querySelector('div')
    expect(container).toMatchSnapshot()
  })

  it("doesn't render if not passed CSS blob", async () => {
    const { container } = render(
      <CSSWrapper>
        <p>Example text</p>
      </CSSWrapper>
    )
    const wrapper = await container.querySelector('div')
    expect(wrapper).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
