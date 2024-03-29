---
slug: accessibility
title: Accessibility
tabs:
  - title: Main
    content: >-
      We aim to adhere to strict accessibility standards with AA as the
      minimum.


      We have configured a few tools to help automate some accessibility testing but these tests are only valid with the context they are testing on, so they can't guarantee that a component is fully accessible. Manual testing is always required along with design validation.


      To enable this, `eslint-plugin-jsx-a11y` is set to strict mode. Different tools are used to validate the components as each serves a different purpose. The accessibility unit tests will fail the pipeline and prevent releasing inaccessible components.


      Before contributing to the codebase, please take some time to read the following sections and the reading provided.


      ## Things to consider whilst developing


      Add unit tests to test accessibility


      Add an accessibility unit test (using the `jest-axe` package) to ensure that the components’ different variations or functionality don't have any accessibility issues. Example:


      ```tsx

      it('has no programmatically detectable a11y issues', async () => {
        const { container } = render(<Component />)
        expect(await axe(container)).toHaveNoViolations()
      })


      // or


      it('has no programmatically detectable a11y issues', async () => {
        render(<Flex />, document.body)
        const results = await axe(document.body)
        expect(results).toHaveNoViolations()
      })

      ```


      *Note:* `axe` doesn't catch contrast issues when run on `jsdom` which `jest` is using.


      Using `React.Fragment` where possible to avoid adding extra `<div>`


      Sometimes we break HTML semantics when we add `<div>` elements to our JSX to make our React code work, especially when working with lists (`<ol>`, `<ul>` and `<dl>`) and the HTML `<table>`. In these cases we should rather use React Fragments to group together multiple elements. for examples please look at the [React documentation](https://reactjs.org/docs/accessibility.html)


      Using the React Testing Library rules into adopting a user-centric testing an approach. [Priority](https://testing-library.com/docs/queries/about/#priority)


      Test real interactions


      Verify the perceivable results


      Always validating any concerns with the design team


      Manually test complex components for keyboard navigation


      ## Things to consider whilst consuming the library


      As mentioned above, accessibility testing is heavily reliant on the context, so when using the Design System in an app, please consider the following:


      Testing the components for accessibility in the context of where they are used


      Testing the entire page for at least the following:


      contrast issues


      keyboard navigation


      autofocus


      general accesibility issues


      Always raising concerns to the design team


      ## Reading list


      * [Axe-core rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

      * [Accessibility](https://reactjs.org/docs/accessibility.html)

      * [React Library Testing - priority](https://testing-library.com/docs/queries/about/#priority)

      * [Testing Accessibility](https://www.24a11y.com/2017/writing-automated-tests-accessibility/)

      * [Debunking the Myth: Accessibility and React](https://www.deque.com/blog/debunking-the-myth-accessibility-and-react/)

      * [Accessibility auditing with react-axe and eslint-plugin-jsx-a11y](https://web.dev/accessibility-auditing-react/)

      * [jest-axe](https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library)
nestedSlug:
  - components
  - overview
  - accessibility
parent: CJspWBO-6KLOSzVOdevgR
uuid: EAPIHdHvI3Qf59tfVpuTf
---
