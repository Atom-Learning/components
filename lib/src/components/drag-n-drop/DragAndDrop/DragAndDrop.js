import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Draggable } from './Draggable/Draggable'
import { Droppable } from './Droppable/Droppable'

export const DragAndDrop = (props) => {
  const { handleAddItem, variant } = props
  const [isDragging, setIsDragging] = useState(false)
  const [currentDragId, setCurrentDragId] = useState(null)

  const [isDraggingOver, setIsDraggingOver] = useState(false)

  const allowDrop = (ev) => {
    ev.preventDefault()
    setIsDraggingOver(true)
  }

  const drag = (ev, item) => {
    setIsDragging(true)
    setCurrentDragId(item.id)
    ev.dataTransfer.setData('itemType', item.id)
  }

  const drop = (ev, screen) => {
    ev.preventDefault()
    setCurrentDragId(null)
    const itemType = ev.dataTransfer.getData('itemType')

    handleAddItem(screen, itemType)

    setIsDragging(false)
    setIsDraggingOver(false)
    ev.dataTransfer.clearData()
  }

  const allProps = { drag, drop, currentDragId, isDraggingOver, isDragging, allowDrop, ...props }

  if (variant === 'draggable') {
    return <Draggable {...allProps} />
  }

  if (variant === 'droppable') {
    return <Droppable {...allProps} />
  }
}

DragAndDrop.propTypes = {
  variant: PropTypes.oneOf(['draggable', 'droppable']).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      component: PropTypes.node,
      canCompress: PropTypes.bool,
      icon: PropTypes.string
    })
  ),
  handleAddItem: PropTypes.func,
  particle: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdateParticleItem: PropTypes.func,
  handleUpdateConfig: PropTypes.func,
  handleMoveParticleItem: PropTypes.func,
  isEditable: PropTypes.bool
}
