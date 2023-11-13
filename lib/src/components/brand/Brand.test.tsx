import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Brand } from '.'

const ExampleBrand = (props) => (
  <Brand {...props}>
    <Brand.Logo src={'https://space-1.atomlearning.com/static/f61e49cfb245016e612a34818e27dcfb.svg'} />
    <Brand.Text>Atom Learning</Brand.Text>
  </Brand>
)

describe('Brand component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleBrand />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleBrand />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
