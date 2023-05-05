import { render } from '@testing-library/react'
import * as React from 'react'

import { NoOverflowWrapper } from '.'

describe(`NoOverflowWrapper component`, () => {
  it('renders', async () => {
    const { container } = render(<NoOverflowWrapper />)
    expect(container).toMatchSnapshot()
  })
})
