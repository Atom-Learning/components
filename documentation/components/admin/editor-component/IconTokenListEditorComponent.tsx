export const IconTokenListEditorComponent = {
  id: 'icon-list',
  label: 'Icon List',
  collapsed: true,
  fields: [
    {
      name: 'showSearch',
      label: 'Show Search',
      widget: 'boolean'
    },
    {
      name: 'icons',
      label: 'Icon',
      widget: 'list',
      summary: '{{fields.token}}',
      fields: [{ label: 'Token', name: 'token', widget: 'string' }]
    }
  ],
  pattern: /^<IconTokenList showSearch={(.*?)} icons={(.*?)} \/>$/ms,
  fromBlock: function (match) {
    return {
      showSearch: match[1] === 'true',
      icons: JSON.parse(match[2])
    }
  },
  toBlock: function (data) {
    const iconsString = data?.icons
      ? JSON.stringify(data.icons)
      : JSON.stringify([])
    return `<IconTokenList showSearch={${data.showSearch}} icons={${iconsString}} />`
  },
  toPreview: function (data) {
    const iconsString = data?.icons?.length ? JSON.stringify(data.icons) : 'ALL'
    return `[IconTokenList showSearch={${data.showSearch}} icons={${iconsString}} /]`
  }
}
