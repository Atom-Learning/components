---
slug: core-concepts
title: Core Concepts
tabs:
  - title: Main
    content: >-
      

      Our component library is underpinned by concepts that help with component composition, encapsulated styling and consistent UI


      These components are intended to provide an abstraction over HTML elements and native components, providing an interface to ease creation of user interfaces in React. This library isn't comprehensive, but it should provide enough primitive, low-level components to be able to easily create pages, layouts, content, forms, as well as using them to compose more complex components with additional logic.


      Each component in the design system is built from a `styled()` function and this gives them access to some common props, `as` and `css`.


      ## Semantic elements with `as`


      To apply the correct semantic element to one of our components, you can use `as` and pass in a string HTML element. For example, when using the `Heading` component you can pass in `h3` to use that element.


      ```tsx

      <Heading as="h3">Hello World</Heading>

      ```


      ```html

      <h3>Hello World</h3>

      ```


      Some components have a restricted set of valid elements to pass into `as`, for example, `Heading` only allows `h1` through to `h6`, and some components remove the ability to change the HTML element altogether, like `<Select />` or `<Icon />` which require a certain element to work correctly, or `<InputField />` which renders multiple elements. Each of these restrictions are detailed on the component documentation under `API Reference`.


      Abstracting the underlying HTML from the component is beneficial as it allows us to control the document outline whilst preserving the ability to use a visually distinct style. This is often the case with container elements where you need to render a `section`, `aside`, `nav` or `main`, but still utilise a particular styled component, e.g. `<Panel as="aside" />`


      ## Contextual styling with `css`


      The `css` prop is available on all of our components to allow you to style them. You can pass in an object of CSS key value pairs and the component will apply those styles as a class on the rendered component.


      The benefit of using the `css` prop as opposed to writing inline styles is that we can directly access values from our design tokens, write responsive styles, and use practical shorthand utilities for applying style.


      An additional benefit is that we can apply context specific styles to the component only when necessary and avoid the problem of assuming usage and intent when authoring the components. Adding styles to a component that may affect surrounding components is a side-effect, and our aim should always be to avoid adding side-effects to our encapsulated, reusable components.


      ```tsx

      <Box
        css={{
          // we can write standard CSS here
          fontFamily: 'Arial',
          color: 'red',

          // we can also access design tokens
          backgroundColor: '$primary800',
          padding: '$3',

          // utilise shorthand utilities
          mb: '$3',
          size: 30

          // and write responsive styles
          '@lg': {
            color: 'blue'
          },
          '@media (prefers-color-scheme: dark)': {
            color: 'white'
          }
        }}
      />

      ```


      There are multiple cases where a component returns more than one element, in which case the `css` prop only applies to the containing element.


      `@atom-learning/components` also exports the underlying `styled()` function that was used to create these components, refer to the [Stitches page](https://design.atomlearning.technology/components/stitches) to read more about the difference between `css` and `styled()`. You can also read more about our shorthand utilities and other default configuration options.


      ## Consistency with design tokens


      To quote the [React UI](https://react-ui.dev/core-concepts/constraints-based-design) docs:


      > At the core of every high quality interface, is a set of constraints that help in creating a level of consistency and quality. Constraints help build consistent features at a faster pace by moving the decisions into reusable patterns.


      These constraints are baked into our design tokens and represent design decisions that encorporate spacing, sizing, colours and typography. [Stitches](https://stitches.dev/) uses the [System UI](https://system-ui.com/theme/) theme specification to map these values to their corresponding CSS property. You can read more about this and see the full token set by referring to the [tokens reference](https://design.atomlearning.technology/theme/tokens).


      As a quick example, our tokens come in two main forms, values and scales:


      * For a layout property like `padding` or `margin`, the token represents the nth value on the spacing scale, e.g. `padding: '$2'` will render `padding: '8px'`.

      * For a property like `color`, it will look up the colors tokens and will use the value directly, e.g. `color: '$warning'` will render `color: 'hsl(24, 100%, 55%)'`.
nestedSlug:
  - components
  - overview
  - core-concepts
parent: CJspWBO-6KLOSzVOdevgR
uuid: W3_5m_nUUsEq0URY48qso
---
