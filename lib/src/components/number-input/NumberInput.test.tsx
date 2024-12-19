import { TooltipProvider } from '@radix-ui/react-tooltip'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { NumberInput } from '.'
import type { NumberInputProps } from './NumberInput'

const renderComponent = (props: Partial<NumberInputProps> = {}) => {
  return render(
    <TooltipProvider>
      <NumberInput name="test" aria-label="test" {...props} />
    </TooltipProvider>
  )
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

  it('should increment value when incremenent button is pressed', async () => {
    renderComponent()

    const input = screen.getByRole('spinbutton')
    const incrementBtn = screen.getByRole('button', { name: /increment/i })

    await userEvent.click(incrementBtn)
    expect(input).toHaveValue('1')

    await userEvent.click(incrementBtn)
    expect(input).toHaveValue('2')
  })

  it('should decrement value when decrement button is pressed', async () => {
    renderComponent({ defaultValue: 5 })

    const input = screen.getByRole('spinbutton')
    const decrementBtn = screen.getByRole('button', { name: /decrement/i })

    await userEvent.click(decrementBtn)
    expect(input).toHaveValue('4')

    await userEvent.click(decrementBtn)
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
    fireEvent.focus(screen.getByRole('button', { name: /decrement/i }))
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

  it('should call onValueChange prop when value changes', async () => {
    const onValueChange = jest.fn()
    renderComponent({ onValueChange })

    const incrementBtn = screen.getByRole('button', { name: /increment/i })
    await userEvent.click(incrementBtn)

    expect(onValueChange).toBeCalled()
    expect(onValueChange).toBeCalledWith(1)
  })

  it('renders lg size', async () => {
    const { container } = renderComponent({ size: 'lg' })

    expect(container).toMatchSnapshot()
  })
})
