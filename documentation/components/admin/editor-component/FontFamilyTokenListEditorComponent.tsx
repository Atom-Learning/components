export const FontFamilyTokenListEditorComponent = {
    id: "font-family-list",
    label: "Font Family List",
    collapsed: true,
    fields: [
        {
            name: "fontFamilies",
            label: "Font Families",
            widget: "list",
            summary: "{{fields.token}}",
            fields: [{ label: "Token", name: "token", widget: "string" }],
        },
    ],
    pattern: /^<FontFamilyTokenList fontFamilies={(.*?)} \/>$/ms,
    fromBlock: function (match) {
        return {
            fontFamilies: match[1] && JSON.parse(match[1]),
        };
    },
    toBlock: function (data) {
        const fontFamiliesString = data?.fontFamilies ? JSON.stringify(data.fontFamilies) : JSON.stringify([]);
        return `<FontFamilyTokenList fontFamilies={${fontFamiliesString}} />`;
    },
    toPreview: function (data) {
        const fontFamiliesString = data?.fontFamilies?.length ? JSON.stringify(data.fontFamilies) : 'ALL';
        return `[FontFamilyTokenList fontFamilies={${fontFamiliesString}} /]`;
    },
}