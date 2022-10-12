---
slug: contributing
title: Contributing
tabs:
  - title: Main
    content: >-
      When contributing to this repository, use the following information to
      uphold the standards we have set for this project


      Everyone is encouraged to contribute to the development of this project. If you spot a missing component or an additional feature, please raise an issue in GitHub using the [feature request template](https://github.com/atom-learning/components/issues/new?template=request-a-feature.md). In this document, you will find all the necessary information to develop and test the features. Therefore, please review this document and the `README.md` before you get started.


      ## Getting started


      Clone the repo


      ```shell

      git clone git@github.com:atom-learning/components.git

      ```


      Install dependencies


      ```shell

      yarn install

      ```


      **Before starting to develop on this project, please consider the following:**


      * Read the entire contribution guide

      * Read the [accessibility section](https://design.atomlearning.technology/components/accessibility)

      * Read the [versioning section](https://design.atomlearning.technology/components/versioning)

      * Check that the `pre-commit` hooks work before pushing into a branch

      * Always commit your changes to a branch and request a code review by raising a PR.

      * Always include tests for the changes introduced


      ### Available scripts


      * `dev`: Builds the libary in dev mode and watches for changes

      * `start:sandbox`: Starts up a simple sandbox to test changes

      * `build:lib`: Builds the library and populates the `dist` folder

      * `build:proptypes`: Builds the proptypes and exports it to be consumed by the `documentation` project.

      * `clean`: Deletes the `dist` folder to ensure a clean build

      * `format`: Formats the code using `Prettier`

      * `lint`: Lints and fixes syntax issues with the code using `ESLint`

      * `test`: Runs the testing suite using `Jest`

      * `test:watch`: Runs the testing suite in watch mode

      * `validate`: Runs all the validate commands to: audit any additional dependencies, detect linting/syntax issues, detect typescript compilation errors, prints the output size and flags any potential build issues. See `package.json` for more details.


      ## Commits


      This section is **very important**! Our releases and version numbers follow [Semantic Versioning](https://semver.org/) and are generated from the commit messages in PRs when they get merged into `main`, so make sure you follow our conventions.


      We use [`commitlint`](https://github.com/conventional-changelog/commitlint) to enforce rules about commit messages and [`semantic-release`](https://github.com/semantic-release/semantic-release) to generate releases and version numbers based on them. The configuration of these tools is spread between several plugins, but here's what you need to know.


      The structure of a commit message is as follows:


      ```xml

      <type>(<scope>): <subject>

      <BLANK LINE>

      <body>

      <BLANK LINE>

      <footer>

      ```


      All commit messages must have a type (a word followed by a colon at the start of the message) from this [list](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) (the scope is optional but strongly encouraged). Either of the following types will cause a new release to be published when your PR is merged into `main`:


      * `fix` for bug fixes (patch version)

      * `perf` for performance improvements (patch version)

      * `feat` for new features (minor version)


      Other subjects (such as `chore`) will not cause a new release **unless** the commit footer starts with `BREAKING CHANGE:` (followed by an explanation of the breaking change).


      Commits that introduce a breaking change should start with `feat!:` and include the `BREAKING CHANGE:` footer. Breaking changes will cause a major version increase.


      Here is an example of the release type that will be done based on a commit messages:


      | Commit message                                                                                                                                                                          | Release type           |

      | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |

      | `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                    | Patch Release          |

      | `feat(pencil): add 'graphiteWidth' option`                                                                                                                                              | Minor Release          |

      | `perf(pencil): remove graphiteWidth option`  `BREAKING CHANGE: The graphiteWidth option has been removed.` `The default graphite width of 10mm is always used for performance reasons.` | Major Breaking Release |


      **Notes:**


      * A commit should contain at most one self-contained functional change and a functional change should be contained in exactly one commit.

      * When squashing commits make sure to rewrite the resulting commit message to be compliant with the project's commit message convention. **If the resulting squashed commit would encompasses multiple changes (for example multiple unrelated features or fixes) then it's probably not a good idea to squash those commits together**.


      ## Directory structure


      Use the following directory structure and file naming conventions. You can automate this by running `yarn add-component` in the root directory and following the instructions. Once the `add-component` task has completed, you should have the following folder and files created:


      ```

      src/
        components/
          component-name/
            ComponentName.tsx
            ComponentName.test.tsx
            index.ts
      ```


      ## Component API


      ### Prop validation


      All components should have fully typed props.


      ### `css` prop


      All components should accept a `css` prop. Single-child components are styled directly, while components composed of multiple components/elements use the `css` prop only for styles that affect the whole component/its relationship to other components on the page:


      * If the component renders two or more sibling elements/components, wrap them in a `CSSWrapper` and pass the `css` prop to that.

      * Otherwise, pass the `css` prop value directly to the direct child.


      ```tsx

      const SimpleComponent = ({ css }) => (
        <Box css={css}>This box gets styled directly</Box>
      )


      const ComposedComponent = ({ css }) => (
        <CSSWrapper css={css}>
          <Box css={{ mb: '$3' }}>
            The styling of these boxes is ComposedComponent's responsibility
          </Box>
          <Box css={{ color: '$primary' }}>
            If we want to combine boxes differently, we can compose a new component
          </Box>
        </CSSWrapper>
      )

      ```


      ## Tests


      In this project, we follow the principles set out by the `React Testing Library` where we focus on testing the user interactions with the component. The target is to have as much test coverage as possible.


      As a minimum, the following tests are required:


      * Tests to validate the user interactions with the component

      * Snapshots for the different states of the component (i.e., for an `accordion` cover both the collapsed and expanded states

      * Snapshots for each variant that outputs different HTML

      * Accessibility unit tests


      ### Examples


      ```tsx

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


      ## Documentation


      Each component should have documentation that covers the following:


      * Variants

      * Available component-specific properties

      * When it should be used

      * When it *shouldn't* be used (e.g. instead of using an `Input` directly, we'll often want to use an `InputField`)


      We use YAML frontmatter to add metadata to our documentation. The available fields are:


      * `title` - The title of the page, usually the name of the component. It can be made more readable, e.g. `CSS Wrapper` instead of `CSSWrapper`

      * `component` - The name of the component; this is used to extract prop-types, so must be exact. This can also be a comma separated list if additional components are exported or included in the root export. e.g. `Dialog,Dialog.Trigger,Dialog.Content`

      * `description` - A high-level description of the component and its usage will be shown as the page's opening statement.

      * `category` - A category to group with related components

      * `priority` - Provides the ability to prioritise the content within its category, e.g. `1` will be listed before other content that has higher or no `priority` defined


      There is no need to add a main `# Heading` to your page as the documentation site will add it automatically from your `title` field. Avoid manually adding a `PropsTable` as this will be automated, or adding custom `import`s as these will break the MDX parser.


      To show code examples and component previews in your documentation, use the code block syntax with a language, in our case, `tsx`.


      The following basic example will show just the code:


      ````

      ```tsx

      <Button />

      ```

      ````


      Adding `preview` will also render the code above the code block:


      ````

      ```tsx preview

      <Button />

      ```

      ````


      Adding `live` will render the code and adds the ability to live edit:


      ````

      ```tsx live

      <Button />

      ```

      ````


      ## Raising a PR


      In the PR, include:


      * A link to the ticket for the work

      * A brief description of the work you've done

      * Links to any designs provided

      * Screenshots of the built component

      * An explanation of any decisions that were made.


      If any of the patterns stated above weren't followed, please explain the reasons for it.


      **For a PR to be approved, tests and documentation are required as mentioned above.**


      After a PR has at least two thumbs-up and all the recommendations/conversations have been resolved, it can be merged into `main`.


      ## Merging/Releasing


      After a PR was merged, releasing the changes is fully automated (please refer to the commits section). Once the pipeline has completed and the new version is released, you can then upgrade the package in the consuming project and use it.
parent: components.overview (components)
nestedSlug:
  - theme
  - overview
  - contributing
---
