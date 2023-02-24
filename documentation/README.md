# Documentation Website

`./documentation` is a NetlifyCMS+next.js implementation developed to allow for adding and editing markdown documentation for `@atom-learning/components`, `@atom-learning/theme`, `@atom-learning/icons`, as well as any other design system relevant information easily. It is intended to be used by any editor with log in permissions and access to our organisation, without the need for understanding code, markdown or git versioning. It is _not_ limited to only document the library components, but allows for any sort of design system relevent information to be documented.

The documentation itself is added via a NetlifyCMS website. You will need to log in to the CMS to make changes over on `https://design.atomlearning.technology/admin`. The login requires a github account as it uses Github OAuth. When making changes it uses your github user to make a direct commit to the main repository; which means changes will cause a redeployment of the website and might take a bit of time to process and show.

## Working with documentation locally.

You can also work with the documentation locally by installing this repo as seen in [the main `README.md`](https://github.com/Atom-Learning/components/tree/main#readme)
This will a faster way to work and see changes but it will require opening a PR in the end and is not recommended for users not comfortable with working with `git`.
