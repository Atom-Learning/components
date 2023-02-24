import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { Icon } from '~/components/icon'
import { Upload } from '@atom-learning/icons'

import { ChipDismissibleGroup } from '.'
import { Tooltip } from '../tooltip'

const ChipDismissibleGroupImplementation = () => (
  <Tooltip.Provider>
    <ChipDismissibleGroup
      onDismiss={(value) => {
        console.log(`dismiss: ${value}`)
      }}
    >
      <ChipDismissibleGroup.Item value="a" dismissActionLabel="Dismiss 'A'">
        A
      </ChipDismissibleGroup.Item>
      <ChipDismissibleGroup.Item
        value="b"
        dismissActionLabel="Dismiss 'B'"
        disabled
      >
        <Icon is={Upload} />B
      </ChipDismissibleGroup.Item>
    </ChipDismissibleGroup>
  </Tooltip.Provider>
)

describe('ChipDismissibleGroup component', () => {
  it('renders', async () => {
    const { container } = render(<ChipDismissibleGroupImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ChipDismissibleGroupImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
