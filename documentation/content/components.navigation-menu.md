---
slug: navigation-menu
title: Navigation Menu
links:
  viewSource: components/navigation-menu
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      `NavigationMenu` exports many components that combine to form a
      navigation menu.


      <CodeBlock live={true} preview={true} code={`<NavigationMenu>
        <NavigationMenu.Link href="/overview/introduction">
          Introduction
        </NavigationMenu.Link>
        <NavigationMenu.Dropdown id="1">
          <NavigationMenu.DropdownTrigger>Theme</NavigationMenu.DropdownTrigger>
          <NavigationMenu.DropdownContent>
            <NavigationMenu.DropdownItem href="/theme/colours">
              Colours
            </NavigationMenu.DropdownItem>
            <NavigationMenu.DropdownItem href="/theme/effects">
              Effects
            </NavigationMenu.DropdownItem>
            <NavigationMenu.DropdownItem href="/theme/icons">
              Icons
            </NavigationMenu.DropdownItem>
          </NavigationMenu.DropdownContent>
        </NavigationMenu.Dropdown>
      </NavigationMenu>`} language={"tsx"} />


      ## With client side routing


      `NavigationMenu.Dropdown`, `NavigationMenu.DropdownItem` and `NavigationMenu.Link` can be passed an `active` prop for instances when you want to highlight the currently active route. See below for examples using client side routing with the `NavigationMenu.Link` component. The same method can be applied to `NavigationMenu.Dropdown` and `NavigationMenu.DropdownItem`.


      ### Example using React Router


      <CodeBlock live={false} preview={false} code={`const Link = ({ href, ...props }) => {
        const { pathname } = useLocation()
        const isActive = path === href

        return (
          <NavigationMenu.Link active={isActive} {...props}>
            Introduction
          </NavigationMenu.Link>
        )
      }`} language={"tsx"} />


      ### Example using Next JS


      <CodeBlock live={false} preview={false} code={`const Link = ({ href, ...props }) => {
        const router = useRouter()
        const isActive = router.asPath === href

        return (
          <NavigationMenu.Link active={isActive} {...props}>
            Introduction
          </NavigationMenu.Link>
        )
      }`} language={"tsx"} />


      ## Changing the layout of the dropdown content


      By default, dropdown items inside of `NavigationMenu.DropdownContent` will stack.


      If you want to change the way items are displayed, you can add custom styling to `NavigationMenu.DropdownContent`.


      In the below example the styling of `NavigationMenu.DropdownContent` has been changed to allow a grid layout.


      <CodeBlock live={true} preview={true} code={`<NavigationMenu>
        <NavigationMenu.Link href="/overview/introduction">
          Introduction
        </NavigationMenu.Link>
        <NavigationMenu.Dropdown id="1">
          <NavigationMenu.DropdownTrigger>Theme</NavigationMenu.DropdownTrigger>
          <NavigationMenu.DropdownContent
            css={{
              display: 'grid',
              gap: '$1',
              gridAutoFlow: 'column',
              width: 500,
              gridTemplateRows: 'repeat(2, 1fr)'
            }}
          >
            \{['colours', 'icons', 'effects', 'typography'].map((item) => (
              <NavigationMenu.DropdownItem href=\{\`/theme/$\{item}\`}>
                <NavigationMenu.DropdownItemTitle>
                  {item}
                </NavigationMenu.DropdownItemTitle>
                <Text>This is some example text about \{item}</Text>
              </NavigationMenu.DropdownItem>
            ))}
          </NavigationMenu.DropdownContent>
        </NavigationMenu.Dropdown>
      </NavigationMenu>`} language={"tsx"} />


      ## DropdownItem composition example


      DropdownItem gives a lot of flexibility. It's an easy to compose it for own purposes.


      <CodeBlock live={false} preview={false} code={`<NavigationMenu.DropdownItem href="/" active>
        <Grid
          css={{
            gridTemplateColumns: '1fr 7fr'
          }}
        >
          <Icon is={Feed} size={'md'} />
          <Flex css={{ flexDirection: 'column' }}>
            <NavigationMenu.DropdownItemTitle bold css={{ mb: '$3' }}>
              Example title
            </NavigationMenu.DropdownItemTitle>
            <Text>This is example subtitle</Text>
          </Flex>
        </Grid>
      </NavigationMenu.DropdownItem>`} language={"tsx"} />


      ## Dropdown Trigger


      NavigationMenu.Dropdown gives you the way to pass your own trigger component inside the `NavigationMenu.DropdownTrigger`. The children of NavigationMenu.DropdownTrigger can be a plain text or more complex component.


      <CodeBlock live={false} preview={false} code={`<NavigationMenu.Dropdown id="1">
        <NavigationMenu.DropdownTrigger>
          <Avatar />
        </NavigationMenu.DropdownTrigger>
        <NavigationMenu.DropdownContent>// content</NavigationMenu.DropdownContent>
      </NavigationMenu.Dropdown>


      <NavigationMenu.Dropdown id="2">
        <NavigationMenu.DropdownTrigger>
          Plain text
        </NavigationMenu.DropdownTrigger>
        <NavigationMenu.DropdownContent>// content</NavigationMenu.DropdownContent>
      </NavigationMenu.Dropdown>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="NavigationMenu" />


      <ComponentProps component="NavigationMenu.Link" />


      <ComponentProps component="NavigationMenu.Dropdown" />


      <ComponentProps component="NavigationMenu.DropdownContent" />


      <ComponentProps component="NavigationMenu.DropdownItem" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: VnOUwVVSylN-gmDVJ1Yes
nestedSlug:
  - components
  - navigation-menu
---
