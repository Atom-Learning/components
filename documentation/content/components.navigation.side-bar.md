---
slug: side-bar
title: Side Bar
links:
  viewSource: components/side-bar
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      `SideBar` exports components that combine to form the elements that you
      would expect to commonly see in a top-level side-bar. However,
      the `SideBar` is not limited to these components, as any component may sit
      within the `SideBar` to create a flexible and custom UI. In its default
      `expandable` state, a user can hover or tap the `SideBar`, or focus any
      element within to expand it.


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
  - title: Usage
    content: >-
      # Overview


      Sidebar is a layout component that appears as a vertical panel at the edge of the main content area and serves as a navigation or information hub.


      Users can interact with it to access supplementary features, menus, or content without leaving the current page.\

      Navigation includes a list of links that users use to move between sections of the product.


      ![sidebar](/assets/images/sidebar01.svg "sidebar")


      Sidebar navigation items are built with [NavigationMenuVertical](/components/navigation/navigation-menu-vertical) which provides option for single level navigation, multilevel navigation, and items with icons.


      **Single level**\

      For straightforward navigation without any hierarchical structure, opt for a single-level side navigation. When a user selects a navigation item, it instantly activates and directs them to the corresponding location.


      **Multi-level**\

      In situations where your navigation structure has multiple tiers of hierarchy, consider implementing a multi-level side navigation. Clicking on a section header either expands or collapses the underlying sub-navigation items.


      **Icons**\

      Icons can be shown in single-level and multi-level side navigations. However, it's important to reserve icons for situations where they provide crucial context and are closely linked to the accompanying text. Avoid using icons purely for ornamental purposes.


      ![sidebar types](/assets/images/sidebar02.svg "sidebar types")


      Sidebar is customizable and has a mini variant that can be collapsed and expanded, providing a space-efficient way to enhance user experience and organize content in a visually appealing manner.\

      \

      **Standard drawer**\

      Standard navigation sidebars are pinned to the left edge, at the same elevation as the content or background. They can optionally toggle open or closed with a trigger and the state of the sidebar should be remembered from action to action and session to session.\

      When the sidebar is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.\

      Standard navigation sidebar are the recommended default for desktop.


      ![Sidebar standard](/assets/images/sidebar03.svg "Sidebar standard")


      **Mini sidebar**\

      This variation is used for navigating the product when space is more limited but users still need the navigation to be quickly and easily accessible.\

      Its resting state is as a mini-sidebar, with only icons, at the same elevation as the content.\

      When expanded, the drawer changes its width and the extra content overlays the page.


      ![Sidebar mini expanded and collapsed](/assets/images/sidebar04.svg "Sidebar mini expanded and collapsed")


      The Mini Sidenav is collapsed by default and when the user hovers with the mouse over the bar it expands overlaying the content on the page.  On touch devices, when the user taps on the mini sidebar it will expand, and when taping again over a menu item it will then navigate. When the sidebar is expanded, tapping outside the sidebar will collapse it.


      ## When to use


      The navigation sidebar allow users to move around the product quickly and efficiently. It enables users to orient and navigate different sections of applications reliably.  \

      Atom offers two navigation options: top and side. To choose what’s right for you, you might consider first the information architecture and sitemap of your product. Navigation sidebar is best suited when there are more than 3 menu items, for 3 or less is best to use a [Topbar](/components/surfaces/top-bar).\

      \

      When a product has a substantial amount of content, sections, or features, a Navigation Sidebar can provide a hierarchical structure for users to easily access different areas.\

      \

      In larger configurations, when there’s enough screen real state available, the navigation pane is always on-screen, usually on the left of the view. On medium screens, consider collapsing it into a Mini version and on smaller ones hide it behind a menu button.


      ![Sidebar breakpoints](/assets/images/sidebar05.svg "Sidebar breakpoints")


      Sidebars include an optional **Header** and **Footer** and could also be used without a Topbar, although Topbars provide useful space for tools like notifications, global search, call to actions, user profile and settings, etc.


      ![Sidebar header and footer](/assets/images/sidebar06.svg "Sidebar header and footer")


      # Do's and dont's


      <DosAndDonts items={[{"description":"Navigation must be clear and purposeful. Opt for descriptive titles that convey the intended destination, as vague or irrelevant titles can hinder usability.","type":"do"},{"type":"avoid","description":"Avoid"}]} />
parent: 95SvEwV7BznSChttFanpW
uuid: eabbca8c-fe43-4c32-a2d2-7e575c0bb6ce
nestedSlug:
  - components
  - navigation
  - side-bar
---
