import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { SearchInput } from '.'

describe('SearchInput component', () => {
  it('renders', async () => {
    const { container } = render(<SearchInput />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<SearchInput aria-label="Search" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
