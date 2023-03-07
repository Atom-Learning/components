import * as React from 'react'
import { render } from '@testing-library/react'
import { Sortable } from '.'

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
      })}
    </Sortable.Root>
  )
}

describe('Sortable component', () => {
  it('renders', () => {
    const { container } = render(<SortableMock />)
    expect(container).toMatchSnapshot()
  })
})
