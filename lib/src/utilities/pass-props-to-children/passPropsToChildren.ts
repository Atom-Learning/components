import * as React from 'react'

export const passPropsToChildren = (
  children: React.ReactNode,
  props: Record<string, unknown>,
  allowedChildNodeTypes: React.ReactElement['type'][] = []
): React.ReactNode =>
  React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    if (allowedChildNodeTypes.includes(child.type))
      return React.cloneElement(child, { ...props, ...child.props })

    return child
  })
