import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Carousel } from '.'

describe('Carousel component', () => {
  it('renders', async () => {
    const { container } = render(<Carousel />)

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
