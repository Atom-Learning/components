---
slug: banner-regular
title: BannerRegular
links:
  viewSource: components/banner/banner-regular
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      #### Related components


      [Banner slim](https://atomlearning.design/components/content/banner-slim)  


      \-


      The `BannerRegular` component ships with multiple building blocks which can be put together in a composable manner to get the desired result.

      You can pass in a `colorScheme` object to the `BannerRegular` to customise the colours of the component. ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options [on the repository's github](https://github.com/Atom-Learning/components/tree/main/lib/src/experiments/color-scheme#readme).


      ## Anatomy


      The root `BannerRegular` component manages the banner's configuration and exposes it via the React Context API. This state can be accessed by any child components by calling `useBannerContext` hook. The sub components call this hook to refer to the core configuration and render accordingly.


      ## Examples


      We have several configuration with which `BannerRegular` can be rendered


      ### default variant


      By default sizing is breakpoint based with the following format:  `size: { '@initial': 'sm', '@md': 'md' }`



      <CodeBlock live={true} preview={true} code={`<BannerRegular
        colorScheme={{ base: 'purple1' }}
        emphasis="highContrast"
        value=""
      >
        <BannerRegular.Content>
          <BannerRegular.Text>
            This is the default variant of BannerRegular.
          </BannerRegular.Text>
          <BannerRegular.Actions>
            <BannerRegular.Button>Primary CTA</BannerRegular.Button>
          </BannerRegular.Actions>
        </BannerRegular.Content>
        <BannerRegular.Dismiss />
        <BannerRegular.Image src="https://picsum.photos/400/400" />
      </BannerRegular>`} language={"tsx"} />


      ### `sm` Variant


      <CodeBlock live={true} preview={true} code={`

      <BannerRegular
        colorScheme={{ base: 'purple1' }}
        emphasis="highContrast"
        size="sm"
        value=""
      >
        <BannerRegular.Content>
          <BannerRegular.Heading>Example Heading</BannerRegular.Heading>
          <BannerRegular.Text>
            This is an example text
          </BannerRegular.Text>
          <BannerRegular.Actions>
            <BannerRegular.Button>Primary CTA</BannerRegular.Button>
            <BannerRegular.Button>Secondary CTA</BannerRegular.Button>
          </BannerRegular.Actions>
        </BannerRegular.Content>
      </BannerRegular>

      `} language={"tsx"} />


      ### `md` Variant


      <CodeBlock live={true} preview={true} code={`

      <BannerRegular
        colorScheme={{ base: 'blue1' }}
        emphasis="midContrast"
        size="md"
        value=""
      >
        <BannerRegular.Content>
          <BannerRegular.Heading>Example Heading</BannerRegular.Heading>
          <BannerRegular.Text>
            This is an example text
          </BannerRegular.Text>
          <BannerRegular.Actions>
            <BannerRegular.Button>Primary CTA</BannerRegular.Button>
          </BannerRegular.Actions>
        </BannerRegular.Content>
        <BannerRegular.Image src="https://picsum.photos/400/300" />
      </BannerRegular>

      `} language={"tsx"} />


      ### Dismissible Variant


      It's possible to render it as a dissmissble component as well. Just add `<BannerRegular.Dismiss />` as a sibling to `BannerRegular.Content`.


      <CodeBlock live={true} preview={true} code={`

      <BannerRegular
        colorScheme={{ base: 'blue2' }}
        emphasis="midContrast"
        size="md"
        value=""
        onDismiss={() => console.log('Dismissed')}>

        <BannerRegular.Content>
          <BannerRegular.Heading>Example Heading</BannerRegular.Heading>
          <BannerRegular.Text>
            This is an example text
          </BannerRegular.Text>
          <BannerRegular.Actions>
            <BannerRegular.Button>Primary CTA</BannerRegular.Button>
          </BannerRegular.Actions> 
        </BannerRegular.Content>
        <BannerRegular.Image src="https://picsum.photos/400/300" />
        <BannerRegular.Dismiss />
      </BannerRegular>

      `} language={"tsx"} />


      ## API Reference


      <ComponentProps component="BannerRegular" />


      <ComponentProps component="BannerRegular.Content" />


      <ComponentProps component="BannerRegular.Heading" />


      <ComponentProps component="BannerRegular.Text" />


      <ComponentProps component="BannerRegular.Actions" />


      <ComponentProps component="BannerRegular.Image" />


      <ComponentProps component="BannerRegular.Button" />


      <ComponentProps component="BannerRegular.Dismiss" />
  - title: Usage
    content: >-
      ## Overview


      The promo banner is a component used to display an important message with the goal of pushing the user towards a promotional or product-related action.


      By using illustrations and bold typography, the banner is useful to capture the attention of the user and communicate key information in an engaging way without interrupting their flow.


      ![banner example](/assets/images/banner01.svg "banner example")


      ## When to use


      The promo banner should communicate an actionable message to the user in a short and concise manner. The title, description, illustration and CTA should all clearly explain the goal of the banner and motivate the user to complete the desired action.


      Banners should be used sparingly and only in situations when the message has a suitable importance, in order to maintain a logical hierarchy within a layout and to avoid overwhelming the user.


      Only one promo banner should be shown per page at a time. When multiple banners need to be used in the same place, only the most important one should be displayed (or the one that can be currently actioned).


      If the message of the banner is not actionable or important to the context of the product, consider using another component to communicate it to the user, such as an in-line or a [section message](/components/feedback/section-message?tab=usage).


      # Use of banner variants


      The promo banner has several variants in terms of size and colour, which should be used depending on the goal and importance of its message.


      ### Size


      For a more visually engaging design that attracts the user’s attention, the Default variant of the banner is more suitable, allowing for a larger illustration and bigger-sized typography. If the message is lower in priority compared to the rest of the content, or does not need to engage with an illustration, use the Slim variant.


      ### Color


      The promo banners also have three variants in terms of colour, which offer different levels of contrast within each layout. 


      Banners with a ’high’ emphasis use darker background colours and are meant to stand out from the rest of the content, so should only be used to communicate highly important messages. 


      The ‘mid’ variant should be suitable for most scenarios, as it offers a comparatively lower level of contrast, while still standing out from most of the content within the app. 


      Finally, the ‘low’ emphasis variant is designed to blend with the rest of the containers within the app, so should be used only when it doesn’t require a lot of attention. In such cases, consider the message you want to communicate and if the promo banner is the most suitable component for your goals (e.g. is the message actionable, is it related to a particular component on the page or is it more general, etc.).


      ![banner color](/assets/images/banner02_color.svg "banner color")


      ### Image


      \* Guidelines to be defined


      ![Banner image example](/assets/images/banner-image-referrals.png "Banner image example")


      ### Interactions


      As the promo banner component itself is not interactive, the only interactions with the user it allows are through its CTAs and close button.


      The user should always have the ability to dismiss the component when they don’t want to see it via the close button (with some exceptions mentioned below). Suitable logic for each use case can be utilised to show the banner again after some time has passed, but it’s important that the user is not overwhelmed by notifications and marketing content on the platform.


      In some existing product-related scenarios, where the message of the banner is of extreme importance to the user and an immediate action is required, the banner may be non-dismissable. Such use cases should be considered carefully and used very sparingly - for example, this is suitable for when a teacher requires an action from their student, but not when Atom suggests that a parent upgrades their account.


      Promo banners may have either 1 or 2 CTAs. These buttons should follow the existing DS button guidelines in terms of hierarchy, colour and contrast and should have short and clear copy.


      ### Copy


      The copy used in the title and description of each promo banner should be short and concise, making sure that the message is clear to the user without any unnecessary information.


      \

      Copy length should be checked on the smallest possible size of the promo banner to ensure the component has a reasonable size and doesn’t overwhelm, compared to the other components on the page.


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/banner04_do.svg","type":"do","description":"Make sure to show only one promo banner per page at a time"},{"type":"dont","description":"Never use the promo banner to communicate unimportant information or messages that require other context"},{"description":"Always use the relevant size and colour variant that fits the message you want to communicate","type":"do"},{"type":"avoid","description":"Avoid having overly long copy within a banner"}]} />
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: fdff513a0ebd40bcb5f58
nestedSlug:
  - components
  - content
  - banner-regular
---
