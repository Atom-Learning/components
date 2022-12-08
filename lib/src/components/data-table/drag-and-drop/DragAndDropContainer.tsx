import { useDataTable } from '../DataTableContext'
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { useState } from 'react'
import * as React from 'react'
import { DataTable } from '../DataTable'
import { Table } from '../../table'
const orientationToDirection = (orientation) =>
  orientation === 'vertical' ? 'column' : 'row'

export const DragAndDropContainer = ({
  as,
  children,
  onSortChange,
  orientation,
  ...rest
}) => {
  const { order, setData, getRowModel } = useDataTable()
  const direction = orientationToDirection(orientation)
  const [activeId, setActiveId] = useState(null)
  const { rows } = getRowModel()
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event) {
    const { active, over } = event
    if (active.id !== over.id) {
      setData((data) => {
        const oldIndex = order.indexOf(active.id)
        const newIndex = order.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  function handleDragCancel() {
    setActiveId(null)
  }

  const selectedRow = React.useMemo(() => {
    if (!activeId) {
      return null
    }
    const row = rows.find(({ original }) => original.id === activeId)
    return row
  }, [activeId, rows])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      modifiers={[restrictToVerticalAxis]}
    >
      {children}
      <DragOverlay>
        {activeId && selectedRow && (
          <Table css={{ width: '100%' }}>
            <Table.Body>
              <DataTable.Row row={selectedRow} />
            </Table.Body>
          </Table>
        )}
      </DragOverlay>
    </DndContext>
  )
}
