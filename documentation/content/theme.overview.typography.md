---
slug: typography
title: Typography
tabs:
  - title: Main
    content: >-
      We have a variety of Text components to provide consistent typography
      throughout the application. You can read more about those specific font
      styles in the Text component documentation.


      ## Fonts


      <FontFamilyTokenList fontFamilies={[]} />


      ## Sizes


      This typographic sizing scale represents the `font-size` values used in our components. It loosely follows the [Perfect Fourth](https://type-scale.com/?scale=1.333&font=Inter) scale and can be accessed by using t-shirt notation


      <FontSizeTokenList fontSizes={[]} />


      Note that most of our typography components (`Text`, `Heading`, `Label` and others) use [capsize](https://seek-oss.github.io/capsize/) to offset the white-space between the cap-height and the line-height. This means that spacing in and around our text will be tight to the characters.


      ```jsx

      <Box css={{ bg: '$tonal100', p: '$5' }}>
        <Text size="xl" css={{ bg: 'white' }}>
          Hello World
        </Text>
      </Box>

      ```
parent: lfMACgjU6_Ee5Tw38zwzv
uuid: 76_opNal5DEJmStcOQ0ea
nestedSlug:
  - theme
  - overview
  - typography
---
