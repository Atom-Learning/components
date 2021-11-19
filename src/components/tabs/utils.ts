import React from 'react'

export const passPropsToChildren = (
  children,
  props: Record<string, any>,
  allowedChildNodeTypes: React.FunctionComponent[] = []
) => {
  return React.Children.map(children, (child) => {
    if (allowedChildNodeTypes.includes(child?.type)) {
      return React.cloneElement(child, { ...props })
    }

    return child
  })
}
