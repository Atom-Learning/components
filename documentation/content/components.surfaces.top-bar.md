---
slug: top-bar
title: Top Bar
links:
  viewSource: components/top-bar
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      The top bar provides content and actions related to the current screen. It
      is used for branding, screen titles, navigation, and actions.


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
  - title: Visual
    content: >-
      ## Structure


      The topbar is a header component that allows users to search, access menus, and navigate. By default it’s always fixed at the top of the interface (sticky position).


      The top bar contains a lot of important info and will be present throughout the whole user’s experience. Cluttering this area can make the app feel overwhelming. Therefore, it has a suitable height of 64px so that things can breathe and do not look squished.


      By default the topbar takes up the full width of the viewport and the height is consistent through all different device sizes but it will adapt it’s content according to the different breakpoints.


      The logo and product title can be turned into a link no navigate to the home or dashboard.\

      All components contained within the top navbar can be rearanged/positioned in any way.


      ![Navigation topbar structure](/admin/images/01-navigation-topbar-structure.png "Navigation topbar structure")


      | Property - element           | Token        | px   | rem  |

      | ---------------------------- | ------------ | ---- | ---- |

      | Height - Topbar              | size $6      | 64px | \-   |

      | Height - Logo                | size $2      | 24px | 1.5  |

      | Size - Action Icon           | variant 'lg' | 40px | 2.5  |

      | Distance logo - product name | space $3     | 12px | 0.75 |

      | Distance burguer menu - logo | space $2     | 8px  | 0.5  |

      | Distance avatar - divider    | space $4     | 16px | 1    |


      ![Navigation menu router links](/admin/images/02-navigation-topbar-size.png "Navigation menu router links")


      | Property                     | Token     | px      | rem  |

      | ---------------------------- | --------- | ------- | ---- |

      | Height                       | size $4   | 40px    | 2.5  |

      | Distance between menu items  | space $1  | 4px     | 0.25 |

      | Distance between menu & icon | space $1  | 4px     | 0.25 |

      | Selection line               | size $2   | 24px    | 1.5  |

      | Icon size                    | size 'sm' | 16x16px | 1    |

      | Border radious               | radii $1  | 8px     | 0.5  |


      .


      | Property & element                             | Token     | Hex |

      | ---------------------------------------------- | --------- | --- |

      | Font color - men item default, focus, disabled | $grey800  | \#  |

      | Font color - hover, pressed                    | $grey1000 | \#  |

      | Bg color - hover                               | $grey100  | \#  |

      | Bg color - pressed                             | $grey100  | \#  |


      .


      | Property & Element - State                 | Pixel | Color    |

      | ------------------------------------------ | ----- | -------- |

      | Focus shadow - border (with 2px white gap) | 2px   | $blue800 |


      \*Focus shouldn't persist on click and should only persist on tab focus, ect.


      | Property & Element - State | value       |

      | -------------------------- | ----------- |

      | Disabled: all elements     | 30% opacity |


      ![Navigation topbar margins](/admin/images/03-navigation-topbar-margins.png "Navigation topbar margins")


      In order to align Action icons visually with the rest of the interface, when they are placed as the first or last element we rest 8px so that is the actual icon that is aligned and not the parent container. This is because the action icon has a margin itself




      ### Scroll behaviour


      The topbar is always fixed while scrolling down the page. This is the default option and very convenient in general, as it allows the user to access the navigation and tools at any point within the page.


      ![Navigation topbar scroll behaviour](/admin/images/04-navigation-topbar-scroll.png "Navigation topbar scroll behaviour")


      After scrool the topbar shows a subtle shadow indicating elevation and the content will scroll beneath.


      ![Navigation topbar after scroll behaviour](/admin/images/05-navigation-topbar-after-scroll.png "Navigation topbar after scroll behaviour")


      All actions besides the menu are right-aligned with a maxium of 3 actions. A kebab (3 dots) menu is also recommended to group actions when there’s enought options to keep the topbar uncluttered.


      ![Navigation topbar action menu](/admin/images/06-navigation-topbar-actions-menu.png "Navigation topbar action menu")


      #### Detail page


      In small devices the topbar changes a little bit once you navigate to a detail page. It displays the page title, page actions and a back button to go back to the previous page.


      ![Navigation topbar detail page](/admin/images/07-navigation-topbar-detail-page.png "Navigation topbar detail page")


      ## Typography


      ![Navigation topbar typography](/admin/images/08-navigation-topbar-typography.png "Navigation topbar typography")


      | Element       | Family | Weight | Size | Rem  | px  |

      | ------------- | ------ | ------ | ---- | ---- | --- |

      | Page title    | $body  | 400    | $md  | 1rem | 16  |

      | Product title | $body  | 400    | $md  | 1rem | 16  |


      ## Color


      ![Navigation topbar color](/admin/images/09-navigation-topbar-color.png "Navigation topbar color")


      | Property & Element - State    | Token     | Hex |

      | ----------------------------- | --------- | --- |

      | Font color - Product title    | $grey800  | \#  |

      | Font color - Page title       | $grey1000 | \#  |

      | Divider                       | $grey200  | \#  |

      | Bg color - Topbar             | $white    | \#  |

      | Color - Default - Action icon | $grey800  | \#  |
  - title: Usage
    content: >-
      ## Overview


      The topbar is a header component that allows users to search, access menus, and navigate. It should be easily accessible to the user so by default it’s always visible and fixed at the top of the interface.


      Topbars display information and actions relating to the current screen. Since they are present in most pages of a product, it is paramount they are designed effectively.


      ![Navigation topbar overview](/admin/images/01-navigation-topbar-overview.png "Navigation topbar overview")


      Navigation topbar overview


      ## When to use


      The navigation topbar standarizes a shared navigation experience across products that allow users to move around the product quickly and efficiently. It enables users to orient and navigate different sections of applications reliably.\

      Atom offers two navigation options: top and side. To choose what’s right for you, you might consider first the information arquitecture and sitemap of your product.


      #### Logo


      The Atom logo and the app name behave not only as branding touchpoints but also as landmarks and should therefore be applied consistently within all products and if possible in most pages to facilitate orientation. Detail pages on small devices don’t include the logo because of limitation of space.


      ![Navigation topbar logo](/admin/images/02-navigation-topbar-logo.png "Navigation topbar logo")


      #### Breakpoints


      The topbar will adapt it’s content according to the different breakpoints. Consider the tools you need for your app and what’s the best way to display them in the different breakpoints. Here’s an example: Notice how, in this case, the navigation elements on the tabs in bigger breakpoints become hidden under the hamburguer menu in smaller devices. Also the search bar becomes an action button on small breakpoints.


      ![Navigation topbar breakpoints](/admin/images/03-navigation-topbar-breakpoints.png "Navigation topbar breakpoints")


      Image rescaled 50%


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/admin/images/04-navigation-topbar-do-1.png","type":"do","description":"Organize the navigation and toolbar elements by hierarchy, following a information arquitecture’s structure."},{"image":"/admin/images/05-navigation-topbar-avoid-2.png","type":"avoid","description":"Using more than 3 tools in mobile as space is limited, use dropdown menu instead."},{"image":"/admin/images/06-navigation-topbar-do-3.png","type":"do","description":"Keep navigation menu link labels clear and concise. Prefer max 1-2 word long labels. "},{"image":"/admin/images/07-navigation-topbar-avoid-4.png","type":"avoid","description":"Avoid starting multiple menu link labels with the same word."}]} />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - surfaces
  - top-bar
---
