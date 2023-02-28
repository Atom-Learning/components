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
    const tableHeaderElements: HTMLTableCellElement[] = []

    const tableHeaderCells = wrapperRef.current?.querySelectorAll('th')

    tableHeaderCells?.forEach((element) => tableHeaderElements.push(element))

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
  }, [])

  return {
    columnsCss
  }
}
