import { Ok } from '@atom-learning/icons'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Icon } from '.'

describe(`Icon component`, () => {
  it('renders an icon', async () => {
    const { container } = render(<Icon is={Ok} title="check" />)

    await screen.getByTitle('check')

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Icon is={Ok} title="check" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
