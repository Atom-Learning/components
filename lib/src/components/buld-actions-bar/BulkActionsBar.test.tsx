import { Bolt, Edit } from '@atom-learning/icons'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'
import { Text } from '../text'
import { BulkActionsBar } from './BulkActionsBar'

describe('BulkActionsBar component', () => {
  const renderComponent = ({ onCancel = jest.fn() } = {}) =>
    render(
      <BulkActionsBar
        label="BULK ACTIONS BAR"
        cancelLabel="CANCEL"
        onCancel={onCancel}
      >
        <BulkActionsBar.Action
          icon={Edit}
          text="EDIT"
          onClick={jest.fn()}
          isMain
        />
        <BulkActionsBar.Action
          icon={Bolt}
          text="OTHER ACTION"
          onClick={jest.fn()}
        />
      </BulkActionsBar>
    )

  it('renders a bulk actions bar', async () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('renders a button - has no programmatically detectable a11y issues', async () => {
    const { container } = renderComponent()

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders visible main actions and dropdown for other actions', async () => {
    const { container } = renderComponent()

    expect(screen.getByText('EDIT')).toBeVisible()
    expect(
      container.querySelector('[aria-label="other_actions_dropdown"')
    ).toBeVisible()
  })

  it('hides other actions dropdown when there is no other action', async () => {
    const { container } = render(
      <BulkActionsBar
        label="BULK ACTIONS BAR"
        cancelLabel="CANCEL"
        onCancel={jest.fn()}
      >
        <BulkActionsBar.Action
          icon={Edit}
          text="EDIT"
          onClick={jest.fn()}
          isMain
        />
      </BulkActionsBar>
    )

    expect(
      container.querySelector('[aria-label="other_actions_dropdown"')
    ).toBeNull()
  })

  it('onCancel is called when cancel button is clicked', async () => {
    const cancelFn = jest.fn()
    renderComponent({ onCancel: cancelFn })

    userEvent.click(screen.getByText('CANCEL'))

    await waitFor(() => {
      expect(cancelFn).toHaveBeenCalled()
    })
  })

  it('throws an error if no children is passed ', async () => {
    expect(() =>
      render(
        <BulkActionsBar
          label="BULK ACTIONS BAR"
          cancelLabel="CANCEL"
          onCancel={jest.fn()}
        />
      )
    ).toThrow('At least one child is required for BulkActionsBar')
  })

  it('throws an error if a child is not an action ', async () => {
    expect(() =>
      render(
        <BulkActionsBar
          label="BULK ACTIONS BAR"
          cancelLabel="CANCEL"
          onCancel={jest.fn()}
        >
          <Text>Not an action</Text>
        </BulkActionsBar>
      )
    ).toThrow('Children of type Text are not permitted. Only an BulkAction component is allowed in BulkActionsBar')
  })
})
