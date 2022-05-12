import { Upload } from '@atom-learning/icons'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Icon } from '~/components/icon'

import { ToggleGroup } from '.'

const ToggleGroupImplementation = () => (
  <ToggleGroup.Root
    disabled={false}
    type="multiple"
    orientation="vertical"
    gap={2}
    size="sm"
    defaultValue={['item_a', 'button_a']}
  >
    <ToggleGroup.Item disabled value="item_a">
      A
    </ToggleGroup.Item>
    <ToggleGroup.Item value="item_b">B</ToggleGroup.Item>
    <ToggleGroup.Item value="item_icon">
      <Icon is={Upload} />
      Item with icon
    </ToggleGroup.Item>

    <ToggleGroup.Button disabled value="button_a">
      A
    </ToggleGroup.Button>
    <ToggleGroup.Button value="button_b">B</ToggleGroup.Button>
    <ToggleGroup.Button value="button_icon">
      <Icon is={Upload} />
      Button with icon
    </ToggleGroup.Button>
  </ToggleGroup.Root>
)

describe('ToggleGroup', () => {
  it('renders', async () => {
    const { container } = render(<ToggleGroupImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ToggleGroupImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
