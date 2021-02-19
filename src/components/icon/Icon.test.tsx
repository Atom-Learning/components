import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Check, Icon } from '.'

describe(`Icon component`, () => {
  it('renders an icon', async () => {
    const { container } = render(<Icon is={Check} title="check" />)

    await screen.getByTitle('check')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
