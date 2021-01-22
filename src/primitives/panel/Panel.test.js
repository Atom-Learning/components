import { render, screen } from '@testing-library/react'
import React from 'react'

import { Panel } from './'

describe(`Panel component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Panel size="md" css={{ m: 'auto', height: 100 }}>
        PANEL
      </Panel>
    )
    await screen.findByText('PANEL')
    expect(container).toMatchSnapshot()
  })
})
