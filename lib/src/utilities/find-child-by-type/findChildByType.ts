import * as React from 'react'

export const findChildByType = (
  children: React.ReactNode,
  componentType: React.ReactElement['type']
): React.ReactNode | null =>
  React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === componentType
  )
