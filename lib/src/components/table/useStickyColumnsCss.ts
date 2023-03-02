import * as React from 'react'

import { CSS } from '../../stitches'

interface IUseStickyColumnsCss {
  columnsCss: CSS
}

export const useStickyColumnsCss = (
  numberOfStickyColumns: number,
  wrapperRef: React.RefObject<HTMLTableSectionElement>
): IUseStickyColumnsCss => {
  const [columnsCss, setColumnsCss] = React.useState<CSS>({})

  React.useLayoutEffect(() => {
    if (!numberOfStickyColumns) return

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
            left: `${accWidth}px`,
            minWidth: `${column.offsetWidth}px`, // fixing width for sticky columns
            zIndex: '2'
          }
      }

      accWidth += tableHeaderCells?.item(index).clientWidth || 0

      return cssObject
    }, {} as CSS)

    setColumnsCss(newColumnsCss)
  }, [numberOfStickyColumns, wrapperRef])

  return {
    columnsCss
  }
}
