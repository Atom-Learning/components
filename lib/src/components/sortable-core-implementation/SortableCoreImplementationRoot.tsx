import { Stack } from '@atom-learning/components'
import { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as React from 'react'
import { Sortable } from '../sortable'

const orientationToDirection = (orientation) => (orientation === 'vertical' ? 'column' : 'row')

export const Root = ({ children, onSortChange = undefined, orientation, ...rest }) => {
  const direction = orientationToDirection(orientation)

  const childrenMap = useRef(new Map())

  const [order, setOrder] = useState<number[]>([])
  const childrenArray = useMemo(() => Children.toArray(children), [children])
  useEffect(() => {
    childrenMap.current.clear()
    setOrder([
      ...childrenArray.map((child) => {
        const id = child?.props?.id
        if (!id) return
        childrenMap.current.set(id, child)
        return id
      })
    ])
  }, [childrenArray])

  const handleOnSortChange = useCallback(({ order, oldIndex, newIndex }) => {
    setOrder(order)
    onSortChange?.({ order, oldIndex, newIndex })
  },
    [onSortChange]
  )

  return (
    <Sortable.Root onSortChange={handleOnSortChange} sortableIds={order} >
      <Stack direction={direction} {...rest}>{order.map((initialIndex, _currIndex) => childrenMap.current.get(initialIndex))}</Stack>
    </Sortable.Root>
  )
}
