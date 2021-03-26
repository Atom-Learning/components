import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Stack } from '.'

describe("Stack component", () => {
  it('renders', async () => {
    const { container } = render(<Stack />)

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})