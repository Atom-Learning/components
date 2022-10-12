# Atom Learning Design System

![badge](https://img.shields.io/npm/v/@atom-learning/components)
![badge](https://img.shields.io/github/workflow/status/Atom-Learning/components/Test%20&%20validate)
![badge](https://img.shields.io/bundlephobia/minzip/@atom-learning/components)

This repo contains both the Design System (`./lib`) and its documentation site (`./documentation`).

`lib/`, released as `@atom-learning/components`, is a collection of generic React components built using [stitches](https://stitches.dev) and [radix](https://www.radix-ui.com/), it includes components that cover layout, content, data collection, media and a host of other UI concerns. It uses `@atom-learning/theme` to provide the design tokens for color, typography, spacing and layout.

`./documentation` is a NetlifyCMS+next.js implementation developed to allow for adding and editing markdown documentation for `@atom-learning/components`, `@atom-learning/theme`, `@atom-learning/icons`, as well as, any other design system relevant information. It is intended to be used by any editor with permissions, without the need for understanding code, markdown or git versioning. It is _not_ limited to only document the library components, but allows for any sort of design system relevent information to be documented.

### Getting started

Install the publicly available `@atom-learning/ `npm packages:

```
yarn add @atom-learning/components @atom-learning/theme @atom-learning/icons
```

Import and use in your project:

```jsx
import { Box, Heading, Text } from "@atom-learning/components";

const Component = () => {
  return (
    <Box as="article">
      <Heading css={{ mb: "$3" }}>This is a heading</Heading>
      <Text>This is a paragraph of text</Text>
    </Box>
  );
};
```

You can read more about the components included in `@atom-learning/components` at [https://design.atomlearning.technology](https://design.atomlearning.technology)

## Working with the repo for local development

We can run the documentation site locally, with hot-reloading triggered by changes in the library. This offers a low-friction dev environment where we can see the effects of any local changes when applied to all existing components.

When developing, you will always want to be running the **library** for development: `yarn dev:lib`

To view your changes you can use either of the two ways as explained below. Regardless of which option you choose, make sure to update or add (for new components) the appropriate documentation in the NetlifyCMS website as part of your PR!

### 1: Documentation site (http://localhost:3000)

The documentation itself is added via a NetlifyCMS. You will need to log in to the CMS to make changes and will need to save then refresh the page to see them. Alternatively you can make changes in files in `documentation/content` manually and commit but that is not recommended. To run the documentation for development: `yarn server:docs & yarn dev:docs`

Usually the documentation site will be internally commiting to git on every save. If you prefer to work with a local back-end and commit the changes manually at the end you can uncomment `local_backend: true` in `/documentation/public/admin/config.yml`. This will make editing faster but might introduce conflicts if other editors are modifying the same files - so it should be used with care.

### 2. Basic sandbox (http://localhost:1234)

You will also be able to work on developing components via the basic sandbox; which is still available instead of adding to the NetlifyCMS documentation. Use only when developing locally and do not commit changes to the sandbox file. To run the sandbox for development: `yarn dev:sandbox`

### Tests

Currently tests only exist for `/lib` and a basic version of them can be run with `yarn test:lib`. More specific test options can be found in `/lib/package.json` and if used should be run from the `/lib` directory directly.
