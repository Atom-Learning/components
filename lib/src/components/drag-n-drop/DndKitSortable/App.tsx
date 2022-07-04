import * as React from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

export const App = ({ as: Component = 'div', children, defaultSort, onSortChange, ...rest }) => {
    const [items, setItems] = React.useState(defaultSort);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );


    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    React.useEffect(() => {
        onSortChange?.(items)
    }, [items])


    React.useEffect(() => {
        console.log({ c: React.Children.toArray(children) });

    }, [children])

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                <Component {...rest}>
                    {items.map((v, i) => React.Children.toArray(children).find(c => c?.props?.sortableId === v))}
                </Component>
            </SortableContext>
        </DndContext >
    );

}

App.Item = SortableItem;