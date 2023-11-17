---
slug: side-bar
title: Side Bar
links:
  viewSource: components/side-bar
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      `SideBar` exports components that combine to form the elements that you would expect to commonly see in a top-level side-bar. However, the `SideBar` is not limited to these components, as any component may sit within the `SideBar` to create a flexible and custom UI. In its default `expandable` state, a user can hover or tap the `SideBar`, or focus any element within to expand it.


      `SideBar` can be paired with `NavigationMenuVertical` to create a top-level or second-level menu, with an initial `Icon` only state, before expanding to reveal the text content alongside.


      <CodeBlock live={true} preview={true} code={`<SideBar css={{ height: 300 }} type="static">
        <SideBar.Body>
          <NavigationMenuVertical>
            <NavigationMenuVertical.Link active href="/">
              <Icon is={Dashboard} />
              Home
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link href="/settings">
              <Icon is={Settings} />
              Settings
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link href="/notifications">
              <Icon is={Bell} />
              Notifications
            </NavigationMenuVertical.Link>
          </NavigationMenuVertical>
        </SideBar.Body>
      </SideBar>`} language={"tsx"} />


      Additionally, components within `SideBar` can use the `useSidebarState()` hook to access the dynamic collapsed/expanded state of the side-bar for any required UI changes.


      <CodeBlock code={`const Component = () => {
        const { isExpanded } = useSidebarState()
        return <Box css={{ p: isExpanded ? '$4' : '$2' }} />
      }

      const App = () => (
        <SideBar>
          <SideBar.Body>
            <Component />
          </SideBar.Body>
        </SideBar>
      )`} language={"tsx"} />


      ## SideBar type


      `SideBar` can be rendered in one of two states, `static` or `expandable`.


      `static` will render at the fully expanded width of the side bar and will not bind any of the hover, touch, or keyboard events to expand or collapse the side bar container.


      `expandable` will render the side bar at a reduced size and will bind the necessary events to expand the container to its expanded size.  


      ## SideBar components


      `SideBar.Brand` renders a styled link, with `SideBar.BrandLogo` rendering an image primarily intended for the Atom logo, and `SideBar.BrandName`, rendering a `Text` component primarily intended to display the name of the current app.


      Additional structural components are available within `SideBar` to allow for correctly positioned elements. `SideBar.Header` and `SideBar.Footer` will remain stuck to the top and bottom of the `SideBar` if the contents overflows and introduces a scrollbar.


      <CodeBlock preview={true} code={`<SideBar css={{ height: 400 }}>
        <SideBar.Header>
          <SideBar.Brand href="atomlearning.co.uk">
            <SideBar.BrandLogo src="https://space-1.atomlearning.com/static/f61e49cfb245016e612a34818e27dcfb.svg" css={{ width: 55 }} />
            <SideBar.BrandName>Admin Panel</SideBar.BrandName>
          </SideBar.Brand>
        </SideBar.Header>
        <SideBar.Body>
          <NavigationMenuVertical>
            <NavigationMenuVertical.Link active href="/">
              <Icon is={Dashboard} />
              Home
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link href="/settings">
              <Icon is={Settings} />
              Settings
            </NavigationMenuVertical.Link>
            <NavigationMenuVertical.Link href="/notifications">
              <Icon is={Bell} />
              Notifications
            </NavigationMenuVertical.Link>
          </NavigationMenuVertical>
        </SideBar.Body>
        <SideBar.Footer css={{ pl: '$24' }}>
          <Avatar name="Alice Smith" size="md">
            <Avatar.Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=100&q=80"
            />
          </Avatar>
        </SideBar.Footer>
      </SideBar>`} language={"tsx"} />



      ## API Reference

      <ComponentProps component="SideBar" />

      <ComponentProps component="SideBar.Header" />

      <ComponentProps component="SideBar.Body" />

      <ComponentProps component="SideBar.Footer" />

      <ComponentProps component="SideBar.Brand" />

      <ComponentProps component="SideBar.BrandLogo" />

      <ComponentProps component="SideBar.BrandName" />
parent: 95SvEwV7BznSChttFanpW
uuid: eabbca8c-fe43-4c32-a2d2-7e575c0bb6ce
nestedSlug:
  - components
  - navigation
  - side-bar
---
