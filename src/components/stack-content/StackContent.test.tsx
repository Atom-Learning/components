import { render, screen } from '@testing-library/react'
import * as React from 'react'

import { Divider } from '../divider'
import { Heading } from '../heading'
import { Image } from '../image'
import { List } from '../list'
import { Text } from '../text'
import { StackContent } from '.'

describe('StackContent component', () => {
  it.skip('applies styles correctly to children', async () => {
    render(
      <StackContent>
        <Heading>HEADING</Heading>
        <Text>TEXT</Text>
        <Divider css={{ color: 'red' }} />
        <List>
          <List.Item />
        </List>
        <Image src="" />
      </StackContent>
    )

    expect(screen.getByText('HEADING')).toHaveStyle('max-width: 65ch')

    expect(screen.getByText('TEXT')).toHaveStyle('max-width: 75ch')

    expect(screen.getByRole('list')).toHaveStyle('max-width: 75ch')

    expect(screen.getByRole('img')).toHaveStyle('display: block')

    expect(screen.getByRole('separator')).toHaveStyle(
      'margin-top: var(--sx-space-5)'
    )
    expect(screen.getByRole('separator')).toHaveStyle(
      'margin-bottom: var(--sx-space-5)'
    )
    expect(screen.getByRole('separator')).toHaveStyle('color: red')
  })
})
