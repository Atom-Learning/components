---
slug: segmented-control
title: Segmented Control
links:
  viewSource: ""
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      The segmented control is an alternative to Tabs and Toggle groups,
      which offers more visual prominence in the page and therefore makes it
      suitable to use at the top level of a page (rather than within a
      component/section). 


      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="md" defaultValue="one">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading one</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Description one
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two">
          <SegmentedControl.Heading>Heading two</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Descritpion two
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />


      ## Sizes

      There are three supported sizes - `sm`, `md` and `lg`

      ### sm

      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="sm" defaultValue="one">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading one</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Description one
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two">
          <SegmentedControl.Heading>Heading two</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Descritpion two
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />

      ### md

      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="md" defaultValue="one">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading one</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Description one
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two">
          <SegmentedControl.Heading>Heading two</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Descritpion two
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />

      ### lg

      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="lg" defaultValue="one">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading one</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Description one
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two">
          <SegmentedControl.Heading>Heading two</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Descritpion two
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />

      ## Theme

      There are two supported themes - `primary` and `marsh`

      ### primary

      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="md" defaultValue="one" theme="primary">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading one</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Description one
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two">
          <SegmentedControl.Heading>Heading two</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Descritpion two
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />

      ### marsh

      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="md" defaultValue="one" theme="marsh">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading one</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Description one
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two">
          <SegmentedControl.Heading>Heading two</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Descritpion two
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />


      ## Badge & Icons

      `SegmentedControl` comes with `Badge` and `Icon` components as well. Here is an example of those in action :


      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="md" defaultValue="one">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Icon is={Alarm}/>
          <SegmentedControl.Badge theme="danger">
            Due today
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two">
          <SegmentedControl.Icon is={Anchor}/>
          <SegmentedControl.Badge theme="warning">
            Due in a month
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />


      ## Disabled Items

      It is possible to render `SegmentedControl.Item` as `disabled`


      <CodeBlock live={true} preview={true} code={`<SegmentedControl.Root size="md" defaultValue="one">
        <SegmentedControl.Item value="one">
          <SegmentedControl.Heading>Heading one</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Description one
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="two" disabled>
          <SegmentedControl.Heading>Heading two</SegmentedControl.Heading>
          <SegmentedControl.Description>
            Descritpion two
          </SegmentedControl.Description>
        </SegmentedControl.Item>
        <SegmentedControl.Content value="one">
          Content one
        </SegmentedControl.Content>
        <SegmentedControl.Content value="two">
          Content two
        </SegmentedControl.Content>
      </SegmentedControl.Root>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="SegmentedControlRoot" /> <ComponentProps component="SegmentedControlItem" /> <ComponentProps component="SegmentedControlHeading" /> <ComponentProps component="SegmentedControlDescription" /> <ComponentProps component="SegmentedControlIcon" /> <ComponentProps component="SegmentedControlContent" /> <ComponentProps component="SegmentedControlBadge" />
  - title: Usage
    content: >-
      ## Overview

      A component that lets users select between a group of 2-6 options (segments), all stored in one container.


      It should generally be used at the top level of navigation in a page and have a single selectable option.


      The segmented control is an alternative to Tabs and Toggle groups, which offers more visual prominence in the page and therefore makes it suitable to use at the top level of a page (rather than within a component/section). 


      On desktop the segments should all have identical sizes (inherited from the size of the largest one) to present all selectable options as equal, while on mobile the segments can overflow outside the viewport, but wrap tightly around the content to fit as many options on screen as possible.


      For a larger amount of options use tabs or select.


      ![segmented control overview](/assets/images/segmented-control-01.png "segmented control overview")


      ## When to use


      * If you need to add context or secondary information to each of the selectable options in a page

      * If a single option of the set may be selected.


      Use a segmented control as a switch between different views. It’s most suitable when an extra description for each of the available views could be helpful to the user to make a selection. For example, use the component to show which subject would require the parent’s attention first in the Track page by including the mastery level as the description.


      ## Copy and secondary information

      The secondary information/description in each of the segments can provide useful context to the user that helps them more easily make a selection without them having to go into each of the individual views. This also allows to keep the segment title short and snappy, improving the overall clarity of the UI.


      When using text for the descriptions, make sure the copy is clear and concise and is of similar length for all options to make them look visually balanced. It’s recommended that it doesn’t take up more than 2 lines to keep the attention on the segment title itself.  


      Use sentence case for both the title and description shown.


      ![segmented control copies](/assets/images/segmented-control-02.png "segmented control copies")


      ## Size


      When building a layout, specify the appropriate size variant of the segmented control, depending on the size of the viewport and the other information/components in the page.


      As general guidance, the ‘md’ variant should work for almost all scenarios on desktop breakpoints, while ‘sm’ is recommended for mobile, as it allows for more segments to fit on screen (due to the segment wrapping around the content, rather than expanding to match the biggest option in size). If the rest of the information in the page is larger than usual, or this is one of the few components in the view, the ‘lg’ variant may be suitable on desktop.


      ![segmented control sizes](/assets/images/segmented-control-03.png "segmented control sizes")


      ## Segments with an icon


      Segments may also include icons in each option, if you want to bring extra attention to the component within the page. 


      The icons should all have a consistent size (as per the selected size variant) and match the meaning of the corresponding page, in a way that’s consistent with the application where they’re used.


      ![segmented control with icons](/assets/images/segmented-control-04.png "segmented control with icons")


      ## Do's and Don'ts


      <DosAndDonts items={[{"description":"Allow the segment to overflow outside the viewport when using on a smaller breakpoint","type":"do","image":"/assets/images/segmented-control-dos-and-donts-01.png"},{"image":"/assets/images/segmented-control-dos-and-donts-02.png","description":"Use overly long copy for the description of a segment","type":"dont"},{"image":"/assets/images/segmented-control-dos-and-donts-03.png","description":"Start with a capital letter and use sentence case, but don't add full stops.","type":"do"},{"image":"/assets/images/segmented-control-dos-and-donts-04.png","description":"Mix text-only segments with segments with icons","type":"dont"},{"image":"","type":"avoid","description":"Using multiple segmented controls per page. They should only be used for the top-level/most important navigation."}]} />
  - title: Style
    content: >-
      ## Structure


      A component that lets users select between a group of 2-6 options (segments), all stored in one container.


      It should generally be used at the top level of navigation in a page and have a single selectable option.


      ![segmented control structure](/assets/images/segmented-control-05.png "segmented control structure")


      | Property                  | Token   | Pixel    | Rem    |

      | ------------------------- | ------- | -------- | ------ |

      | Border radius - segment   | radii-2 | 12px     | 0.75   |

      | Border radius - container | radii-3 | 16px     | 1      |


      | Property                        | Pixel |

      | ------------------------------- | ----- |

      | Border-width (inside) - Focus   | 2px   |


      ## Size

      The size of the segment’s padding and typography will vary with each of the size variants of the component.


      For the md and lg size variants of the segment, the padding sizes and behaviour will be identical. As these would be primarily used for bigger breakpoints, each segment in the group should have the same size, inheriting the size of the biggest segment when the content size within is different.


      For the sm variant, we want each segment to wrap around the content, given the minimum padding shown, even if that means some segments would be bigger than others. This is to save space and fit as much as possible on mobile breakpoints, where this would be primarily used.


      The padding of the container around the segment group will remain the same across all size variants.


      ![segmented control size](/assets/images/segmented-control-07.png "segmented control size")


      | Segment                    | Token    | Pixel    | Rem    |

      | -------------------------- | -------- | -------- | ------ |

      | Padding-horizontal sm      | space-4  | 16px     | 1      |

      | Padding-vertical sm        | space-24 | 24px     | 1.5    |

      | Padding-horizontal md, lg  | space-5  | 32px     | 2      |

      | Padding-vertical md, lg    | space-24 | 24px     | 1.5    |

      | Title margin-bottom sm     | space-3  | 12px     | 0.75   |

      | Title margin-bottom md, lg | space-4  | 16px     | 1      |


      | Container               | Token    | Pixel    | Rem    |

      | ----------------------- | -------- | -------- | ------ |

      | Padding-horizontal      | space-1  | 4px      | 0.25   |

      | Padding-vertical        | space-1  | 4px      | 0.25   |


      ## Segment with an icon

      ![segmented control with icon](/assets/images/segmented-control-08.png "segmented control with icon")

      | Segment                    | Token    | Pixel    | Rem    |

      | -------------------------- | -------- | -------- | ------ |

      | Icon margin-bottom sm      | space-3  | 12px     | 0.75   |

      | Icon margin-bottom md, lg  | space-4  | 16px     | 1      |

      | Icon size sm               | sm       | 16px     | -      |

      | Icon size md, lg           | md       | 24px     | -      |


      ## Typography

      ![segmented control typography](/assets/images/segmented-control-09.png "segmented control typography")


      | Property - element     | Family | Weight  | Size | Rem    | px   |

      | ---------------------- | ------ | ------- | ---- | ------ | ---- |

      | Font - title sm        | $body  | 600     | $sm  | 0.875  | 14   |

      | Font - description sm  | $body  | 400     | $xs  | 0.75   | 12   |

      | Font - title md        | $body  | 600     | $md  | 1      | 16   |

      | Font - description md  | $body  | 400     | $sm  | 0.875  | 14   |

      | Font - title lg        | $body  | 600     | $lg  | 1.3125 | 21   |

      | Font - description lg  | $body  | 400     | $md  | 1      | 16   |


      ## Colour

      The segmented control uses a set of high-contrast neutral colours for the selected segment and darker lower-contrast colours for the unselected segments and container. This is with the goal of focusing the user’s attention on the selected option.


      The unselected segments and container should match the background colour of the page where the component is used. This is to allow for a consistent look within both Atom and Quest, as well as use with different-coloured themes in Atom Home. 


      ![segmented control colours](/assets/images/segmented-control-06.png "segmented control colours")


      | Property, element & state             | Token               | Hex     |

      | ------------------------------------- | ------------------- | ------- |

      | Bg colour - Selected default          | $white              | #ffffff |

      | Bg colour - Unselected default        | $primary200         | #e5f1ff |

      | Bg colour - Unselected hover          | $primary300         | #d6eaff |

      | Bg colour - Unselected pressed        | $primary100         | #f2f8ff |

      | Bg colour - Container                 | $primary200         | #e5f1ff |

      | Border-colour - Focus                 | $primary            | #0F67F5 |

      | Font-color - Title, all states        | $color-text-bold    | #545454 |

      | Font-color - Description, all states  | $color-text-subtle  | #0F67F5 |


      | State                   | Value       |

      | ----------------------- | ----------- |

      | Disabled: all elements  | 30% opacity |
parent: J3bsmpB7-_uuqm05peuTA
uuid: ca8bf0a0-1161-41b4-abce-a11811a375a2
nestedSlug:
  - components
  - segmented-control
---
