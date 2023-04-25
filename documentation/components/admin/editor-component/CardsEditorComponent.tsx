export const CardsEditorComponent = {
  id: 'cards',
  label: 'Cards',
  collapsed: true,
  fields: [
    {
      label: 'Show Search',
      name: 'showSearch',
      widget: 'boolean',
      required: false
    },
    {
      label: 'Show Tags Filter',
      name: 'showTagsFilter',
      widget: 'boolean',
      required: false
    },
    {
      name: 'items',
      label: 'Items',
      widget: 'list',
      summary: '{{fields.heading}}',
      fields: [
        { label: 'Image', name: 'image', widget: 'image' },
        { label: 'Heading', name: 'heading', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'string' },
        {
          label: 'Link',
          name: 'link',
          widget: 'object',
          summary: '{{fields.href}}',
          collapsed: true,
          fields: [
            { label: 'href', name: 'href', widget: 'string' },
            {
              label: 'Is External',
              name: 'isExternal',
              widget: 'boolean',
              required: false
            }
          ]
        },
        {
          label: 'Tags',
          name: 'tags',
          widget: 'creatableSelect',
          default_options: [],
          multiple: true,
          persist_options: true
        }
      ]
    }
  ],
  pattern:
    /^<Cards showSearch={(.*?)} showTagsFilter={(.*?)} items={(.*?)} \/>$/ms,
  fromBlock: function (match) {
    return {
      showSearch: match[1] === 'true',
      showTagsFilter: match[2] === 'true',
      items: JSON.parse(match[3])
    }
  },
  toBlock: function (data) {
    const itemsString = data?.items
      ? JSON.stringify(data.items)
      : JSON.stringify([])
    return `<Cards showSearch={${!!data.showSearch}} showTagsFilter={${!!data.showTagsFilter}} items={${itemsString}} />`
  },
  toPreview: function (data) {
    const itemsString = data?.items?.length
      ? JSON.stringify(data.items)
      : 'NONE'
    return `[Cards showSearch={${data.showSearch}} showTagsFilter={${data.showTagsFilter}} items={${itemsString}} /]`
  }
}
