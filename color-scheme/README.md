## Color Schemes (v.ALPHA)

`color-schemes/`, is a **local only** package in an alpha stage (usable but not finalised) `@atom-learning/color-schemes` which introduces a `ColorScheme` component. It has been worked on heavily in terms of considering the required options and logic from dev but is **not finished and needs more design input**.

The problem that this component was introduced to solve is the difficult way we have approached theming so far in our components.
In the past we have heavily relied on props drilling and passing down theme related stitches variants to children, which means _(1)_ the colours can easily break when the expected children are nested further than directly under the 'theme providing' parent (The component which has a `theme` prop and tries to prop-drill theme). Moreover, _(2)_ we have inconsistent naming for our themes and _(3)_ inconsistent implementations on active components since _(4)_ the theming need to be documented and coded separately for each new component.

This package introduces a solution via the `<ColorScheme />` component which allows for properties to pass a `base` (`var(--baseX)`) and `accent` (`var(--accentX)`) theme property, as well as an `interactive` contrast mode to affect all interactable components.

The props are:

- `base` is used for the base colours of the wrapped component: different tones of background and text. It currently only supports the `slate` (grey) colour but can be extended for different base colors.
- `accent` is used for highlighted elements and interactive elements of the color scheme. It can be used directly but should be used with an interactive theme for interactive elements - see `<Button />`, `Accordion.Trigger` etc. Currently allowed accents are `slate` and `blue`.
- `interactive` supports 4 versions `loContrast1` and `loContrast2` which on light color schemes are lighter and on a dark mode they would be darker (so low contrast in comparison to the background), and `hiContrast1`, `hiContrast2` which are used for the opposite.

All the color scheme configurations setup used in the component can be found in `color-scheme/src/stitches.colorscheme.config.ts`

The ColorScheme itself works by re-declaring the needed CSS variables any time it's used. It is heavily inpired by both [stitches theming guidelines](https://stitches.dev/docs/theming) and particularly by [the radix colors project](https://www.radix-ui.com/colors) of which it's almost a copy of but with our own colours defined and some aliasing to match the current design use requirements.

Currently in use by a couple of components in library and the full documentation site. This package is subject to change when the Atom Learning colour theming patterns are properly established and we can make final decisions on the colours and API. **There will be changes to this code in the future.**
