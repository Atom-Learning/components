---
slug: toggle-group
title: Toggle Group
links:
  viewSource: components/text
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      Lets users toggle between a group of limited options(Suggested range is
      2-6 options).


      Functionality based on the [`ToggleGroup`](https://www.radix-ui.com/docs/primitives/components/toggle-group) radix component, which already allows for: single/multiple select, disabling or partly disabling options, adds keyboard navigation and orientation and more.


      Extends visually by allowing for different sizing, vertical/horizontal display and gaps using the Stack component. When there is no gap, rounds the border for *only* the edge/outer corners.


      ## Orientation


      `orientation="vertical | horizontal"`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" orientation="vertical">
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Gap


      `gap={0 | 1 | 2 | ... | 9}`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="single" gap={3}>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Size


      `size="sm | md | lg"`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="single" gap={3}>
        <ToggleGroup.Button value="a" size="sm">
          <Icon is={Upload} /> A
        </ToggleGroup.Button>
        <ToggleGroup.Button value="b" size="sm">
          B
        </ToggleGroup.Button>
        <ToggleGroup.Button value="icon" size="sm">
          <Icon is={Upload} />
        </ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Full width


      `isFullWidth={boolean}`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" isFullWidth gap={3}>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c">C</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Disabled


      ### Partly


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" gap={3} defaultValue="a">
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c" disabled>
          C
        </ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ### Fully


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" gap={3} defaultValue="a" disabled>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c">C</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ### API Reference


      <ComponentProps component="ToggleGroup.Root" />


      <ComponentProps component="ToggleGroup.Button" />


      <ComponentProps component="ToggleGroup.Item" />
  - title: Visual
    content: >-
      ## Structure res


      A component that lets users toggle between a group of 2-6 options.

      It can be set as single select or multiple select and displayed vertically or horizontally.


      ![toggle group structure](/admin/images/toggle-group-01-structure.png "toggle group structure")


      | Property             | Token   | Pixel | Rem  |

      | -------------------- | ------- | ----- | ---- |

      | Border radius        | radii-0 | 4px   | 0.25 |

      | Border radius merged | none    | 0     | 0    |


      ![toggle group gap](/admin/images/toggle-group-02-gap.png "toggle group gap")


      | Property             | Token    | Pixel | Rem  |

      | -------------------- | -------- | ----- | ---- |

      | spacing sm (default) | space $2 | 8     | 0.5  |

      | spacing md           | space $3 | 12    | 0.75 |

      | spacing lg           | space $4 | 16    | 1    |

      | spacing xl           | space $5 | 32    | 2    |


      ![toggle group states](/admin/images/toggle-group-03-states.png "toggle group states")


      | Property                                           | pixel |

      | -------------------------------------------------- | ----- |

      | Border-width (inside) - Default, hover (default)   | 1px   |

      | Border-width (inside) - Selected, hover (selected) | 2px   |

      | Focus shadow - Border (width 2px white gap)        | 2px   |


      ## Size


      Change the size of the entire group button, including padding, font size and border with the size property.


      Toggle group has the same height as a regular buttons (32px, 40px and 48px).


      Within the group, all segments are equal in width, taking the width from the longest label used.


      There’s an option that sets the button-group to fullwidth and every child to grow with same width to fill the available space of the parent container.


      ![toggle group size](/admin/images/toggle-group-04-size.png "toggle group size")


      | Property  | sm      | md      | lg      |

      | --------- | ------- | ------- | ------- |

      | Height    | 32px    | 40px    | 48px    |

      | min-width | 48px    | 60px    | 72px    |

      | Icon size | md 16px | lg 24px | lg 24px |


      | Property                 | Token    | Pixel | Rem  |

      | ------------------------ | -------- | ----- | ---- |

      | Padding sm               | space $4 | 16px  | 1    |

      | Padding md               | space $5 | 32px  | 2    |

      | Padding lg               | space $5 | 32px  | 2    |

      | Icon margin-right sm     | space $2 | 8px   | 0.5  |

      | Icon margin-right md, lg | space $3 | 12px  | 0.75 |


      ### Icon only


      ![toggle icon only](/admin/images/toggle-group-05-icon-only.png "toggle icon only")


      | Property   | Token    | Pixel | Rem  |

      | ---------- | -------- | ----- | ---- |

      | Padding sm | space $2 | 8px   | 0.5  |

      | Padding md | space $2 | 8px   | 0.5  |

      | Padding lg | space $3 | 12px  | 0.75 |


      ## Typography


      ![toggle group typography](/admin/images/toggle-group-06-typography.png "toggle group typography")


      | Font | Family | Weight | Size | Rem    | Px  |

      | ---- | ------ | ------ | ---- | ------ | --- |

      | lg   | $body  | 600    | $lg  | 1.3125 | 21  |

      | md   | $body  | 600    | $md  | 1      | 16  |

      | sm   | $body  | 600    | $sm  | 0.875  | 14  |


      ## Color


      By default the segmented control has a height of 32px (the same as a button). You should however keep things on the 8px grid or in some cases the 4px grid. You should only need the following recommended heights.


      ![toggle group color](/admin/images/toggle-group-07-color.png "toggle group color")


      | Property, Element & State             | Token    | Hex      |

      | ------------------------------------- | -------- | -------- |

      | Bg color                              | $white   | \#ffffff |

      | Border-color - Default                | $grey600 | \#       |

      | Border-color - Selected, Focus        | $blue800 | \#       |

      | Border-color - Selected hover         | $blue900 | \#       |

      | Font-color - Default, Default focus   | $grey800 | \#       |

      | Font-color - Selected, Selected focus | $blue800 | \#       |

      | Font-color - Hover                    | $blue900 | \#       |


      | State                  | Value       |

      | ---------------------- | ----------- |

      | Disabled: all elements | 30% opacity |
  - title: Usage
    content: >-
      ## Overview


      A component that lets users toggle between a group of 2-6 options.

      It can be used as single or multi-select, and displayed vertically or horizontally.


      Toggle Group is an alternative for Radios and Checkboxes. A set of two-state buttons that can be toggled on or off.


      They clearly present all available options in the viewport at the same time, reducing cognitive load, and are easy to use on mobile devices. Therefore It's recommended to use it when there are 6 options or fewer available. For a larger amount of options, use radio, checkbox, combo box, or select.


      ![toggle group overview](/admin/images/toggle-group-08-overview.png "toggle group overview")


      For avatars representing the user, the user picture is displayed. If there is an error loading the src of the avatar, there are 2 fallbacks:


      * If there's a name prop, we use it to generate the initials

      * If there's no name prop, we use a placeholder image.


      ## When to use


      * If you need to emphasize context of similar actions.   

      * If a single option or multiple options of the set may be selected.


      Use a toggle button group as a switch between different views. For example, use the component to allow users to switch between a list view and gallery view.


      ### Button Groups as Switch


      Use a toggle button group as a switch between different views. For example, use the component to allow users to switch between a list view and gallery view.  


      * Blue indicates an option is selected, grey indicates an unselected
        option   User can click to select one option at a time. Selecting one
        option deselects all other options.   It is always configured with a
        preselected option

      ![toggle group as switch](/admin/images/toggle-group-09-button-group-switch.png "toggle group as switch")


      ### Button Groups as Checkboxes


      Use when a small list of options can be selected from, similar to the Checkbox component  


      * Blue indicates an option is selected, grey indicates an unselected option

      * User can click the button to select multiple options at a time, and click again to deselect without affection the other options

      * Can be configured with preselected options


      ![toggle group as checkboxes](/admin/images/toggle-group-10-button-group-as-checkboxes.png "toggle group as checkboxes")


      ### Button Groups as Radio buttons


      Use when selecting one option from a small list of options, similar to the Radio component


      * Blue indicates an option is selected, grey indicates an unselected option.

      * User can click to select one option at a time. Selecting one option deselects all other options.

      * Can be configured with preselected options.


      ![toggle group as radio buttons](/admin/images/toggle-group-11-radio-buttons.png "toggle group as radio buttons")


      ### Label


      Button labels should make it easy to understand what will happen if the button is pressed by explaining the action, element or view invoked by each button.\

      Use single words or succinct phrases to support quick scanning and interpretation. Use sentence case in the display of the button label text.


      ![toggle group label](/admin/images/toggle-group-11-label.png "toggle group label")


      ### Icons


      Icons may be used in combination with button group text labels to further reinforce the explanation of the setting or view associated with interacting with the button. Icons may also be used instead of text labels in button groups.


      ![toggle group icons](/admin/images/toggle-group-12-icons.png "toggle group icons")


      ## Do's and Don'ts


      ![toggle group do's and don'ts 01](/admin/images/toggle-group-13-do-s-and-dont-s-01.png "toggle group do's and don'ts 01")


      ![toggle group do's and don'ts 02](/admin/images/toggle-group-15-do-s-and-dont-s-02.png "toggle group do's and don'ts 03")


      ![toggle group do's and don'ts 03](/admin/images/toggle-group-14-do-s-and-dont-s-03.png "toggle group do's and don'ts 03")
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: owSewZQY17sWMc7HPp134
nestedSlug:
  - components
  - content
  - toggle-group
---
