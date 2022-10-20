# Atom Learning Design System

This repository contains a variety packages relevant to the Atom Learning Design System.

More information on each area lives in its own `README.md`:

- **`./lib`**: source for the `@atom-learning/components` package; [for more information on `./lib` see `./lib/README.md`](https://github.com/Atom-Learning/components/tree/main/lib#readme)
- **`./documentation`**: source for the documentation [website](https://design.atomlearning.technology/) ; [for more information on `./documentation` see `./documentation/README.md`](https://github.com/Atom-Learning/components/tree/main/documentation#readme)
- **`./color-sceme`**: _local only_ `@atom-learning/color-sceme` package; [for more information on `./color-sceme` see `./color-sceme/README.md`](https://github.com/Atom-Learning/components/tree/main/color-scheme#readme)

## Working with the repo for local development

(!) Don't forget to run `yarn install` to get all needed dependencies downloaded.

When developing, you will always want to be running the **library** for development: `yarn dev:lib`. Wait until this finishes building and you see a table in the terminal output before proceeding to any following steps!

To view your changes you can use either of the two ways as explained below. Regardless of which option you choose, make sure to update or add (for new components) the appropriate documentation in the NetlifyCMS website (`./documentation`) as part of your PR!

### 1: Documentation site (http://localhost:3000, http://localhost:3000/admin)

Open a new terminal for each of the below:

- `yarn server:docs` then uncomment `local_backend: true` in `/documentation/public/admin/config.yml`
- `yarn dev:docs`

#### Explanation

We can run the **documentation** site locally, with hot-reloading triggered by changes in the library. This offers a low-friction dev environment where we can see the effects of any local changes when applied to all existing components.

However, when working locally, the documentation site will not be able to authenticate you to log in. This is because the OAuth endpoint which is hit on authentication is not the `localhost` one but the live one `design.atomlearning.technology`.

This is fine, you can still log in to the documentation site by enabling local backend-end and commiting any changes manually after you finish your changes and opening a pull request.
To do that you need to uncomment `local_backend: true` in `/documentation/public/admin/config.yml` and in a terminal run `yarn server:docs` which will start the local backend node process.

Editing locally like this is faster than editing in the CMS on the live documentation site but might introduce conflicts if other editors are modifying the same files at the same time; you will need to resolve such conflicts if they exist as you would with conflicts in a regular pull request.

If, for some reason, you don't want to use the CMS you can make changes in files in `documentation/content` manually. It is not recommended as it would usually be easier to do via the CMS but it is an option. To run the documentation website for development run `yarn dev:docs`

### 2. Basic sandbox (http://localhost:1234)

In a new terminal:

- `yarn dev:sandbox`

#### Explanation

You will also be able to work on developing components via the basic sandbox; which is still available instead of adding to the NetlifyCMS documentation. Use only when developing locally and do not commit changes to the sandbox file. To run the sandbox for development: `yarn dev:sandbox`

## Tests

Currently tests only exist for `/lib` and a basic version of them can be run with `yarn test:lib`. More specific test options can be found in `/lib/package.json` and if used should be run from the `/lib` directory directly.
