export const AspectRatioTokenListEditorComponent = {
  id: 'aspect-ratio-list',
  label: 'Aspect Ratio List',
  collapsed: true,
  fields: [
    {
      name: 'ratios',
      label: 'Ratios',
      widget: 'list',
      summary: '{{fields.token}}',
      fields: [{ label: 'Token', name: 'token', widget: 'string' }]
    }
  ],
  pattern: /^<AspectRatioTokenList ratios={(.*?)} \/>$/ms,
  fromBlock: function (match) {
    return {
      ratios: match[1] && JSON.parse(match[1])
    }
  },
  toBlock: function (data) {
    const ratiosString = data?.ratios
      ? JSON.stringify(data.ratios)
      : JSON.stringify([])
    return `<AspectRatioTokenList ratios={${ratiosString}} />`
  },
  toPreview: function (data) {
    const ratiosString = data?.ratios?.length
      ? JSON.stringify(data.ratios)
      : 'ALL'
    return `[AspectRatioTokenList ratios={${ratiosString}} /]`
  }
}
