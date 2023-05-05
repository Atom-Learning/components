---
slug: aspect-ratio
title: Aspect Ratio
tabs:
  - title: Main
    content: >-
      ## Overview


      An aspect ratio is the proportion of an element’s width to its height. Aspect ratios are written as width:height.\

      \

      To maintain consistent proportions in the layout, use a consistent aspect ratio on elements like images, videos, and or other HTML elements.\

      \

      By designing with an existing aspect ratio, teams are able to quickly build UIs using existing classes and components.\

      \

      The following aspect ratios are recommended for use across your UI: 16:9; 3:2; 4:3; 1:1; 3:4; 2:3.


      The chip acts a container of different functions and elements such as an avatar, text, or an icon. They can also be closed or removed.


      `*code preview goes here`


      ![Aspect ratio examples](/assets/images/aspect-ratios.svg "Aspect ratio examples")


      Common aspect ratios we support by default.


      Regardless of its child's dimensions, the element will maintain the specified aspect ratio or calculate and maintain an aspect ratio based on a provided width and height. It prevents skewing, cropping, etc.\

      \

      Remember that aspect ratio is not the same as size.\

      \

      To ensure proper resizing, the Aspect Ratio should have only one child element that completely fits within its bounding box. This can be accomplished by utilizing an absolutely positioned [Box primitive](https://atomlearning.design/components/layout/box).\

      \

      You can modify the aspect ratio property at certain media query breakpoints.


      ## When to use


      Aspect Ratio can be used to embed images and videos making sure they scale correctly.\

      \

      Aspect Ratio tokens can also be applied to embed components or HTML elements that require a specific width-to-height ratio. For example, this could be useful when aligning an HTML element with an image in a two-column layout.


      1:1 - For Avatars, carousel...


      16:9 - For video, images, cards...


      The rest can be used for images and containers. 


      ## Custom Sizes


      Custom illustrations and marketing images, as well as one-off images, can use aspect ratios that are specific to their design requirements and don't necessarily need to conform to these standard ratios.


      ## Do's and Don'ts


      <DosAndDonts items={[{"type":"do","description":"Use for an image or embedded video, and have it resize at a specific ratio.","image":"/assets/images/aspectratio-01-1-.png"},{"type":"dont","description":"Don’t use with fixed size (width & height) elements, as those will not adhere to the width-to-height ratio."},{"type":"do","description":"Use to embed a component or other HTML element."},{"type":"dont","description":"Don’t use without any child elements, because this is only a container element."},{"type":"do","description":"Choose an appropriate aspect ratio to keep information visible."},{"type":"avoid","description":"Cropping elements like images since it will change the original aspect ratio. "},{"type":"do","description":"Use our defined aspect ratios for standard components."},{"type":"avoid","description":"Using other aspect ratios for example in Card component. "}]} />
parent: lfMACgjU6_Ee5Tw38zwzv
uuid: 1cd8ca20-c883-4c87-aa31-efb5fa83e3d7
---
