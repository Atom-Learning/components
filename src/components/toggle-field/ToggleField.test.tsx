import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import userEvent from '@testing-library/user-event'

import { ToggleField } from '.'

describe('ToggleField component', () => {
  it('renders', async () => {
    const { container } = render(<ToggleField label="Example Field" />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ToggleField label="Example Field" />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('links the label to an input', async () => {
    render(<ToggleField />)

    userEvent.click(await screen.findByRole('button'))

    expect(await screen.findByRole('button')).toHaveFocus()
  })
})
