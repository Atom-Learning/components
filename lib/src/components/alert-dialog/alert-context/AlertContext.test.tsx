import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from '../../button'
import { Alert, useAlert } from './AlertContext'

const ComponentTest = ({ showSecondAlert, onAction = () => null, ...rest }) => {
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
          onAction,
          ...rest
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
  <Alert.Provider>
    <ComponentTest {...props} />
  </Alert.Provider>
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
      <Alert.Provider>
        <ComponentTest showSecondAlert />
      </Alert.Provider>
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

  it('it renders confirm and cancel elements', () => {
    render(
      <AlertContextTest
        confirmElement={<Button>Yes, please delete</Button>}
        cancelElement={<Button>No, don't delete</Button>}
      />
    )

    const trigger = screen.getByText('TRIGGER')
    fireEvent.click(trigger)

    expect(screen.queryByText('TITLE')).toBeInTheDocument()
    expect(screen.queryByText('Yes, please delete')).toBeInTheDocument()
    expect(screen.queryByText("No, don't delete")).toBeInTheDocument()

    expect(screen.queryByText('CONFIRM')).not.toBeInTheDocument()
    expect(screen.queryByText('CANCEL')).not.toBeInTheDocument()
  })
})
