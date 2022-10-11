export const ColorTokenListEditorComponent = {
    id: "color-list",
    label: "Color List",
    collapsed: true,
    fields: [
        {
            name: "colors",
            label: "Colors",
            widget: "list",
            summary: "{{fields.token}}",
            fields: [{ label: "Token", name: "token", widget: "string" }],
        },
    ],
    pattern: /^<ColorTokenList colors={(.*?)} \/>$/ms,
    fromBlock: function (match) {
        return {
            colors: JSON.parse(match[1]),
        };
    },
    toBlock: function (data) {
        const colorsString = data?.colors ? JSON.stringify(data.colors) : JSON.stringify([]);
        return `<ColorTokenList colors={${colorsString}} />`;
    },
    toPreview: function (data) {
        const colorsString = data?.colors?.length ? JSON.stringify(data.colors) : 'ALL';
        return `[ColorTokenList colors={${colorsString}} /]`;
    },
}