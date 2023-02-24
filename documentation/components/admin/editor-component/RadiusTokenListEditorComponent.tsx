export const RadiusTokenListEditorComponent = {
    id: "radius-list",
    label: "Radius List",
    collapsed: true,
    fields: [
        {
            name: "radii",
            label: "Radii",
            widget: "list",
            summary: "{{fields.token}}",
            fields: [{ label: "Token", name: "token", widget: "string" }],
        },
    ],
    pattern: /^<RadiusTokenList radii={(.*?)} \/>$/ms,
    fromBlock: function (match) {
        return {
            radii: match[1] && JSON.parse(match[1]),
        };
    },
    toBlock: function (data) {
        const radiiString = data?.radii ? JSON.stringify(data.radii) : JSON.stringify([]);
        return `<RadiusTokenList radii={${radiiString}} />`;
    },
    toPreview: function (data) {
        const radiiString = data?.radii?.length ? JSON.stringify(data.radii) : 'ALL';
        return `[RadiusTokenList radii={${radiiString}} /]`;
    },
}