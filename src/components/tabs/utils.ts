import React from 'react'

export const passPropsToChildren = (
  children,
  props: Record<string, any>,
  allowedChildNodeTypes: any[] = []
) => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }

    if (allowedChildNodeTypes.includes(child?.type)) {
      return React.cloneElement(child, { ...props })
    }

    return child
  })
}
