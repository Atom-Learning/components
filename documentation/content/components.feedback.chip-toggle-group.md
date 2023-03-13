---
slug: chip-toggle-group
title: Chip Toggle Group
links:
  viewSource: components/chip-toggle-group
  showReportAnIssue: true
tabs:
  - content: >-
      Combines the Toggle Group radix component with the Chip primitive styling


      Used as a method for filtering a collection of data. Acts like multiple or single selection. Each chip toggles between selected and unselected. When selected, a checkmark appears as the leading icon.


      <CodeBlock live={true} preview={true} code={`<ChipToggleGroup
        type="multiple"
        defaultValue={['a', 'b']}
        onValueChange={(value) => {
          console.log(value)
        }}
      >
        <ChipToggleGroup.Item value="a">A</ChipToggleGroup.Item>
        <ChipToggleGroup.Item value="b" disabled>
          B
        </ChipToggleGroup.Item>
        <ChipToggleGroup.Item value="c">C</ChipToggleGroup.Item>
        <ChipToggleGroup.Item value="d" disabled>
          D
        </ChipToggleGroup.Item>
      </ChipToggleGroup>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="ChipToggleGroup" />


      <ComponentProps component="ChipToggleGroup.Item" />
    title: Code
  - title: Visual
    content: >-
      ## Structure


      A component in the shape of a pill providing visual cues to prompt users to enter information or filter content.


      ![chip structure](/admin/images/01-chip-structure.png "chip structure")


      ### Anatomy


      ![chip anatomy](/admin/images/02-chip-anatomy.png "chip anatomy")


      ### Size


      Change the size of the Chip including padding, font-size and icon size with the size property.


      ![chip size](/admin/images/03-chip-size.png "chip size")


      | Property                             | Token   | px   | rem |

      | ------------------------------------ | ------- | ---- | --- |

      | Height sm                            | size $2 | 24px | 1.5 |

      | Height md                            | size $3 | 32px | 2   |

      | Height lg                            | size $4 | 40px | 2.5 |

      | Leading \[Icon] size sm & md         | sm      | 16px | \-  |

      | Leading \[Icon] size lg              | md      | 24px | \-  |

      | Trailing \[Action Icon] size sm      | sm      | 24px | \-  |

      | Trailing \[Action Icon] size md & lg | md      | 32px | \-  |


      ### Paddings and margins


      ![chip dismissible](/admin/images/04-chip-dismissible-margins.png "chip dismissible")


      | Property                                 | Token    | px   | rem  |

      | ---------------------------------------- | -------- | ---- | ---- |

      | Unselected: Padding left & right sm      | space $2 | 8px  | 0.5  |

      | Unselected: Padding left & right md & lg | space $3 | 12px | 0.75 |

      | Selected: Padding left (all)             | space $2 | 8px  | 0.5  |

      | Selected: Padding right sm               | space $2 | 8px  | 0.5  |

      | Selected: Padding right md & lg          | space $3 | 12px | 0.75 |

      | Icon Margin-right (all)                  | space $1 | 4px  | 0.25 |


      We provide three options for **gap** space between chips. Small will be typically used whitin Input fields (multiselect) or when space is limited. Medium will be the default option that provides a comfortable distance for the set.


      ![chip filter margins](/admin/images/05-chip-filter-margins.png "chip filter margins")


      | Property & element               | Token    | px   | rem  |

      | -------------------------------- | -------- | ---- | ---- |

      | Gap between chips - sm           | space $1 | 4px  | 0.25 |

      | Gap between chips - md (default) | space $2 | 18px | 0.5  |

      | Gap between chips - lg           | space $3 | 12px | 0.75 |


      ![chip filter gaps](/admin/images/06-chip-gaps.png "chip filter gaps")


      ### Border


      ![chip border](/admin/images/07-chip-border.png "chip border")


      | Property                             | pixel |

      | ------------------------------------ | ----- |

      | Border-width (inside) - All          | 1px   |

      | Focus shadow - Border (with 2px gap) | 2px   |


      .


      | Property      | Token   | Pixel | Rem  |

      | ------------- | ------- | ----- | ---- |

      | Border radius | radii-0 | 4px   | 0.25 |


      ## Typography


      ![chip typography](/admin/images/08-chip-typography.png "chip typography")


      | Element | Family | Weight | Size | Rem      | px  |

      | ------- | ------ | ------ | ---- | -------- | --- |

      | sm      | $body  | 400    | $sm  | 0.875rem | 14  |

      | md      | $body  | 400    | $md  | 1rem     | 16  |


      ## Color


      ![chip color](/admin/images/09-chip-color.png "chip color")


      | Property & Element - State              | Token     | Hex |

      | --------------------------------------- | --------- | --- |

      | Bg color - Default, Focus, Disabled     | $grey100  | \#  |

      | Bg color - Hover                        | $grey200  | \#  |

      | Border-color - Default, Focus, Disabled | $grey600  | \#  |

      | Border-color - Hover                    | $grey800  | \#  |

      | Font-color - Default, Default focus     | $grey800  | \#  |

      | Font-color - Hover                      | $grey1000 | \#  |


      ![chip filter color](/admin/images/10-chip-filter-color.png "chip filter color")


      | Property & Element - State              | Token     | Hex |

      | --------------------------------------- | --------- | --- |

      | Bg color - Default, Focus, Disabled     | $blue100  | \#  |

      | Bg color - Hover                        | $white    | \#  |

      | Border-color - Default, Focus, Disabled | $blue800  | \#  |

      | Border-color - Hover                    | $blue1000 | \#  |

      | Font-color - Default, Default focus     | $blue800  | \#  |

      | Font-color - Hover                      | $blue1000 | \#  |


      .


      | State                  | Value       |

      | ---------------------- | ----------- |

      | Disabled: all elements | 30% opacity |
  - title: Usage
    content: >-
      ## Overview


      A Chip is a component in the shape of a pill that visually represents an object or a series of data providing feedback in context, such as filtering criteria, keywords or selection sets.


      ![chip overview](/admin/images/11-chip-overview.png "chip overview")


      The chip acts a container of different functions and elements such as an avatar, text, or an icon. They can also be closed or removed.


      ![chip anatomy](/admin/images/12-chip-anatomy.png "chip anatomy")


      | Content                | Purpose                                                                                         |

      | ---------------------- | ----------------------------------------------------------------------------------------------- |

      | Leading icon/Thumbnail | Identify entities by displaying an avatar, logo or icon.                                        |

      | Label                  | It can be an entity name, description or tag.                                                   |

      | Close (Action Icon)    | Included for removing the chip from a selection.                                                |

      | Container              | Hold all chip elements. In the case of Filter chips it’s clickable in order to select/unselect. |


      #### Overflow


      Chips Toggle are typically displayed horizontally under the title or next to it. More than one row of chips can wrap to the next row.


      ![chip overflow](/admin/images/13-chip-overflow.png "chip overflow")


      ## When to use


      Use **Chips Dismissable** to enter information. Used in fields, such as an entity or different attributes. Dismissible chips can also be used to represent removable filtering criteria.


      ![chip dismissable when to use](/admin/images/14-chip-when-to-use-dismissable.png "chip dismissable when to use")


      ![chip dismissable when to use custom practices](/admin/images/15-chip-when-to-use-custom-practices.png "chip dismissable when to use custom practices")


      ![chip when to use multiselect](/admin/images/16-chip-when-to-use-multiselect.png "chip when to use multiselect")


      Use **Chips Toggle** as a method for filtering data for a collection to show only items within that particular category. Acts like multiple or single selection. Each chip toggles between selected and unselected. When selected, a checkmark appears as the leading icon.


      ![chip when to use chip filter toggle](/admin/images/17-chip-when-to-use-chip-filter-toggle.png "chip when to use chip filter toggle")


      You can click/tap a chip to select it. Multiple chips can be selected/unselected.


      ![chip when to use lesson library](/admin/images/18-chips-when-to-use-lesson-library.png "chip when to use lesson library")


      ## Do's and Don'ts


      ![chip dos and dont's 1](/admin/images/19-chip-dos-and-dont-s-1.png "chip dos and dont's 1")


      ![chip dos and dont's 2](/admin/images/20-chip-dos-and-dont-s-2.png "chip dos and dont's 2")


      ![chip dos and dont's 3](/admin/images/21-chip-dos-and-dont-s-3.png "chip dos and dont's 3")
parent: HGItoEG3XVs9DpOLugTot
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - chip-toggle-group
---
