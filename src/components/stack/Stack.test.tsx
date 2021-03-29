import { render } from '@testing-library/react'
import * as React from 'react'

import { Stack } from '.'

describe('Stack component', () => {
  it('renders', async () => {
    const { container } = render(<Stack />)

    expect(container).toMatchSnapshot()
  })
})
