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
  it('renders the trigger with the dialog hidden by default', () => {
    render(<AlertContextTest />)
    expect(screen.queryByText('TITLE')).not.toBeInTheDocument()
  })

  it('opens the dialog once showAlert is called', () => {
    render(<AlertContextTest />)
    const trigger = screen.getByText('TRIGGER')

    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('TITLE')).not.toBeInTheDocument()

    fireEvent.click(trigger)

    expect(screen.queryByText('TITLE')).toBeInTheDocument()
  })

  it('onAction is called correctly', () => {
    const onActionMock = jest.fn()
    render(<AlertContextTest onAction={onActionMock} />)
    const trigger = screen.getByText('TRIGGER')

    fireEvent.click(trigger)

    fireEvent.click(screen.getByText('CONFIRM'))

    expect(onActionMock).toHaveBeenCalledWith(true)
  })

  it('dialog is not closed with ESC', () => {
    const { container } = render(<AlertContextTest />)
    const trigger = screen.getByText('TRIGGER')

    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('TITLE')).not.toBeInTheDocument()

    fireEvent.click(trigger)

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    })

    expect(screen.queryByText('TITLE')).toBeInTheDocument()
  })

  it('opens second dialog once first dialog is closed', async () => {
    render(
      <AlertProvider>
        <ComponentTest showSecondAlert />
      </AlertProvider>
    )
    const trigger = screen.getByText('TRIGGER')

    fireEvent.click(trigger)

    expect(screen.queryByText('TITLE')).toBeInTheDocument()
    expect(screen.queryByText('TITLE 2')).not.toBeInTheDocument()

    const cancelButton = screen.getByText('CANCEL')
    fireEvent.click(cancelButton)

    expect(screen.queryByText('TITLE')).not.toBeInTheDocument()
    expect(await screen.findByText('DESCRIPTION 2')).toBeInTheDocument()
  })
})
