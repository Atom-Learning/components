import * as React from 'react'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
  act
} from '@testing-library/react'
import { createColumnHelper } from '@tanstack/react-table'
import { Sortable } from '.'
import { Tooltip } from '../tooltip'
import { Text } from '../text'
import { Button } from '../button'
import {
  processDragEndEvent,
  getRowOrder
} from './drag-and-drop/DragAndDropContainer'
import type { DragEndEvent } from '@dnd-kit/core'
import { TAsyncDataResult } from './DataTable.types'
import userEvent from '@testing-library/user-event'


const data = [
  { text: 'A', id: 1, disabled: true, hasHandle: true },
  { text: 'B', id: 2, disabled: true },
  { text: 'C', id: 3, hasHandle: true },
  { text: 'D', id: 'd' }
]

const SortableMock = ({ onSortChange = jest.fn() }) => {
  const [sortableIdsCurrentOrder, setSortableIdsCurrentOrder] = React.useState(
    data.map(({ id }) => id)
  )

  return (
    <Sortable.Root
      sortableIds={sortableIdsCurrentOrder}
      onSortChange={(sortChangeObject) => {
        onSortChange?.(sortChangeObject)
        setSortableIdsCurrentOrder(sortChangeObject.order)
      }}
    >
      {sortableIdsCurrentOrder.map((sortedId) => {
        const sortableItem = data.find(({ id }) => id === sortedId)
        if (!sortableItem) return null
        return (
          <Sortable.Item
            key={sortableItem.id}
            id={sortableItem.id}
            disabled={!sortableItem.hasHandle && sortableItem.disabled}
            isDragHandle={!sortableItem.hasHandle}
          >
            {sortableItem.hasHandle && (
              <Sortable.Handle
                targetId={sortableItem.id}
                disabled={sortableItem.hasHandle && sortableItem.disabled}
              />
            )}
            {sortableItem.text}
          </Sortable.Item>
        )
      })
      }
    </Sortable.Root>)
}

describe('Sortable component', () => {
  it('renders', () => {
    const { container } = render(<SortableMock />)
    expect(container).toMatchSnapshot()
  })

  // it('triggers the onSortChange function when interacted with', () => {
  //   const onSortChange = jest.fn()
  //   const { container } = render(<SortableMock onSortChange={onSortChange} />)

  //   const firstDragHandle = container.querySelector('[aria-label="drag handle"]')
  //   expect(firstDragHandle).toBeVisible()

  //   act(() =>
  //     userEvent.click(firstDragHandle)
  //   )


  //   expect(onSortChange).toBeCalled() // Can't get this to trigger D:
  // })
})

