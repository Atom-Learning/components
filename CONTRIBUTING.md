# Contribution Guide

When contributing to this repository, use the following information, to uphold the standards we have set for this project. Please read through this and the `README.md` before starting.

## Directory structure

Use the following directory structure and file naming conventions:

```
src/
  components/
	  component-name/
	    ComponentName.tsx
	    ComponentName.test.tsx
	    docs/
	      ComponentName.docs.mdx
	    index.ts
```

**Note:** Documentations is nested in a folder only if there are more than 1 files. If there is only 1 file then it should be in the component folder.

## Component API

### Prop validation

All components should have fully typed props.

### `css` prop

All components should accept a `css` prop. Single-child components are styled directly, while components composed of multiple components/elements use the `css` prop only for styles that affect the whole component/its relationship to other components on the page:

- If the component renders two or more sibling elements/components, wrap them in a `CSSWrapper` and pass the `css` prop to that.
- Otherwise, pass the `css` prop value directly to the direct child.

```tsx
const SimpleComponent = ({ css }) => (
  <Box css={css}> This box gets styled directly </Box>
)

const ComposedComponent = ({ css }) => (
  <CSSWrapper css={css}>
    <Box css={{ mb: '$3' }}>
      The styling of these boxes is ComposedComponent's responsibility
    </Box>
    <Box css={{ color: '$primary500' }}>
      If we want to combine boxes differently, we can compose a new component
    </Box>
  </CSSWrapper>
)
```

## Documentation

Each component should have documentation which covers the following:

- Variants
- Available component specific properties
- When it should be used
- When it _shouldn't_ be used (e.g. instead of using an `Input` directly, we'll often want to use an `InputField`)

## Tests

Please write tests to cover all the user interactions with a component. The target is to have as much test coverage as possible. Coverage is calculated when running the tests.

As a minimum the following tests are required:

- Snapshots for the different states of the component (ie, for an `accordion` cover both the collapsed and expanded states
- Snapshots for each variant that outputs different HTML
- Accessibility unit test

### Examples

```jsx
describe(`Box component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Box css={{ m: 'auto', height: 100, width: 100 }}>BOX</Box>
    )
    await screen.findByText('BOX')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(<Box />, document.body)

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
```

## Raising a PR

In the PR, include:

- A link to the ticket for the work
- A brief description of the work you've done
- Links to any designs provided
- Screenshots of the built component
- An explanation of any decisions that were made.

If any of the patterns stated above weren't followed, please explain the reasons for it.
