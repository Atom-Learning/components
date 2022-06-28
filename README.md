# Atom Learning Design System

This repo contains both the Design System (`./lib`) and its documentation site (`./site`).

## Working with the repo locally ft. useful scripts

We can run the documentation site locally, with hot-reloading triggered by changes in the library. This offers a low-friction dev environment where we can see the effects of any local changes when applied to all existing components. (Note: hot reoloading is currently only supported for changes to Typescript/.tsx files, not markdown files.)

First, run `yarn build:docs && yarn dev:lib`. `yarn build:docs` collects the markdown documentation files for each component in `lib` into its `dist` directory, where the documentation site can find them. `yarn dev:lib` compiles the React component library and watches for changes.

In another terminal, run `yarn dev:site` to run the documentation site at `http://localhost:3000`, taking the output as the previous commands as its input.

In the future, you only need to rerun `yarn build:docs` after you either delete the content of `lib/dist` or you add/update some markdown files inside `lib`.