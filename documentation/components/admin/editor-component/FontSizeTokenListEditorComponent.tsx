export const FontSizeTokenListEditorComponent = {
    id: "font-size-list",
    label: "Font Size List",
    collapsed: true,
    fields: [
        {
            name: "fontSizes",
            label: "Font Sizes",
            widget: "list",
            summary: "{{fields.token}}",
            fields: [{ label: "Token", name: "token", widget: "string" }],
        },
    ],
    pattern: /^<FontSizeTokenList fontSizes={(.*?)} \/>$/ms,
    fromBlock: function (match) {
        return {
            fontSizes: match[1] && JSON.parse(match[1]),
        };
    },
    toBlock: function (data) {
        const fontSizesString = data?.fontSizes ? JSON.stringify(data.fontSizes) : JSON.stringify([]);
        return `<FontSizeTokenList fontSizes={${fontSizesString}} />`;
    },
    toPreview: function (data) {
        const fontSizesString = data?.fontSizes?.length ? JSON.stringify(data.fontSizes) : 'ALL';
        return `[FontSizeTokenList fontSizes={${fontSizesString}} /]`;
    },
}