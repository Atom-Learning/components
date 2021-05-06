import theme from '@atom-learning/theme'
import { render, screen } from '@testing-library/react'
import * as React from 'react'

import { Divider } from '../divider'
import { Heading } from '../heading'
import { Image } from '../image'
import { List } from '../list'
import { Text } from '../text'
import { StackContent } from '.'

describe('StackContent component', () => {
  it('applies styles correctly to children', async () => {
    render(
      <StackContent>
        <Heading>HEADING</Heading>
        <Text>TEXT</Text>
        <List>
          <List.Item />
        </List>
        <Image src="" />
        <Divider />
      </StackContent>
    )

    const headingStyle = getComputedStyle(screen.getByText('HEADING'))
    expect(headingStyle.maxWidth).toBe('75ch')

    const textStyle = getComputedStyle(screen.getByText('TEXT'))
    expect(textStyle.maxWidth).toBe('75ch')

    const listStyle = getComputedStyle(screen.getByRole('list'))
    expect(listStyle.maxWidth).toBe('75ch')

    const imgStyle = getComputedStyle(screen.getByRole('img'))
    expect(imgStyle.display).toBe('block')

    const dividerStyle = getComputedStyle(screen.getByRole('separator'))
    expect(dividerStyle.marginTop).toBe(theme.space[5])
    expect(dividerStyle.marginBottom).toBe(theme.space[5])
  })
})
