import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export const Droppable = (props) => {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        background: isOver ? 'green' : 'red',
        width: 100,
        height: 200
    };


    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}