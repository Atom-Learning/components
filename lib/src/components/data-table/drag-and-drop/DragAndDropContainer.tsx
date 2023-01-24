import { useDataTable } from '../DataTableContext'
import type { TAsyncDataResult, TableData } from '../DataTable.types'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import type { UniqueIdentifier, DragEndEvent } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  sortableKeyboardCoordinates,
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import * as React from 'react'

const DragAndDropTableContext = React.createContext<{ idColumn: string }>({
  idColumn: 'id'
})
export const useDragAndDropTable = () => {
  const context = React.useContext(DragAndDropTableContext)

  if (!context)
    throw new Error(
      'useDragAndDropTable can only be called within a DragAndDropContainer'
    )

  return context
}

type DragAndDropContainerProps = {
  idColumn?: string
  onChange?: (oldIndex: number, newIndex: number, newData: TableData) => void
}

// These two funcs are exported for testing purposes. This is a non-ideal workaround to the lack of support for drag-and-drop events
// in the unit test JS environment.
export const processDragEndEvent = (
  event: { active: { id: UniqueIdentifier }; over: { id: UniqueIdentifier } },
  data: TAsyncDataResult,
  rowOrder: Array<UniqueIdentifier>,
  idColumn: UniqueIdentifier,
  onChange?: (oldIndex: number, newIndex: number, newData: TableData) => void
) => {
  const { active, over } = event
  const oldIndex = rowOrder.indexOf(active.id)
  const newIndex = rowOrder.indexOf(over?.id)
  const results = arrayMove(data.results, oldIndex, newIndex)
  onChange?.(oldIndex, newIndex, results)
  return { results, total: results.length }
}

export const getRowOrder = (data: TAsyncDataResult, idColumn: string) =>
  data.results.map((row) => {
    const id = row[idColumn]
    if (id === undefined)
      throw new Error(
        'To ensure drag-and-drop works correctly, please ensure that each row has a unique ID. Use the `id` property or pass DataTable an `idColumn` prop that defines the ID property on the rows.'
      )
    return id as UniqueIdentifier
  })

export const DragAndDropContainer: React.FC<DragAndDropContainerProps> = ({
  idColumn = 'id',
  onChange = undefined,
  children
}) => {
  const { data, setData } = useDataTable()

  const rowOrder = React.useMemo(() => getRowOrder(data, idColumn), [data])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id && over?.id && active.id !== over?.id) {
      setData((data) => {
        return processDragEndEvent(
          { active, over },
          data,
          rowOrder,
          idColumn,
          onChange
        )
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={rowOrder} strategy={verticalListSortingStrategy}>
        <DragAndDropTableContext.Provider value={{ idColumn }}>
          {children}
        </DragAndDropTableContext.Provider>
      </SortableContext>
    </DndContext>
  )
}
