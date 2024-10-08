---
slug: styling
title: Styling
tabs:
  - content: >-
      Stitches is our styling library of choice. It leans on modern CSS best
      practices, has near-zero runtime, and provides a great developer
      experience


      To read about Stitches in more depth you can refer to the [official documentation](https://stitches.dev/), the information provided here is mainly focused on the choices we made to configure Stitches for the component library.


      `@atom-learning/components` exports not only a collection of React components built with Stitches but also the full Stitches library to allow full use of `styled()` and other related methods. This enables you to write more complex components with variants, typed tokens, descendant selectors, keyframe animations and more, some of which are unavailable when using `css`.


      When creating a new component alongside the component library we strongly recommend that you utilise the `styled()` function to maintain a consistent component API. This will automatically provide `as` and `css` to the user without any extra configuration, in a way that `<Box />` or another generic layout component wouldn’t.


      ## Media Queries / Conditions


      Stitches also has responsive styles built into its API, we've provided an initial set of mobile-first breakpoints alongside feature queries like `prefers-reduced-motion`.


      ```tsx

      export const conditions = {
        sm: '(min-width: 550px)',
        md: '(min-width: 800px)',
        lg: '(min-width: 1100px)',
        xl: '(min-width: 1350px)',
        reducedMotion: '(prefers-reduced-motion)',
        hover: '(hover: hover)'
      }

      ```


      You can use these in `styled()` or `css` by prefixing the key with `@`, e.g. `@reducedMotion` or `@xl`


      ```tsx

      const Section = styled('section', {
        margin: '$1',
        padding: '$2',
        '@md': {
          margin: '$2',
          padding: '$3'
        }
      })

      ```


      ```tsx

      <Text
        css={{
          color: '$grey700',
          '@md': { color: '$primary800' },
          '@lg': { color: '$primary1000' }
        }}
      >
        Hello World
      </Text>

      ```


      You can also use them to switch [variants](https://stitches.dev/docs/variants)


      ```tsx

      <Button
        // change the 'theme' to 'success' when you trigger the 'md' breakpoint
        theme={{
          '@initial': 'primary',
          '@md': 'success'
        }}
        // change the 'size' to 'md' when you trigger the 'sm' breakpoint
        size: {{
          '@initial': 'sm',
          '@sm': 'md'
        }}
      >
        Click me
      </Button>

      ```


      Read more about responsive styling on the [Stitches docs](https://stitches.dev/docs/responsive-styles)


      ## Utilities


      Stitches enables you to create shorthand utilities to improve the CSS authoring experience within `styled()` or `css`. We have provided an initial set of utilities that should be a useful starting point when composing components with a need to provide contextual layout or styles.


      A quick example using `bg` and `size` to create a little blue square.


      ```tsx

      <Box css={{ bg: '$primary800', size: 100 }} />

      ```


      The full list of utilities can be found in the [component library source](https://github.com/Atom-Learning/components/blob/main/src/stitches.ts)
    title: Main
nestedSlug:
  - components
  - overview
  - styling
parent: CJspWBO-6KLOSzVOdevgR
uuid: ZXrf0ZoNJ13GvUpQ-FzaN
---
