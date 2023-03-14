export const DosAndDontsEditorComponent = {
  id: "dos-and-donts",
  label: "Dos and Donts",
  collapsed: true,
  fields: [
    {
      name: "items",
      label: "Items",
      widget: "list",
      summary: "{{fields.type}}: {{fields.description}}",
      fields: [
        { label: "Image", name: "image", widget: "image" },
        {
          label: "Type", name: "type", widget: "select", options: [
            { label: "Do", value: "do" },
            { label: "Avoid", value: "avoid" },
            { label: "Don't", value: 'dont' },
          ]
        },
        { label: "Description", name: "description", widget: "string" },
      ],
    }
  ],
  pattern:
    /^<DosAndDonts items={(.*?)} \/>$/ms,
  fromBlock: function (match) {
    return {
      items: JSON.parse(match[1])
    };
  },
  toBlock: function (data) {
    const itemsString = data?.items ? JSON.stringify(data.items) : JSON.stringify([]);
    return `<DosAndDonts items={${itemsString}} />`;
  },
  toPreview: function (data) {
    const itemsString = data?.items?.length ? JSON.stringify(data.items) : 'NONE';
    return `[DosAndDonts items={${itemsString}} /]`;
  },
}
