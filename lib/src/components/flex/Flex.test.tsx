import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Flex } from '.'

const FlexImplementation = (props) => {
  return <Flex align="center" justify="center" {...props} />
}

describe(`Flex component`, () => {
  it('renders', async () => {
    const { container } = render(<FlexImplementation>Flex</FlexImplementation>)
    await screen.findByText('Flex')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(<FlexImplementation />)

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
