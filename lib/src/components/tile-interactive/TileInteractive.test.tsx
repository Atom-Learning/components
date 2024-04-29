import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ComponentsProvider } from '../../context'
import { TileInteractive } from '.'

const TileInteractiveImplementation = (props) => (
  <TileInteractive {...props} css={{ m: 'auto', size: 100 }}>
    A
  </TileInteractive>
)

describe(`TileInteractive component`, () => {
  it('renders', async () => {
    const { container } = render(<TileInteractiveImplementation />)
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<TileInteractiveImplementation />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('works with ComponentsProvider', async () => {
    const { container } = render(
      <ComponentsProvider value={{ Link: (props) => <p {...props} /> }}>
        <TileInteractiveImplementation href="/somewhere" />
      </ComponentsProvider>
    )

    expect(container.querySelector('p')).toHaveTextContent('A')
  })
})
