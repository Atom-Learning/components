---
slug: drawer
title: Drawer
links:
  viewSource: components/drawer
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      The `Drawer` component renders its children inside an Overlay Drawer
      and puts a dimmer over the rest of the screen.

      Functionality based on the [`Dialog`](https://www.radix-ui.com/docs/primitives/components/dialog) radix component, which already allows for: `defaultOpen` (uncontrolled), `open` (controlled) and `onOpenChange` props. 


      In addition to the radix component props, the `Drawer` also accepts a position property and positions its opening/closing pattern based on one of the 4 window sides: `top`, `right`, `bottom` or `left`.


      ## Position

      `position="top" | "right" | "bottom" | "left"` (default: `"left"`)


      <CodeBlock live={true} preview={true} code={`<Drawer position="left">
        <Drawer.Trigger asChild><Button>Open the drawer</Button></Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Flex align="center" justify="space-between">
              <Text>Header</Text>
              <Drawer.Close />
            </Flex>
          </Drawer.Header>
          <Drawer.Main>
            <Box css={{ height: '150%', background: '$base2' }}>
              <Text>Main</Text>
            </Box>
          </Drawer.Main>
          <Drawer.Footer>
            <Text>Footer</Text>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>`} language={"tsx"} />


      ## API Reference

      <ComponentProps component="Drawer" />


      <ComponentProps component="Drawer.Close" />


      <ComponentProps component="Drawer.Content" />


      <ComponentProps component="Drawer.Header" />


      <ComponentProps component="Drawer.Main" />


      <ComponentProps component="Drawer.Footer" />


      <ComponentProps component="Drawer.Trigger" />
  - title: Visual
    content: >-
      ## Structure


      A side panel on the left side of the screen, which lets users navigate the content of a product. It is collapsed and appears overlaid on top of a page and slides in from the side triggered by the hamburguer menu button.


      ![drawer structure](/assets/images/01-sidedrawer-structre.png "drawer structure")


      ### Overlay


      When a Drawer is triggered, an overlay is displayed behind it in order to visually differentiate the panel from the rest of the view. Clicking or tapping on the overlay is one way to dismiss the panel.


      ![drawer overlay](/assets/images/02-sidedrawer-overlay.png "drawer overlay")


      ### Sections and scroll


      By design, a drawer's height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.Background (app) is not scrollable while drawer is open (position: fixed).


      The header and content are always needed but the fixed footer is optional for each product to decide if they need one.\

      Header and footer display a shadow after scroll (see Topbar component).


      ![drawer sections](/assets/images/03-sidedrawer-sections.png "drawer sections")


      ## Size


      ![drawer size](/assets/images/04-sidedrawer-size.png "drawer size")


      | Property - element     | Token     | px    | rem |

      | ---------------------- | --------- | ----- | --- |

      | min-height - Menu item | size $5   | 48px  | \-  |

      | size - Icons           | size 'md' | 24px  | \-  |

      | width - drawer panel   | \-        | 304px | \-  |


      ### Margins and paddings


      ![drawer margins and paddings](/assets/images/05-sidedrawer-margins-and-paddings.png "drawer margins and paddings")


      | Property - element                                 | Token    | px   | rem  |

      | -------------------------------------------------- | -------- | ---- | ---- |

      | Padding left & right                               | space $4 | 16px | 1    |

      | Padding left - Children                            | space $5 | 32px | 2    |

      | Margin right - Icon                                | space $3 | 12px | 0.75 |

      | padding top & bottom - divider                     | space $1 | 4px  | 0.25 |

      | padding top & bottom - container                   | space $2 | 8px  | 0.5  |

      | Padding top & bottom - elements (button, input...) | space $2 | 8px  | 0.5  |


      ![drawer card paddings](/assets/images/06-sidedrawer-avatar.png "drawer card paddings")


      | Property & element    | Token    | px   | rem |

      | --------------------- | -------- | ---- | --- |

      | Padding - all         | space $4 | 16px | 1   |

      | Margin-right - Avatar | space $2 | 8px  | 0.5 |


      #### Accordion (Submenu)


      When a menu item have children it acts as an accordion. Styles are consistent with regular menu items except when specified.


      ![Drawer accordion menu](/assets/images/07-sidedrawer-menu.png "Drawer accordion menu")


      ## Typography


      ![drawer typography](/assets/images/08-sidedrawer-typography.png "drawer typography")


      | Element - state                | Family | Weight | Size | Rem      | px  |

      | ------------------------------ | ------ | ------ | ---- | -------- | --- |

      | Group header                   | $body  | 600    | $sm  | 0.875rem | 14  |

      | Menu item                      | $body  | 400    | $md  | 1rem     | 16  |

      | Menu item (selected, expanded) | $body  | 600    | $md  | 1rem     | 16  |

      | User name                      | $body  | 400    | $md  | 1rem     | 16  |

      | User description               | $body  | 400    | $sm  | 0.875rem | 14  |


      ## Color


      ![drawer color](/assets/images/09-sidedrawer-color.png "drawer color")


      | Property & Element - State                   | Token     | Hex |

      | -------------------------------------------- | --------- | --- |

      | Font color - group header & menu item        | $grey900  | \#  |

      | Font color - menu item selected (all states) | $blue800  | \#  |

      | Font color - User name                       | $grey1000 | \#  |

      | Font color - User description                | $grey600  | \#  |


      ![drawer color sections](/assets/images/10-sidedrawer-color-2.png "drawer color sections")


      | Property & Element - State            | Token    | Hex |

      | ------------------------------------- | -------- | --- |

      | Border-color - Footer (1px top)       | $grey200 | \#  |

      | Border-color - User card (1px bottom) | $grey200 | \#  |


      ![drawer menu items color](/assets/images/11-sidedrawer-color-3.png "drawer menu items color")


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


      ![drawer color menu expanded](/assets/images/12-sidedrawer-color-4.png "drawer color menu expanded")


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
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: 96eOG7OojxOpfsmMB-rCr
nestedSlug:
  - components
  - surfaces
  - drawer
---
