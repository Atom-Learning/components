import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Divider } from '.'

describe('Divider component', () => {
  it('renders', async () => {
    const { container } = render(<Divider />)

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
