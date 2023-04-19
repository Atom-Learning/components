import { render } from '@testing-library/react'
import * as React from 'react'

import { NoOverflowContainer } from '.'

describe(`NoOverflowContainer component`, () => {
  it('renders', async () => {
    const { container } = render(<NoOverflowContainer />)
    expect(container).toMatchSnapshot()
  })
})
