import * as React from 'react'

import { Stack } from '../../stack'
import {
  closestCenter,
  DndContext,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import {
  useCallback,
  useEffect,
  useMemo,
  Children,
  useRef,
  useState
} from 'react'

import { debounce } from 'throttle-debounce'
import { useDataTable } from '../DataTableContext'

export const SortableContainer = ({ children }) => {
  const childrenArray = useMemo(() => Children.toArray(children), [children])
  const childrenMap = useRef(new Map())
  const { data } = useDataTable()

  const items = useMemo(
    () => data?.map(({ id }) => id as UniqueIdentifier),
    [data]
  )

  // useEffect(() => {
  //   childrenMap.current.clear()
  //   setOrder([
  //     ...childrenArray.map((child) => {
  //       const id = child?.props?.id
  //       if (!id) return
  //       childrenMap.current.set(id, child)
  //       return id
  //     })
  //   ])
  // }, [childrenArray])

  return (
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      {/* <Stack direction={direction} {...rest} as={as}>
        {order.map((initialIndex, _currIndex) =>
          childrenMap.current.get(initialIndex)
        )}
      </Stack> */}
      {children}
    </SortableContext>
  )
}
