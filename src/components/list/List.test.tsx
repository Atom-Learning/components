import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { List } from '.'

describe(`List component`, () => {
  it('renders a list', async () => {
    const { container } = render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    )

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
