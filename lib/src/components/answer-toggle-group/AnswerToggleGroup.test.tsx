import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { AnswerToggleGroup } from '.'

const AnswerToggleGroupImplementation = () => (
  <AnswerToggleGroup
    type="multiple"
    defaultValue={['a', 'b']}
    onValueChange={(value) => {
      console.log(value)
    }}
  >
    <AnswerToggleGroup.Item value="a" theme="quest">A</AnswerToggleGroup.Item>
    <AnswerToggleGroup.Item value="b" state="correct" theme="quest" disabled>
      B
    </AnswerToggleGroup.Item>
    <AnswerToggleGroup.Item value="c" state="incorrect">C</AnswerToggleGroup.Item>
    <AnswerToggleGroup.Item value="d" state="skipped" disabled>
      D
    </AnswerToggleGroup.Item>
  </AnswerToggleGroup>
)

describe('AnswerToggleGroup component', () => {
  it('renders', async () => {
    const { container } = render(<AnswerToggleGroupImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<AnswerToggleGroupImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
