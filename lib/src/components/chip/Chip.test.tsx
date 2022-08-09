import { fireEvent, render, screen } from '@testing-library/react'
import { Hamburger } from '@atom-learning/icons'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Chip } from './Chip'

describe('Badge component', () => {
  it('renders and displays passed in label', async () => {
    const { container } = render(<Chip label="Not the tasty kind" />)
    expect(await screen.findByText('Not the tasty kind')).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Chip label="Not the tasty kind" />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders close icon in input mode', async () => {
    render(<Chip label="input chip" mode="input" />)

    expect(await screen.findByRole('button', { name: 'Close' })).toBeVisible()
  })

  it('does not render close icon in filter mode', async () => {
    render(<Chip label="filter chip" />)

    expect(
      await screen.queryByRole('button', { name: 'Close' })
    ).not.toBeInTheDocument()
  })

  it('renders custom icon in input mode', async () => {
    render(<Chip label="Chips go with" icon={Hamburger} mode="input" />)

    expect(await screen.findByLabelText('ChipIcon')).toBeVisible()
  })

  it('renders tick icon in filter mode when selected', async () => {
    render(<Chip label="Selected chip" selected />)

    expect(await screen.findByLabelText('SelectedIcon')).toBeVisible()
  })

  it('does not render tick icon in filter mode when unselected', async () => {
    render(<Chip label="Unselected chip" selected={false} />)

    expect(
      await screen.queryByLabelText('SelectedIcon')
    ).not.toBeInTheDocument()
  })

  it('becomes selected when clicked on in filter mode', async () => {
    render(<Chip label="Unselected chip" selected={false} />)

    expect(
      await screen.queryByLabelText('SelectedIcon')
    ).not.toBeInTheDocument()

    const chip = await screen.findByText('Unselected chip')
    fireEvent.click(chip)

    expect(await screen.findByLabelText('SelectedIcon')).toBeVisible()
  })

  it('becomes unselected when clicked on in filter mode', async () => {
    render(<Chip label="Selected chip" selected />)

    expect(await screen.findByLabelText('SelectedIcon')).toBeVisible()

    const chip = await screen.findByText('Selected chip')
    fireEvent.click(chip)

    expect(
      await screen.queryByLabelText('SelectedIcon')
    ).not.toBeInTheDocument()
  })
})
