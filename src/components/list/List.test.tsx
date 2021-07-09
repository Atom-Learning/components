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
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders an unordered list by default', () => {
    const { container } = render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    )

    expect(container.querySelector('ul')).toBeVisible()
  })

  it('renders an ordered list if the ordered prop is passed', () => {
    const { container } = render(
      <List ordered>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    )

    expect(container.querySelector('ol')).toBeVisible()
  })
})
