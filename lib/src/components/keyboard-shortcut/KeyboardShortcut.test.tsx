import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { KeyboardShortcut } from '.'

const onKeyboardShortcutMock = jest.fn()

// WIP
describe(`KeyboardShortcut component`, () => {

  it('renders', async () => {
    const { container } = render(<KeyboardShortcut config={[{
      shortcut: { key: 'a' },
      action: onKeyboardShortcutMock
    }]}><KeyboardShortcut.Indicator>Meta + A</KeyboardShortcut.Indicator></KeyboardShortcut>)

    expect(container).toMatchSnapshot()
  })

  it('works when targeting window', async () => {
    render(<KeyboardShortcut
      config={[{
        shortcut: { key: 'a' },
        action: onKeyboardShortcutMock
      }]}
      targetWindow
    >just type</KeyboardShortcut>)

    await fireEvent.keyDown(window, {
      key: "a"
    })
    expect(onKeyboardShortcutMock).toHaveBeenCalledWith(expect.objectContaining({ shortcut: { key: 'a' } }))
  })

  it('works when targeting element', async () => {
    render(<KeyboardShortcut
      config={[{
        shortcut: { key: 'a' },
        action: onKeyboardShortcutMock
      }]}
      data-testid="keyboard-shortcut-capture-box"
      tabIndex="0"
    >focus this and type</KeyboardShortcut>)

    const keyboardCaptureBox = screen.getByTestId('keyboard-shortcut-capture-box')
    await fireEvent.keyDown(keyboardCaptureBox, {
      key: "a"
    })
    expect(onKeyboardShortcutMock).toHaveBeenCalledWith(expect.objectContaining({ shortcut: { key: 'a' } }))
  })

})
