import { render } from '@testing-library/react'
import * as React from 'react'

import { Divider } from '../divider'
import { Heading } from '../heading'
import { Image } from '../image'
import { List } from '../list'
import { Text } from '../text'
import { StackContent } from '.'

describe('StackContent component', () => {
  it('renders a stack content', async () => {
    const { container } = render(
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

    expect(container).toMatchSnapshot()
  })
})
