---
slug: versioning
title: Versioning aa
tabs:
  - title: Main
    content: >-
      The project follows the SemVer standard to make using the library easy


      SemVer uses the `MAJOR`.`MINOR`.`PATCH` notation to identify changes with `MAJOR` representing breaking changes that are not backwards compatible, `MINOR` representing new features / non-breaking additions and `PATCH` representing fixes.


      It is also a requirement to use [Semantic commits](https://www.conventionalcommits.org/en/v1.0.0/) as each tag will translate to a different type of version upgrade. For example:


      * `fix` for bug fixes (patch version)

      * `perf` for performance improvements (patch version)

      * `feat` for new features (minor version)


      Other subjects (such as `chore`) will not cause a new release **unless** the commit footer starts with `BREAKING CHANGE:` (followed by an explanation of the breaking change).


      Commits that introduce a breaking change should start with `feat!:` and include the `BREAKING CHANGE:` footer. Breaking changes will cause a major version increase.


      *Note:* The `precommit` hooks will prevent commits that don’t have the required tag prefixed to the message


      Versioning happens automatically when a feature branch gets merged into `main`. [semantic-release](https://github.com/semantic-release/semantic-release) is employed to calculate the new version number by running through all the new commits and their commit message tag. Once the new version is calculated, it updates the package.json and automatically updates the `CHANGELOG.md`. Then it proceeds to publish the new version both in `GitHub` and `npm`.


      *Note:* Once a branch gets merged into `main`, it is automatically published, therefore `main` always needs to be in a pristine state. For that reason, following the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) model, all work needs to happen into a branch, and `main` is locked


      ## Purpose


      * To ensure that each version is marked clearly and can be consumed without any issues

      * To reduce the amount of manual effort required to publish a new version

      * To help enforce the selected standards and frameworks, and reduce the room for human error


      ## Tools


      * [Semantic-release](https://github.com/semantic-release/semantic-release)

      * Plugins:

        * `@semantic-release/commit-analyzer` - checks commits messages for the required tags
        * `@semantic-release/release-notes-generator` - creates/updates the release notes
        * `@semantic-release/npm` - publishes version to `npm`
        * `@semantic-release/github` - publishes version to `GitHub Releases`
      * `husky` - precommit hook to prevent incomplete commit messages
nestedSlug:
  - components
  - overview
  - versioning
parent: CJspWBO-6KLOSzVOdevgR
uuid: 0T_zt0xOAq6GaYIwzVVoj
---
