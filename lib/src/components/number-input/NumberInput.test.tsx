import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { NumberInput } from '.'
import type { NumberInputProps } from './NumberInput'

const renderComponent = (props: Partial<NumberInputProps> = {}) => {
  return render(<NumberInput name="test" aria-label="test" {...props} />)
}

describe(`NumberInput component`, () => {
  it('renders number input ', async () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = renderComponent()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should start with defaultValue of 0', async () => {
    renderComponent()
    expect(screen.getByRole('spinbutton')).toHaveValue('0')
  })

  it('should increment value when incremenent button is pressed', () => {
    renderComponent()

    const input = screen.getByRole('spinbutton')
    const incrementBtn = screen.getByRole('button', { name: /increment/i })

    userEvent.click(incrementBtn)
    expect(input).toHaveValue('1')

    userEvent.click(incrementBtn)
    expect(input).toHaveValue('2')
  })

  it('should decrement value when decrement button is pressed', () => {
    renderComponent({ initialValue: 5 })

    const input = screen.getByRole('spinbutton')
    const decrementBtn = screen.getByRole('button', { name: /decrement/i })

    userEvent.click(decrementBtn)
    expect(input).toHaveValue('4')

    userEvent.click(decrementBtn)
    expect(input).toHaveValue('3')
  })

  it('should disable increment/decrement buttons if at min/max values', () => {
    renderComponent({ max: 10 })

    const input = screen.getByRole('spinbutton')
    const decrementBtn = screen.getByRole('button', { name: /decrement/i })
    const incrementBtn = screen.getByRole('button', { name: /increment/i })

    expect(decrementBtn).toBeDisabled()

    fireEvent.keyDown(input, { key: 'End' })
    expect(incrementBtn).toBeDisabled()
  })

  it('should show tooltip on disabled button hover', async () => {
    renderComponent()
    fireEvent.mouseOver(screen.getByRole('button', { name: /decrement/i }))
    expect(await screen.findByRole('tooltip')).toBeInTheDocument()
  })

  it('should increment/decrement on keyboard interaction', () => {
    renderComponent({ max: 10 })

    const input = screen.getByRole('spinbutton')
    input.focus()

    fireEvent.keyDown(input, { key: 'ArrowUp' })
    expect(input).toHaveValue('1')

    fireEvent.keyDown(input, { key: 'ArrowDown' })
    expect(input).toHaveValue('0')

    fireEvent.keyDown(input, { key: 'End' })
    expect(input).toHaveValue('10')

    fireEvent.keyDown(input, { key: 'Home' })
    expect(input).toHaveValue('0')
  })

  it('should call onChange prop when value changes', () => {
    const onChange = jest.fn()
    renderComponent({ onChange })

    const incrementBtn = screen.getByRole('button', { name: /increment/i })
    userEvent.click(incrementBtn)

    expect(onChange).toBeCalled()
    expect(onChange).toBeCalledWith(1)
  })
})
