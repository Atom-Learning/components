export const SizeTokenListEditorComponent = {
  id: 'size-list',
  label: 'Size List',
  collapsed: true,
  fields: [
    {
      name: 'sizes',
      label: 'Sizes',
      widget: 'list',
      summary: '{{fields.token}}',
      fields: [{ label: 'Token', name: 'token', widget: 'string' }]
    }
  ],
  pattern: /^<SizeTokenList sizes={(.*?)} \/>$/ms,
  fromBlock: function (match) {
    return {
      sizes: JSON.parse(match[1])
    }
  },
  toBlock: function (data) {
    const sizesString = data?.sizes
      ? JSON.stringify(data?.sizes)
      : JSON.stringify([])
    return `<SizeTokenList sizes={${sizesString}} />`
  },
  toPreview: function (data) {
    const sizesString = data?.sizes?.length ? JSON.stringify(data.sizes) : 'ALL'
    return `[SizeTokenList sizes={${sizesString}} /]`
  }
}
