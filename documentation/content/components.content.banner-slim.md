---
slug: banner-slim
title: BannerSlim
links:
  viewSource: components/banner/banner-slim
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      **Related components**


      [Banner regular](/components/content/banner-regular)[](https://atomlearning.design/components/feedback/alert-dialog)


      <br/>


      The `BannerSlim` component ships with multiple building blocks which can be put together in a composable manner to get the desired result.

      You can pass in a `colorScheme` object to the `BannerSlim` to customise the colours of the component. ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options [on the repository's github](https://github.com/Atom-Learning/components/tree/main/lib/src/experiments/color-scheme#readme).


      ## Anatomy


      The root `BannerSlim` component manages the banner's configuration and exposes it via the React Context API. This state can be accessed by any child components by calling `useBannerContext` hook. The sub components call this hook to refer to the core configuration and render accordingly.


      ## Examples


      We have several configuration with which `BannerSlim` can be rendered


      ### default variant


      By default sizing is breakpoint based with the following format:  `size: { '@initial': 'sm', '@md': 'md' }`


      <CodeBlock live={true} preview={true} code={`<BannerSlim
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
      >
        <BannerSlim.Content>
          <BannerSlim.Image src="https://picsum.photos/400/400" />
          <BannerSlim.Text>
            This is the default variant of BannerSlim.
          </BannerSlim.Text>
        </BannerSlim.Content>
        <BannerSlim.Actions>
          <BannerSlim.Button>Primary CTA</BannerSlim.Button>
        </BannerSlim.Actions>
        <BannerSlim.Dismiss />
      </BannerSlim>`} language={"tsx"} />


      ### `sm` Variant


      <CodeBlock live={true} preview={true} code={`

      <BannerSlim
        colorScheme={{ base: 'purple1' }}
        emphasis="bold"
        size="sm"
      >
        <BannerSlim.Content>
          <BannerSlim.Image src="https://picsum.photos/400/400" />
          <BannerSlim.Text>
            This is the "sm" variant of BannerSlim.
          </BannerSlim.Text>
        </BannerSlim.Content>
        <BannerSlim.Actions>
          <BannerSlim.Button>Primary CTA</BannerSlim.Button>
        </BannerSlim.Actions>
      </BannerSlim>

      `} language={"tsx"} />


      ### `md` Variant


      <CodeBlock live={true} preview={true} code={`

      <BannerSlim
        colorScheme={{ base: 'blue1' }}
        emphasis="subtle"
        size="md"
      >
        <BannerSlim.Content>
          <BannerSlim.Image src="https://picsum.photos/400/400" />
          <BannerSlim.Text>
            This is the "md" variant of BannerSlim.
          </BannerSlim.Text>
        </BannerSlim.Content>
        <BannerSlim.Actions>
          <BannerSlim.Button>Primary CTA</BannerSlim.Button>
        </BannerSlim.Actions>
      </BannerSlim>

      `} language={"tsx"} />


      ### Dismissible "md" Variant


      It's possible to render it as a dissmissble component as well. Just add `<BannerSlim.Dismiss />` as a child to `BannerSlim.Actions`.


      <CodeBlock live={true} preview={true} code={`

      <BannerSlim
        colorScheme={{ base: 'blue2' }}
        emphasis="subtle"
        size="md"
        onDismiss={() => console.log('Dismissed')}
      >
        <BannerSlim.Content>
          <BannerSlim.Image src="https://picsum.photos/400/400" />
          <BannerSlim.Text>
            This is the dismissible variant of BannerSlim.
          </BannerSlim.Text>
        </BannerSlim.Content>
        <BannerSlim.Actions>
          <BannerSlim.Button>Primary CTA</BannerSlim.Button>
          <BannerSlim.Dismiss />
        </BannerSlim.Actions>
      </BannerSlim>

      `} language={"tsx"} />


      ### Dismissible "sm" Variant


      <CodeBlock live={true} preview={true} code={`

      <BannerSlim
        colorScheme={{ base: 'blue2' }}
        emphasis="subtle"
        size="sm"
        onDismiss={() => console.log('Dismissed')}
      >
        <BannerSlim.Content>
          <BannerSlim.Image src="https://picsum.photos/400/400" />
          <BannerSlim.Text>
            This is the dismissible variant of BannerSlim.
          </BannerSlim.Text>
        </BannerSlim.Content>
        <BannerSlim.Actions>
          <BannerSlim.Button>Primary CTA</BannerSlim.Button>
          <BannerSlim.Dismiss />
        </BannerSlim.Actions>
      </BannerSlim>

      `} language={"tsx"} />


      ## API Reference


      <ComponentProps component="BannerSlim" />


      <ComponentProps component="BannerSlim.Content" />


      <ComponentProps component="BannerSlim.Text" />


      <ComponentProps component="BannerSlim.Actions" />


      <ComponentProps component="BannerSlim.Image" />


      <ComponentProps component="BannerSlim.Button" />


      <ComponentProps component="BannerSlim.Dismiss" />
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: fdff513a0ebd40bcb5f67
nestedSlug:
  - components
  - content
  - banner-slim
---
