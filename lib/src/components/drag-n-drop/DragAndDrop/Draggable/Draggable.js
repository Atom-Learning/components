import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import styles from '../DragAndDrop.module.scss'

export const Draggable = ({ items, drag, isEditable, currentDragId }) => {
  return items?.map((item) => {
    return (
      <div
        key={`add-${item.id}`}
        className={clsx(
          styles.item,
          isEditable && styles.editable,
          item.toolbarSize === 'half' && styles.half,
          currentDragId === item.id && styles.dragging
        )}
      >
        <div
          id={item.id}
          draggable={isEditable}
          onDragStart={(e) => drag(e, item)}
        >
          {item.label}
        </div>
      </div>
    )
  })
}

Draggable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      component: PropTypes.node,
      canCompress: PropTypes.bool,
      icon: PropTypes.string
    })
  ).isRequired,
  drag: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  currentDragId: PropTypes.string
}
