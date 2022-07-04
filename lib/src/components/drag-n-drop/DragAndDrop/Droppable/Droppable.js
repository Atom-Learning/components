import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import Panel from '~/_generic-components/panel/Panel'

import { getParticleItemId } from '../../../_utils/helpers'
import { ParticleItem } from '../../ParticleItem/ParticleItem'
import styles from '../DragAndDrop.module.scss'

export const Droppable = ({
  particle,
  handleDelete,
  handleUpdateParticleItem,
  handleMoveParticleItem,
  handleUpdateConfig,
  allowDrop,
  drop,
  isDragging,
  isDraggingOver,
  isEditable,
  drag
}) => {
  const screens = particle?.items ? Object.keys(particle?.items) : null

  if (!screens) return null

  return screens?.map((screen, i) => {
    return (
      <div className={styles.screen} key={screen}>
        <button
          className={styles.screen_delete}
          onClick={() => handleDelete('screen', screen)}
        >
          DELETE
        </button>

        <div
          size="sm"
          className={clsx(
            styles.screen_content,
            isDraggingOver && styles.highlighted,
            !particle.items[screen]?.length && styles.empty
          )}
          drag={drag}
          drop={isEditable && drop}
          allowdrop={(isEditable && allowDrop).toString()}
          onDrop={isEditable ? () => drop(event, screen) : ''}
          onDragOver={isEditable && allowDrop}
        >
          {Boolean(particle.items[screen]?.length) &&
            particle.items[screen].map((item) => {
              return (
                <ParticleItem
                  key={getParticleItemId(item)}
                  item={item}
                  screenId={screen}
                  isFirstItem={item.order === 1}
                  isLastItem={item.order === particle.items[screen].length}
                  isDragging={isDragging}
                  drag={drag}
                  handleUpdateConfig={handleUpdateConfig}
                  handleDeleteItem={handleDelete}
                  handleUpdateParticleItem={handleUpdateParticleItem}
                  handleMoveParticleItem={handleMoveParticleItem}
                  isEditable={isEditable}
                />
              )
            })}
        </div>
        {Boolean(screens.length > 1 && screens.length !== i + 1) && (
          <Panel.Divider />
        )}
      </div>
    )
  })
}

Droppable.propTypes = {
  particle: PropTypes.shape({
    items: PropTypes.shape({
      [PropTypes.string]: PropTypes.arrayOf(
        PropTypes.shape({
          id_particle_item: PropTypes.number,
          id_particle: PropTypes.number,
          id: PropTypes.number,
          category: PropTypes.oneOf([
            'static',
            'interactive',
            'testing',
            'learning'
          ]),
          elementType: PropTypes.string,
          order: PropTypes.number,
          particleScreen: PropTypes.string,
          position: PropTypes.oneOf(['full', 'left', 'right']),
          config: PropTypes.object
        })
      )
    })
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdateParticleItem: PropTypes.func.isRequired,
  handleMoveParticleItem: PropTypes.func.isRequired,
  allowDrop: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
  drag: PropTypes.func.isRequired,
  isDragging: PropTypes.bool,
  isDraggingOver: PropTypes.bool,
  isEditable: PropTypes.bool
}
