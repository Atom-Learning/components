export const ShadowTokenListEditorComponent = {
  id: 'shadow-list',
  label: 'Shadow List',
  collapsed: true,
  fields: [
    {
      name: 'shadows',
      label: 'Shadows',
      widget: 'list',
      summary: '{{fields.token}}',
      fields: [{ label: 'Token', name: 'token', widget: 'string' }]
    }
  ],
  pattern: /^<ShadowTokenList shadows={(.*?)} \/>$/ms,
  fromBlock: function (match) {
    return {
      shadows: match[1] && JSON.parse(match[1])
    }
  },
  toBlock: function (data) {
    const shadowsString = data?.shadows
      ? JSON.stringify(data.shadows)
      : JSON.stringify([])
    return `<ShadowTokenList shadows={${shadowsString}} />`
  },
  toPreview: function (data) {
    const shadowsString = data?.shadows?.length
      ? JSON.stringify(data.shadows)
      : 'ALL'
    return `[ShadowTokenList shadows={${shadowsString}} /]`
  }
}
