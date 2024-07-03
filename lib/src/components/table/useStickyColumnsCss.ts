import * as React from 'react'

import { CSS } from '../../stitches'

interface IUseStickyColumnsCss {
  columnsCss: CSS
}

const CONTROL_ELEMENT_WIDTH = 40
const SUBROW_PROGRESSIVE_OFFSET_STEP = 8

export const useStickyColumnsCss = ({
  numberOfStickyColumns,
  wrapperRef,
  controlColumnCount = 0,
  maxRowDepth
}: {
  numberOfStickyColumns: number
  wrapperRef: React.RefObject<HTMLTableSectionElement>
  controlColumnCount?: number
  maxRowDepth?: number
}): IUseStickyColumnsCss => {
  const [columnsCss, setColumnsCss] = React.useState<CSS>({})

  const getColumnWidth = (
    column: HTMLTableCellElement,
    columnIndex: number
  ) => {
    const elementNumber = columnIndex + 1

    if (
      controlColumnCount &&
      elementNumber <= controlColumnCount &&
      !maxRowDepth
    ) {
      return CONTROL_ELEMENT_WIDTH
    }
    if (
      controlColumnCount &&
      elementNumber <= controlColumnCount &&
      maxRowDepth
    ) {
      return (
        CONTROL_ELEMENT_WIDTH + maxRowDepth * SUBROW_PROGRESSIVE_OFFSET_STEP
      )
    }
    return column.offsetWidth
  }

  const generateColumnsCss = React.useCallback(() => {
    let accWidth = 0

    // Getting the table header cells elements to use their width to set the left position in the sticky columns.
    const tableHeaderCells = wrapperRef.current?.querySelectorAll('th')
    const tableHeaderElements = Array.from(tableHeaderCells || [])

    // Getting only the number of sticky columns from the elements array that is what we are interested in.
    const stickyColumns = tableHeaderElements.slice(0, numberOfStickyColumns)

    const newColumnsCss = stickyColumns.reduce((acc: CSS, column, index) => {
      const elementNumber = index + 1
      const cssObject = {
        ...acc,
        [`& td:nth-of-type(${elementNumber}), th:nth-of-type(${elementNumber})`]:
          {
            position: 'sticky',
            left: controlColumnCount && index === 0 ? 0 : `${accWidth}px`,
            minWidth: `${getColumnWidth(column, index)}px`, // fixing width for sticky columns
            zIndex: '2'
          }
      }

      accWidth += getColumnWidth(column, index)

      return cssObject
    }, {} as CSS)

    return newColumnsCss
  }, [numberOfStickyColumns, wrapperRef, controlColumnCount])

  React.useLayoutEffect(() => {
    if (!numberOfStickyColumns) return
    const newColumnsCss = generateColumnsCss()

    setColumnsCss(newColumnsCss)
  }, [numberOfStickyColumns, wrapperRef, generateColumnsCss])

  return {
    columnsCss
  }
}
