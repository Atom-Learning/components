import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Select } from './'

describe.only(`Select component`, () => {
  const mockOptions = [
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
    { label: 'Option 3', value: 'value3' }
  ]
  it('renders select with no options', async () => {
    const { container } = render(<Select ariaLabel="dropdown" />)
    const select = screen.getByRole('combobox')

    expect(select).toBeInTheDocument()
    expect(select.childNodes.length).toEqual(0)

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders a select with 3 options', async () => {
    const { container } = render(
      <Select ariaLabel="dropdown" options={mockOptions} />
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
      <Select
        ariaLabel="dropdown"
        defaultOption="Please select:"
        options={mockOptions}
      />
    )

    const option = await screen.getByDisplayValue('Please select:')

    expect(option).toBeInTheDocument()
    expect(container).toMatchSnapshot() // Is this needed?
  })

  it('renders an disabled select', async () => {
    const { container } = render(<Select ariaLabel="dropdown" disabled />)
    const select = screen.getByRole('combobox')

    expect(select).toBeInTheDocument()
    expect(select).toHaveAttribute('disabled')
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders select with a disabled option', async () => {
    const { container } = render(
      <Select
        ariaLabel="dropdown"
        options={[
          ...mockOptions,
          { label: 'Option 4', value: 'value4', disabled: true }
        ]}
      />
    )
    const options = await screen.getAllByRole('option')

    expect(options.length).toEqual(4)
    expect(options[0]).not.toHaveAttribute('disabled')
    expect(options[3]).toHaveAttribute('disabled')
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders an xss size select', async () => {
    const { container } = render(
      <Select ariaLabel="dropdown" size="xxs" options={mockOptions} />
    )

    await screen.getByRole('combobox')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
