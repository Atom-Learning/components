import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { Icon } from '~/components/icon'
import { Upload } from '@atom-learning/icons'

import { Chip } from './Chip'

const ChipImplementation = () => (
  <Chip>
    <Chip.Content>
      <Icon is={Upload} />
      Not the tasty kind
    </Chip.Content>
  </Chip>
)

describe('Chip component', () => {
  it('renders', async () => {
    const { container } = render(<ChipImplementation />)
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ChipImplementation />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
