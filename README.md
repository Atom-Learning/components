# Atom Learning Design System

![badge](https://img.shields.io/npm/v/@atom-learning/components)
![badge](https://img.shields.io/github/workflow/status/Atom-Learning/components/Test%20&%20validate)
![badge](https://img.shields.io/bundlephobia/minzip/@atom-learning/components)

This repo contains both the Design System (`./lib`) and its documentation site (`./site`).

`lib/`, released as `@atom-learning/components`, is a collection of generic React components built using [stitches](https://stitches.dev), it includes components that cover layout, content, data collection, media and a host of other UI concerns. It uses `@atom-learning/theme` to provide the design tokens for color, typography, spacing and layout.

```
yarn add @atom-learning/components @atom-learning/theme
```

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

## Working with the repo locally ft. useful scripts

We can run the documentation site locally, with hot-reloading triggered by changes in the library. This offers a low-friction dev environment where we can see the effects of any local changes when applied to all existing components. (Note: hot reloading is currently only supported for changes to Typescript/.tsx files, not markdown files.)

First, run `yarn build:lib && yarn build:docs`. `yarn build:docs` collects the markdown documentation files for each component in `lib` into its `dist` directory, where the documentation site can find them. `yarn build:docs` compiles the documentation and extract the component props.

In another terminal, run `yarn dev:site` to run the documentation site at `http://localhost:3000`, taking the output as the previous commands as its input.

In the future, you only need to rerun `yarn build:docs` after you either delete the content of `lib/dist` or you add/update some markdown files inside `lib`.

### Running the sandbox

The library offers sandbox capabilities to ease the development process. This run with the following command

`yarn start:sandbox`

### Tests

Make sure you run test commands for `lib` components from _within the `lib` directory_, otherwise Jest won't run with the correct configuration and it won't be able to interpret JSX.
