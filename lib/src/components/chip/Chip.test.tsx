import { fireEvent, render, screen } from '@testing-library/react'
import { Hamburger } from '@atom-learning/icons'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Chip } from './Chip'

describe('Chip component', () => {
  it('renders and displays passed in label', async () => {
    const { container } = render(<Chip>Not the tasty kind</Chip>)
    expect(await screen.findByText('Not the tasty kind')).toBeVisible()

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Chip>Not the tasty kind</Chip>)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders close icon in input mode', async () => {
    render(<Chip mode="input">input chip</Chip>)

    expect(await screen.findByRole('button', { name: 'Close' })).toBeVisible()
  })

  it('does not render close icon in filter mode', async () => {
    render(<Chip>filter chip</Chip>)

    expect(
      await screen.queryByRole('button', { name: 'Close' })
    ).not.toBeInTheDocument()
  })

  it('renders custom icon in input mode', async () => {
    render(
      <Chip icon={Hamburger} mode="input">
        Chips go with
      </Chip>
    )

    expect(await screen.findByTestId('ChipIcon')).toBeVisible()
  })

  it('renders tick icon in filter mode when selected', async () => {
    render(<Chip selected>Selected chip</Chip>)

    expect(await screen.findByTestId('SelectedIcon')).toBeVisible()
  })

  it('does not render tick icon in filter mode when unselected', async () => {
    render(<Chip selected={false}>Unselected chip</Chip>)

    expect(await screen.queryByTestId('SelectedIcon')).not.toBeInTheDocument()
  })

  it('becomes selected when clicked on in filter mode', async () => {
    render(<Chip selected={false}>Unselected chip</Chip>)

    expect(await screen.queryByTestId('SelectedIcon')).not.toBeInTheDocument()

    const chip = await screen.findByText('Unselected chip')
    fireEvent.click(chip)

    expect(await screen.findByTestId('SelectedIcon')).toBeVisible()
  })

  it('becomes unselected when clicked on in filter mode', async () => {
    render(<Chip selected>Selected chip</Chip>)

    expect(await screen.findByTestId('SelectedIcon')).toBeVisible()

    const chip = await screen.findByText('Selected chip')
    fireEvent.click(chip)

    expect(await screen.queryByTestId('SelectedIcon')).not.toBeInTheDocument()
  })
})
