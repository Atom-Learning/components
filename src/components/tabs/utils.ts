import React, { JSXElementConstructor } from 'react'

export const passPropsToChildren = (
  children,
  props: Record<string, any>,
  allowedChildNodeTypes: JSXElementConstructor<any>[] = []
) => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }

    if (
      allowedChildNodeTypes.includes(child?.type as JSXElementConstructor<any>)
    ) {
      return React.cloneElement(child, { ...props })
    }

    return child
  })
}
