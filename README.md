# Atom Learning Component library

https://github.com/Atom-Learning/components/workflows/ci/badge.svg

This package is one part of the Atom Learning design system

## Versioning

The project follows the SemVer standard [Semantic Versioning](https://semver.org/spec/v2.0.0.html) to make using the library easy. SemVer uses the `MAJOR`.`MINOR`.`PATCH` notation to identify changes with `MAJOR` representing breaking changes that are not backwards compatible, `MINOR` representing new features / non-breaking additions and `PATCH` representing fixes.

It is also a requirement to use [Semantic commits](https://www.conventionalcommits.org/en/v1.0.0/) as each tag will translate to a different type of version upgrade. For example:

- Commits with a `breaking change` will be associated with a major release.
- Commits with type 'feat' will be associated with a minor release.
- Commits with type 'fix' will be associated with a patch release.

_Note:_ The `precommit` hooks will prevent commits that don't have the required tag prefixed to the message

Versioning happens automatically when a feature branch gets merged into `main`. [semantic-release](https://github.com/semantic-release/semantic-release) is employed to calculate the new version number by running through all the new commits and their commit message tag. Once the new version is calculated, it updates the package.json and automatically updates the `CHANGELOG.md`. Then it proceeds to publish the new version both in `GitHub` and `npm`.

_Note:_ Once a branch gets merged into `main`, it is automatically published, therefore `main` always needs to be in a pristine state. For that reason, following the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) model, all work needs to happen into a branch, and `main` is locked

### Purpose

- To ensure that each version is marked clearly and can be consumed without any issues
- To reduce the amount of manual effort required to publish a new version
- To help enforce the selected standards and frameworks, and reduce the room for human error

### Tools

- [Semantic-release](https://github.com/semantic-release/semantic-release)
- Plugins:
  - `@semantic-release/commit-analyzer` - checks commits messages for the required tags
  - `@semantic-release/release-notes-generator` - creates/updates the release notes
  - `@semantic-release/npm` - publishes version to `npm`
  - `@semantic-release/github` - publishes version to `GitHub Releases`
- `husky` - precommit hook to prevent incomplete commit messages

## Accessibility

The design system is aiming to adhere to strict accessibility standards with AA as the minimum. To enable this, `eslint-plugin-jsx-a11y` is set to strict mode.
Different tools are used to validate the components as each serves a different purpose. The a11y storybook addon will validate all the stories and explain each violation, whereas the accessibility unit tests will fail the pipeline and prevent releasing inaccessible components. **_However, these tests are only valid with the context they are testing on, so they can't guarantee 100% that a component is fully accessible._** Therefore, please add stories for all the variations a component has. Also, there is a need for manual testing and design validation.

Before developing a component, please take some time to read the following sections and the reading provided.

### Things to consider whilst developing

- Using `React.Fragment` where possible to avoid adding extra `<div>`
  > Sometimes we break HTML semantics when we add <div> elements to our JSX to make our React code work, especially when working with lists (`<ol>`, `<ul>` and `<dl>`) and the HTML `<table>`. In these cases we should rather use React Fragments to group together multiple elements. for examples please look at the [React documentation](https://reactjs.org/docs/accessibility.html)
- Utilising the [`a11y`](https://github.com/storybookjs/storybook/tree/master/addons/a11y) storybook addon that is installed
  The accessibility tab in storybook will check the component against the `aXe` accessibility rules and provide ways of solving any violations.
- Add unit tests to test accessibility
  Add an accessibility unit test (using the `jest-axe`) to ensure that the components' different variations don't have any accessibility issues. Example:

```
  it('has no programmatically detectable a11y issues', async () => {
    render(<Flex />, document.body)
    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
```

_Note:_ `axe` doesn't catch contrast issues when run on `jsdom` which `jest` is using.

- Using the React Testing Library rules into adopting a user-centric testing an approach. [Priority](https://testing-library.com/docs/queries/about/#priority)
  - Test real interactions
  - Verify the perceivable results
- Always validating any concerns with the design team
- Manually test complex components for keyboard navigation

### Things to consider whilst consuming the library

As mentioned above, accessibility testing is heavily reliant on the context, so when using the Design System in an app, please consider the following:

- Testing the components for accessibility in the context of where they are used
- Testing the entire page for at least the following:
  - contrast issues
  - keyboard navigation
  - autofocus
  - general accesibility issues
- Always raising concerns to the design team

### Reading list

- [Axe-core rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [Accessibility](https://reactjs.org/docs/accessibility.html)
- [React Library Testing - priority](https://testing-library.com/docs/queries/about/#priority)
- [Testing Accessibility](https://www.24a11y.com/2017/writing-automated-tests-accessibility/)
- [Debunking the Myth: Accessibility and React](https://www.deque.com/blog/debunking-the-myth-accessibility-and-react/)
- [Accessibility auditing with react-axe and eslint-plugin-jsx-a11y](https://web.dev/accessibility-auditing-react/)
- [jest-axe](https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library)
