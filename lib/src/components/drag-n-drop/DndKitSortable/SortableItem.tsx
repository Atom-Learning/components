import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem({ as: Component = 'div', sortableId, ...rest }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: sortableId });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return <Component ref={setNodeRef} style={style} {...attributes} {...listeners} {...rest} />;
}