import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Select } from './'

describe(`Select component`, () => {
  beforeAll(() => {
    // To fix issue listed here https://github.com/nickcolley/jest-axe/issues/147
    const { getComputedStyle } = window
    window.getComputedStyle = (elt) => getComputedStyle(elt)
  })

  const mockOptions = [
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
    { label: 'Option 3', value: 'value3' }
  ]

  it('renders select with no options', async () => {
    const { container } = render(<Select aria-label="dropdown" />)
    const select = screen.getByRole('combobox')
    const options = screen.queryByRole('option')

    expect(select).toBeInTheDocument()
    expect(options).toBe(null)
    expect(container).toMatchSnapshot()
  })

  it('renders select with no options - has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Select aria-label="dropdown" />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a select with 3 options', async () => {
    const { container } = render(
      <Select aria-label="dropdown">
        {mockOptions.map((option) => (
          <option key={option.value} {...option} />
        ))}
      </Select>
    )

    const options = await screen.getAllByRole('option')

    expect(options.length).toEqual(3)
    options.forEach((option, i) => {
      expect(option).toHaveAttribute('value', mockOptions[i].value)
      expect(option).toHaveTextContent(mockOptions[i].label)
    })
    expect(container).toMatchSnapshot()
  })

  it('renders select with a default option', async () => {
    const { container } = render(
      <Select aria-label="dropdown" default="Please select:">
        {mockOptions.map((option) => (
          <option key={option.value} {...option} />
        ))}
      </Select>
    )

    const option = await screen.getByDisplayValue('Please select:')

    expect(option).toBeInTheDocument()
    expect(option).not.toHaveAttribute('value')
    expect(container).toMatchSnapshot()
  })

  it('renders an disabled select', async () => {
    const { container } = render(<Select aria-label="dropdown" disabled />)
    const select = screen.getByRole('combobox')

    expect(select).toBeInTheDocument()
    expect(select).toHaveAttribute('disabled')
    expect(container).toMatchSnapshot()
  })

  it('renders an disabled select - has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Select aria-label="dropdown" disabled />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders select with a disabled option', async () => {
    const { container } = render(
      <Select aria-label="dropdown">
        {[
          ...mockOptions,
          { label: 'Option 4', value: 'value4', disabled: true }
        ].map((option) => (
          <option key={option.value} {...option} />
        ))}
      </Select>
    )
    const options = await screen.getAllByRole('option')

    expect(options.length).toEqual(4)
    expect(options[0]).not.toHaveAttribute('disabled')
    expect(options[3]).toHaveAttribute('disabled')
    expect(container).toMatchSnapshot()
  })

  it('renders select with a disabled option - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Select aria-label="dropdown">
        {[
          ...mockOptions,
          { label: 'Option 4', value: 'value4', disabled: true }
        ].map((option) => (
          <option key={option.value} {...option} />
        ))}
      </Select>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
