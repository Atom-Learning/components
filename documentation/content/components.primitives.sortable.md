---
slug: sortable
title: Sortable
links:
  viewSource: components/sortable
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Lets users sort an array of sibling elements via drag and drop.


      Functionality based on [`dndkit's useSortable`](https://docs.dndkit.com/presets/sortable/usesortable),

      which is implemented as a basic use-case component, and allows for:


      * horizontal, vertical and grid sort

      * a11y controls


      (!) This version of the component is a primitive and not to be used by itself directly in core. It is meant as a utility layer so as to not repeat code relevant to interacting with `useSortable`.


      All implementations require:


      * the `.Root` level component to be passed an array of `sortableIds` on which to apply the sorting. Additionally, requires an `onSortChange` function to call so that the implementation receives the new order of items to manually render appropriately.

      * the `.Item` level component to be passed in a unique (to its siblings) `id`, the same id which coresponds to it from the `sortableIds` array.

      * the `.Handle` level component to be passed in the same `targetId` as the `id` of the `.Item` it controls.


      The entire `Sortable.Item` can act as a draggable Item button itself by pasing the `isDragHandle` prop to it, however, it is usually prefered to control `Sortable.Item` via a nested `Sortable.Handle` button so as to allow for any content in the Item itself and avoid nested buttons which is invalid HTML.


      ## Example usage


      <CodeBlock live={false} preview={false} code={`const sortableItems = [
        { text: 'A', id: 1, disabled: true, hasHandle: true },
        { text: 'B', id: 2, disabled: true },
        { text: 'C', id: 3, hasHandle: true },
        { text: 'D', id: 'd' }
      ]`} language={"tsx"} />


      <CodeBlock live={false} preview={false} code={`const [sortableIdsCurrentOrder, setSortableIdsCurrentOrder] = React.useState(
        sortableItems.map(({ id }) => id)
      )`} language={"tsx"} />


      <CodeBlock live={false} preview={false} code={`<Sortable.Root
        sortableIds={sortableIdsCurrentOrder}
        onSortChange={({ order }) => {
          setSortableIdsCurrentOrder(order)
        }}
      >
        {sortableIdsCurrentOrder.map((sortedId) => {
          const sortableItem = sortableItems.find(({ id }) => id === sortedId)
          if (!sortableItem) return null
          return (
            <Sortable.Item
              key={sortableItem.id}
              id={sortableItem.id}
              disabled={!sortableItem.hasHandle && sortableItem.disabled}
              isDragHandle={!sortableItem.hasHandle}
              asChild
            >
              <Flex>
                {sortableItem.hasHandle && (
                  <Sortable.Handle
                    targetId={sortableItem.id}
                    disabled={sortableItem.hasHandle && sortableItem.disabled}
                  />
                )}
                {sortableItem.text}
              </Flex>
            </Sortable.Item>
          )
        })}
      </Sortable.Root>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Sortable.Root" />


      <ComponentProps component="Sortable.Item" />


      <ComponentProps component="Sortable.Handle" />
parent: DTp2m8Cs7Kzg_CL4F5zd_
uuid: 2b24a8cc-ea59-4288-a1ef-c5fd541cd507
nestedSlug:
  - components
  - primitives
  - sortable
---
