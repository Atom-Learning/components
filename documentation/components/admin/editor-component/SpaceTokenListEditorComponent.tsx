export const SpaceTokenListEditorComponent = {
  id: 'space-list',
  label: 'Space List',
  collapsed: true,
  fields: [
    {
      name: 'spaces',
      label: 'Spaces',
      widget: 'list',
      summary: '{{fields.token}}',
      fields: [{ label: 'Token', name: 'token', widget: 'string' }]
    }
  ],
  pattern: /^<SpaceTokenList spaces={(.*?)} \/>$/ms,
  fromBlock: function (match) {
    return {
      spaces: match[1] && JSON.parse(match[1])
    }
  },
  toBlock: function (data) {
    const spacesString = data?.spaces
      ? JSON.stringify(data.spaces)
      : JSON.stringify([])
    return `<SpaceTokenList spaces={${spacesString}} />`
  },
  toPreview: function (data) {
    const spacesString = data?.spaces?.length
      ? JSON.stringify(data.spaces)
      : 'ALL'
    return `[SpaceTokenList spaces={${spacesString}} /]`
  }
}
