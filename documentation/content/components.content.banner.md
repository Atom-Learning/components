---
slug: banner
title: Banner
links:
  viewSource: components/banner
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      `Banner` has two primary variations - `BannerRegular` & `BannerSlim`
      (Coming Soon).


      The `Banner` component ships with multiple building blocks which can be put together in a composable manner to get the desired result.


      ## Anatomy


      The root `Banner` component manages the banner's configuration and exposes it via the React Context API. This state can be accessed by any child components by calling `useBannerContext` hook. The sub components call this hook to refer to the core configuration and render accordingly.


      ### Examples

      We have several configuration with which `Banner` can be rendered

      #### `sm` Variant

      <CodeBlock live={false} preview={true} code={`

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

      #### `md` Variant

      <CodeBlock live={false} preview={true} code={`

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

      #### Dismissble Variant

      It's possible to render it as a dissmissble component as well. Just add `<BannerRegular.Dismiss />` as a sibling to `BannerRegular.Content`.

      <CodeBlock live={false} preview={true} code={`

      <BannerRegular
        colorScheme={{ base: 'blue2' }}
        emphasis="midContrast"
        size="md"
        value=""
        onDismiss={() => console.log('Dismissed')}
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
        <BannerRegular.Dismiss />
      </BannerRegular>

      `} language={"tsx"} />


      ## API Reference


      <ComponentProps component="BannerRegular" />
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: fdff513a0ebd40bcb5f58
nestedSlug:
  - components
  - content
  - banner
---
