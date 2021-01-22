import 'jest-axe/extend-expect' // TODO: refactor into the setupFiles.js

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'
import ReactDOMServer from 'react-dom/server' // TODO: refactor into the setupFiles.js

import { Flex } from '.'

describe(`Flex component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Flex css={{ m: 'auto', height: 100, width: 100 }}>FLEX</Flex>
    )
    await screen.findByText('FLEX')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const html = ReactDOMServer.renderToString(<Flex />)
    const results = await axe(html)
    expect(results).toHaveNoViolations()
  })
})
