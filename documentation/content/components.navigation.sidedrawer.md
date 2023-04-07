---
slug: sidedrawer
title: Sidedrawer
links:
  viewSource: components/sidedrawer
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      `Sidedrawer` exports components that combine to build complex side
      navigation.


      ## The `Sidedrawer` root


      Sidedrawer exposes few main elements to build foundations. The core element is a `Sidedrawer` which wraps entire components composition. `Sidedrawer` has build-in state, but also allows you to pass props to control if from the outside. The Sidedrawer root is made in top of the [radix dialog](https://www.radix-ui.com/docs/primitives/components/dialog)


      Optional `Sidedrawer` props


      * `isOpen` property determines if the whole `Sidedrawer` is visible or not.

      * `onOpenChange` prop should be a function which updates `isOpen` state. This function is triggered automatically when click on `Sidedrawer.Overlay`, `Sidedrawer.Close` or press `Escape` key.


      ### Fundamental root componenents


      * `Sidedrawer.Trigger` - It's the main `trigger element` responsible for opening the whole `Sidedrawer.Content`. This component is build on top of [radix dialog trigger](https://www.radix-ui.com/docs/primitives/components/dialog#trigger)

      * `Sidedrawer.Content` - This is whe wrapper for whole content (`Sidedrawer.Header`, `Sidedrawer.Body`, `Sidedrawer.Footer` and other nested elements). This component is build on top of [radix dialog content](https://www.radix-ui.com/docs/primitives/components/dialog#content)


      <CodeBlock live={true} preview={true} code={`<Sidedrawer>
        <Sidedrawer.Trigger asChild>
          <Button>Open the navigation</Button>
        </Sidedrawer.Trigger>
        <Sidedrawer.Content>the sidedrawer content</Sidedrawer.Content>
      </Sidedrawer>`} language={"tsx"} />


      ### The `Sidedrawer.Content` children building blocks


      * `Sidedrawer.Header` - It's based on `TopBar` component, so it plays really well with all `TopBar` subcomponents. This component is flexible, so you can render anything you need inside of it (for example app logo, Sidedrawer.Close etc.)

      * `Sidedrawer.Close` - It's an `"close" ActionIcon` which triggers `Sidedrawer.Content` closing.

      * `Sidedrawer.Body` - This is the wrapper for all `Sidedrawer.Item` items. The content is scrollable.

      * `Sidedrawer.Footer` - Optional part of the `Sidedrawer`. It's fixed to the botton. You can pass whatever you need as it's children.


      <CodeBlock live={true} preview={true} code={`<Sidedrawer>
        <Sidedrawer.Trigger asChild>
          <Button>Open the navigation</Button>
        </Sidedrawer.Trigger>
        <Sidedrawer.Content>
          <Sidedrawer.Header>
            <Sidedrawer.Close />
          </Sidedrawer.Header>
          <Sidedrawer.Body>Sidedrawer items and Accordions here</Sidedrawer.Body>
          <Sidedrawer.Footer>Footer items here</Sidedrawer.Footer>
        </Sidedrawer.Content>
      </Sidedrawer>`} language={"tsx"} />


      ## Sidedrawer.Body children


      You most likely want to use `Sidedrawer.Item` or `Sidedrawer.Accordion` inside of `Sidedrawer.Body`


      ### Sidedrawer.Item


      Sidedrawer exposes `Item` component to build a navigation elements. `Sidedrawer.Item` is renderes as a `link` or a `button` depends on passed props.


      * `href` prop determine a link render

      * `onClick` prop determines a button render


      **Link item:**


      <CodeBlock live={false} preview={false} code={`<Sidedrawer.Item href={'/'}>
        <Icon is={Apps} />
        Dashboard
      </Sidedrawer.Item>`} language={"tsx"} />


      **Button item:**


      <CodeBlock live={false} preview={false} code={`<Sidedrawer.Item onClick={logout}>
        <Icon is={Exit} />
        Log out
      </Sidedrawer.Item>`} language={"tsx"} />


      ### Sidedrawer.Accordion


      **Accordion item:**


      Accordion item requires few elements to work properly:


      * `value` property is a unique identifier needed to expand accordion content. [read more](https://www.radix-ui.com/docs/primitives/components/accordion#item)

      * `Sidedrawer.AccordionTrigger` - This component is a trigger which expand/collapse Accordion content. You can pass a text or components composition as its children.

      * `Sidedrawer.AccordionContent` - This component contains whole accorion content. Most likely you would like to pass few another `Sidedrawer.Item` items inside. Accordion content is collapsed until you click the `Sidedrawer.AccordionTrigger` to expand it.


      <CodeBlock live={false} preview={false} code={`<Sidedrawer.Accordion value="your_unique_identifier">
        <Sidedrawer.AccordionTrigger>
          <Icon is={New} css={{ mr: '$2' }} />
          Set work
        </Sidedrawer.AccordionTrigger>
        <Sidedrawer.AccordionContent>
          <Sidedrawer.Item href={'/practice'}>
            <Icon is={Feed} css={{ mr: '$2' }} />
            Practice
          </Sidedrawer.Item>
          <Sidedrawer.Item href={'/test'}>
            <Icon is={Inbox} css={{ mr: '$2' }} />
            Test
          </Sidedrawer.Item>
        </Sidedrawer.AccordionContent>
      </Sidedrawer.Accordion>`} language={"tsx"} />


      ## Whole Sidedrawer components composition


      <CodeBlock live={true} preview={true} code={`<Sidedrawer>
        <Sidedrawer.Trigger asChild>
          <Button>Open the Sidedrawer</Button>
        </Sidedrawer.Trigger>
        <Sidedrawer.Content>
          <Sidedrawer.Header>
            <Sidedrawer.Close />
            <TopBar.BrandLogo
              src={'https://atomlearning.co.uk/_next/static/media/logo.e9276284.svg'}
            />
          </Sidedrawer.Header>
          <Sidedrawer.Body>
            <Sidedrawer.Item href={'/'} active>
              Dashboard
            </Sidedrawer.Item>
            <Sidedrawer.Accordion value="1" disabled>
              <Sidedrawer.AccordionTrigger>Set work</Sidedrawer.AccordionTrigger>
              <Sidedrawer.AccordionContent>
                <Sidedrawer.Item href={'/'}>Set Practice</Sidedrawer.Item>
                <Sidedrawer.Item href={'/'}>Mock Tests</Sidedrawer.Item>
              </Sidedrawer.AccordionContent>
            </Sidedrawer.Accordion>
            <Sidedrawer.Accordion value="2">
              <Sidedrawer.AccordionTrigger>Resources</Sidedrawer.AccordionTrigger>
              <Sidedrawer.AccordionContent>
                <Sidedrawer.Item onClick={() => console.log('clicked!')}>
                  I am a button
                </Sidedrawer.Item>
                <Sidedrawer.Item href="/">I am a link</Sidedrawer.Item>
              </Sidedrawer.AccordionContent>
            </Sidedrawer.Accordion>
          </Sidedrawer.Body>
          <Sidedrawer.Footer>The footer content</Sidedrawer.Footer>
        </Sidedrawer.Content>
      </Sidedrawer>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Sidedrawer" />


      <ComponentProps component="Sidedrawer.AccordionContent" />


      <ComponentProps component="Sidedrawer.AccordionTrigger" />


      <ComponentProps component="Sidedrawer.Body" />


      <ComponentProps component="Sidedrawer.Close" />


      <ComponentProps component="Sidedrawer.Content" />


      <ComponentProps component="Sidedrawer.Footer" />


      <ComponentProps component="Sidedrawer.Header" />


      <ComponentProps component="Sidedrawer.Item" />


      <ComponentProps component="Sidedrawer.Trigger" />
  - title: Visual
    content: >-
      ## Structure


      A side panel on the left side of the screen, which lets users navigate the content of a product. It is collapsed and appears overlaid on top of a page and slides in from the side triggered by the hamburguer menu button.


      ![sidedrawer structure](/admin/images/01-sidedrawer-structre.png "sidedrawer structure")


      ### Overlay


      When a Sidedrawer is triggered, an overlay is displayed behind it in order to visually differentiate the panel from the rest of the view. Clicking or tapping on the overlay is one way to dismiss the panel.


      ![sidedrawer overlay](/admin/images/02-sidedrawer-overlay.png "sidedrawer overlay")


      ### Sections and scroll


      By design, a drawer's height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.Background (app) is not scrollable while drawer is open (position: fixed).


      The header and content are always needed but the fixed footer is optional for each product to decide if they need one.\

      Header and footer display a shadow after scroll (see Topbar component).


      ![sidedrawer sections](/admin/images/03-sidedrawer-sections.png "sidedrawer sections")


      ## Size


      ![sidedrawer size](/admin/images/04-sidedrawer-size.png "sidedrawer size")


      | Property - element     | Token     | px    | rem |

      | ---------------------- | --------- | ----- | --- |

      | min-height - Menu item | size $5   | 48px  | \-  |

      | size - Icons           | size 'md' | 24px  | \-  |

      | width - drawer panel   | \-        | 304px | \-  |


      ### Margins and paddings


      ![sidedrawer margins and paddings](/admin/images/05-sidedrawer-margins-and-paddings.png "sidedrawer margins and paddings")


      | Property - element                                 | Token    | px   | rem  |

      | -------------------------------------------------- | -------- | ---- | ---- |

      | Padding left & right                               | space $4 | 16px | 1    |

      | Padding left - Children                            | space $5 | 32px | 2    |

      | Margin right - Icon                                | space $3 | 12px | 0.75 |

      | padding top & bottom - divider                     | space $1 | 4px  | 0.25 |

      | padding top & bottom - container                   | space $2 | 8px  | 0.5  |

      | Padding top & bottom - elements (button, input...) | space $2 | 8px  | 0.5  |


      ![sidedrawer card paddings](/admin/images/06-sidedrawer-avatar.png "sidedrawer card paddings")


      | Property & element    | Token    | px   | rem |

      | --------------------- | -------- | ---- | --- |

      | Padding - all         | space $4 | 16px | 1   |

      | Margin-right - Avatar | space $2 | 8px  | 0.5 |


      #### Accordion (Submenu)


      When a menu item have children it acts as an accordion. Styles are consistent with regular menu items except when specified.


      ![Sidedrawer accordion menu](/admin/images/07-sidedrawer-menu.png "Sidedrawer accordion menu")


      ## Typography


      ![sidedrawer typography](/admin/images/08-sidedrawer-typography.png "sidedrawer typography")


      | Element - state                | Family | Weight | Size | Rem      | px  |

      | ------------------------------ | ------ | ------ | ---- | -------- | --- |

      | Group header                   | $body  | 600    | $sm  | 0.875rem | 14  |

      | Menu item                      | $body  | 400    | $md  | 1rem     | 16  |

      | Menu item (selected, expanded) | $body  | 600    | $md  | 1rem     | 16  |

      | User name                      | $body  | 400    | $md  | 1rem     | 16  |

      | User description               | $body  | 400    | $sm  | 0.875rem | 14  |


      ## Color


      ![sidedrawer color](/admin/images/09-sidedrawer-color.png "sidedrawer color")


      | Property & Element - State                   | Token     | Hex |

      | -------------------------------------------- | --------- | --- |

      | Font color - group header & menu item        | $grey900  | \#  |

      | Font color - menu item selected (all states) | $blue800  | \#  |

      | Font color - User name                       | $grey1000 | \#  |

      | Font color - User description                | $grey600  | \#  |


      ![sidedrawer color sections](/admin/images/10-sidedrawer-color-2.png "sidedrawer color sections")


      | Property & Element - State            | Token    | Hex |

      | ------------------------------------- | -------- | --- |

      | Border-color - Footer (1px top)       | $grey200 | \#  |

      | Border-color - User card (1px bottom) | $grey200 | \#  |


      ![sidedrawer menu items color](/admin/images/11-sidedrawer-color-3.png "sidedrawer menu items color")


      | Property & Element - State                     | Token    | Hex |

      | ---------------------------------------------- | -------- | --- |

      | Bg color - Container                           | $white   | \#  |

      | Bg color - Menu item - default, focus          | $white   | \#  |

      | Bg color - Menu item - hover                   | $grey100 | \#  |

      | Bg color - Menu item - pressed                 | $grey200 | \#  |

      | Bg color - Menu item - Selected default, focus | $blue100 | \#  |

      | Border-color - Menu item - focus 2px           | $blue800 | \#  |

      | Icon-color - default                           | $grey800 | \#  |

      | Icon-color - selected                          | $blue800 | \#  |


      | State - element         | Value       |

      | ----------------------- | ----------- |

      | Disabled - all elements | 30% opacity |


      | Property - element         | Token     |

      | -------------------------- | --------- |

      | Effects shadow - container | shadow $2 |


      ![sidedrawer color menu expanded](/admin/images/12-sidedrawer-color-4.png "sidedrawer color menu expanded")


      | Property & Element - State                     | Token    | Hex |

      | ---------------------------------------------- | -------- | --- |

      | Bg color - Container                           | $white   | \#  |

      | Bg color - Menu item - default, focus          | $white   | \#  |

      | Bg color - Menu item - hover                   | $grey100 | \#  |

      | Bg color - Menu item - pressed                 | $grey200 | \#  |

      | Bg color - Menu item - Selected default, focus | $blue100 | \#  |

      | Border-color - Menu item - focus 2px           | $blue800 | \#  |

      | Icon-color                                     | $grey800 |     |


      | State - element         | Value       |

      | ----------------------- | ----------- |

      | Disabled - all elements | 30% opacity |


      | Property - element         | Token     |

      | -------------------------- | --------- |

      | Effects shadow - container | shadow $2 |
parent: 95SvEwV7BznSChttFanpW
uuid: 96eOG7OojxOpfsmMB-rCr
nestedSlug:
  - components
  - navigation
  - sidedrawer
---
