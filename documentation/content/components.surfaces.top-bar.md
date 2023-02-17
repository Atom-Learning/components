---
slug: top-bar
title: Top Bar
links:
  viewSource: components/top-bar
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      The top bar provides content and actions related to the current screen.
      It is used for branding, screen titles, navigation, and actions.


      `TopBar` exports components that combine to form the elements that you would expect to commonly see in a TopBar. However, the `TopBar` is not limited to these components, as any components may sit within the `TopBar` to create a flexible and custom UI.


      By default, `TopBar` uses a flex layout with flex items placed immediately after each other. To align flex items, an optional css prop with `justifyContent` can be passed.


      Alternatively, if you want to avoid wrapping groups of items with a `div` purely for alignment purposes, you could use a spacer. In this example, the styling of the `Flex` component has been extended so that it stretches to fill the available space.


      <CodeBlock live={true} preview={true} code={`<TopBar>
        <TopBar.Brand href="atomlearning.co.uk">
          <TopBar.BrandName>Admin Panel</TopBar.BrandName>
        </TopBar.Brand>
        <Flex css={{ flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' }} />
        <Stack gap="2" direction="row">
          <TopBar.ActionIcon icon={Search} label="Search" />
          <TopBar.Divider />
          <TopBar.ActionIcon icon={SwitchOff} label="Light/Dark mode" />
        </Stack>
      </TopBar>`} language={"tsx"} />


      ## TopBar Size Variant


      TopBar has a default size of `md` which means that the default height of the component is 64px and the `Topbar.BrandLogo` is 24px.


      If size `lg` is passed to the `TopBar` it will be 96px in height and the `TopBar.BrandLogo` will be 32px in height.


      <CodeBlock live={true} preview={true} code={`<TopBar>
        <TopBar.Brand href="atomlearning.co.uk">
          <TopBar.BrandLogo
            src={
              'https://space-1.atomlearning.com/static/f61e49cfb245016e612a34818e27dcfb.svg'
            }
          />
        </TopBar.Brand>
      </TopBar>`} language={"tsx"} />


      ## TopBar.Brand


      `TopBar.Brand` renders a styled link.


      <CodeBlock live={false} preview={false} code={`// You'll import the logo like this in practice, but it doesn't work

      // in these previews

      // import logo from '@atom-learning/theme/lib/assets/logo.svg'



      const App = () => {
        return (
          <TopBar>
            <TopBar.Brand href="atomlearning.co.uk">
              <TopBar.BrandLogo
                src={
                  'https://space-1.atomlearning.com/static/f61e49cfb245016e612a34818e27dcfb.svg'
                }
              />
              <TopBar.BrandName>Admin Panel</TopBar.BrandName>
            </TopBar.Brand>
          </TopBar>
        )
      }`} language={"tsx"} />


      ## TopBar.BrandLogo


      `TopBar.BrandLogo` renders an image with set styles and is primarily intended for the Atom logo.


      ## TopBar.BrandName


      `TopBar.BrandName` renders a `Text` component with set styles and is primarily intended to display the name of the current app.


      ## TopBar.ActionIcon


      `TopBar.ActionIcon` extends the base `ActionIcon` component with set props.


      Note that instead of needing to include a seperate `Icon` component as children, an icon can be passed directly to this component as a prop.


      ## API Reference


      <ComponentProps component="Tooltip" />


      <ComponentProps component="Tooltip.Content" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - surfaces
  - top-bar
---
