import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { AlertProvider, useAlert } from './AlertContext'

const ComponentTest = ({ showSecondAlert, onAction = () => null }) => {
  const { showAlert } = useAlert()

  return (
    <button
      onClick={() => {
        showAlert({
          id: '1',
          title: 'TITLE',
          description: 'DESCRIPTION',
          cancelActionText: 'CANCEL',
          confirmActionText: 'CONFIRM',
          onAction
        })
        if (showSecondAlert) {
          showAlert({
            id: '2',
            title: 'TITLE 2',
            description: 'DESCRIPTION 2',
            cancelActionText: 'CANCEL',
            confirmActionText: 'CONFIRM',
            onAction
          })
        }
      }}
    >
      TRIGGER
    </button>
  )
}
const AlertContextTest = (props) => (
  <AlertProvider>
    <ComponentTest {...props} />
  </AlertProvider>
)

describe('Alert context', () => {
  it('renders the trigger with the dialog hidden by default', async () => {
    render(<AlertContextTest />)
    expect(await screen.queryByText('TITLE')).not.toBeInTheDocument()
  })

  it('opens the dialog once showAlert is called', async () => {
    render(<AlertContextTest />)
    const trigger = screen.getByText('TRIGGER')

    expect(await trigger).toBeInTheDocument()
    expect(await screen.queryByText('TITLE')).not.toBeInTheDocument()

    fireEvent.click(trigger)

    expect(await screen.queryByText('TITLE')).toBeInTheDocument()
  })

  it('onAction is called correctly', async () => {
    const onActionMock = jest.fn()
    render(<AlertContextTest onAction={onActionMock} />)
    const trigger = screen.getByText('TRIGGER')

    fireEvent.click(trigger)

    fireEvent.click(await screen.findByText('CONFIRM'))

    expect(onActionMock).toHaveBeenCalledWith(true)
  })

  it('dialog is not closed with ESC', async () => {
    const { container } = render(<AlertContextTest />)
    const trigger = screen.getByText('TRIGGER')

    expect(await trigger).toBeInTheDocument()
    expect(await screen.queryByText('TITLE')).not.toBeInTheDocument()

    fireEvent.click(trigger)

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    })

    expect(await screen.queryByText('TITLE')).toBeInTheDocument()
  })

  it('opens second dialog once first dialog is closed', async () => {
    render(
      <AlertProvider>
        <ComponentTest showSecondAlert />
      </AlertProvider>
    )
    const trigger = screen.getByText('TRIGGER')

    fireEvent.click(trigger)

    expect(await screen.queryByText('TITLE')).toBeInTheDocument()
    expect(await screen.queryByText('TITLE 2')).not.toBeInTheDocument()

    const cancelButton = screen.getByText('CANCEL')
    await fireEvent.click(cancelButton)

    expect(await screen.queryByText('TITLE')).not.toBeInTheDocument()

    expect(await screen.queryByText('TITLE')).not.toBeInTheDocument()
    expect(await screen.findByText('DESCRIPTION 2')).toBeInTheDocument()
  })
})
