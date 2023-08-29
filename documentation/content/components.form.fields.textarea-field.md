---
slug: textarea-field
title: Textarea Field
links:
  viewSource: components/textarea-field
  showReportAnIssue: true
tabs:
  - content: >-
      TextareaField renders a field composed of a Textarea, a Label and a
      InlineMessage. It is the preferred way to render a form field for
      multi-line text.


      In addition to text `Label` (required) and a validation error (optional), TextareaField accepts all the same props as `Textarea` and will pass them on to the `textarea` it renders. However, as with all our composed components, `TextareaField`’s css prop will be applied to a containing Box — the styling of the individual components inside `TextareaField` cannot be altered.


      <CodeBlock live={true} preview={true} code={`<Form>
        <TextareaField
          label="Write something"
          name="example"
          id="example"
          css={{ width: 320 }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="TextareaField" />
    title: Code
  - title: Usage
    content: >-
      ## Overview


      A textarea is an input area in a user interface where users can input and edit multi-line text, such as comments, descriptions, or messages.


      ![01 textarea default overview](/assets/images/textarea-01-overview.svg "01 textarea default overview")


      Textarea default


      ## When to use


      A textarea component is typically used in situations where users need to input or edit multi-line text.


      ![02 textarea usage](/assets/images/textarea-01-usage.svg "02 textarea usage")


      Textareas are commonly used in comment sections or feedback forms where users can express their thoughts or opinions.


      ![03 textarea usage](/assets/images/textarea-02-usage.svg "03 textarea usage")


      Long-form content e.g. when users need to provide longer pieces of text, such as comments, reviews, descriptions, or messages.


      ## Content guidelines


      * Use a concise label, to not only rely on placeholder text as it is not always visible (once the user starts typing it disappears).

      * Use a concise label to indicate what information goes in the text area input. The label should be a noun string. For example, if the text area appears in a dialog called "In-app feedback", the label for a description text area should only say "Description/Details" and not repeat the modal's title.

      * Avoid using only placeholder text. Make sure any critical information is communicated either in the field label.


      ## Accessibility


      * Placeholder text - if you use placeholder text, ensure it doesn't replace the need for a label. It should be a supplementary hint, not the primary source of information.

      * Error messages - if there are input requirements or validation errors, provide clear and descriptive error messages.

      * Focus styles - ensure there's a clear visual indicator when the textarea has keyboard focus. This helps users understand where they are in the interface.

      * Responsive design - ensure that the textarea component works well across various screen sizes and orientations, allowing users to interact comfortably.


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/textarea-1-do.svg","type":"do","description":"Use textarea as an affordance to input longer-form text content."},{"description":"Use placeholder as a replacement for label, as this creates accessibility and usability issues.","type":"dont","image":"/assets/images/textarea-2-dont.svg"},{"description":"Set the min-height of the textarea row to ensure that the text entered is visible without scrolling.","type":"do","image":"/assets/images/textarea-1-do.svg"},{"description":"Change the textarea's min-height to a smaller value.","type":"dont","image":"/assets/images/textarea-3-dont.svg"},{"image":"/assets/images/textarea-4-do.svg","description":"Be specific to help users understand the context of their input.","type":"do"},{"description":"Use vague labels, like \"Enter text here\". ","type":"dont","image":"/assets/images/textarea-5-dont.svg"},{"type":"do","image":"/assets/images/textarea-6-do.svg","description":"If the field is required use * to highlight it."},{"description":"Add a description if you are concerned that textarea is not clear enough to the user.","type":"do","image":"/assets/images/textarea-7-do.svg"}]} />
  - title: Visual
    content: >-
      ## Structure


      The text represents a multi-line plain text, useful when you want to allow users to enter a sizeable amount of free-form text, for example, a comment on a review or feedback form.


      ![textarea structure](/assets/images/textarea-structure.svg "textarea structure")


      ## Anatomy


      ![textarea anatomy](/assets/images/textarea-01-anatomy.svg "textarea anatomy")


      | Property      | Token    | px  | rem  |

      | ------------- | -------- | --- | ---- |

      | Border radius | radii-0  | 4   | 0.25 |

      | Padding top   | space $2 | 8   | 0.5  |

      | Padding left  | space $3 | 12  | 0.75 |

      | Margin        | space $3 | 12  | 0.75 |


      ## Typography


      Typography refers to the visual presentation and arrangement of text within a textarea component. It involves decisions about font styles, sizes, line spacing, and other text-related properties that ensure readability and a harmonious visual appearance of the text within the input area.


      ![textarea typography](/assets/images/textarea-typography.svg "textarea typography")


      | Element          | Family | Weight | Size | Rem   | px  |

      | ---------------- | ------ | ------ | ---- | ----- | --- |

      | Label font       | $body  | 600    | $sm  | 0.875 | 14  |

      | Description font | $body  | 400    | $sm  | 0.875 | 14  |

      | Description font | $body  | 400    | $md  | 1     | 16  |


      ## Variants & Color


      Color in a textarea component refers to the visual appearance of the text and background within the input area. It involves selecting appropriate text and background colors to ensure readability, visual contrast, and alignment with the overall design aesthetics of the user interface.


      ![textarea default variant](/assets/images/textarea-variant-1.svg "textarea default variant")

      Default



      | Property               | Token     | Hex      |

      | ---------------------- | --------- | -------- |

      | Bg color               | $white    | \#ffffff |

      | Border-color           | $tonal400 | \#545454 |

      | Label font-color       | $tonal500 | \#333333 |

      | Description font-color | $tonal300 | \#757575 |

      | Text font-color        | $tonal600 | \#1F1F1F |


      ![textarea placeholder variant](/assets/images/textarea-variant-2.svg "textarea placeholder variant")

      Placeholder



      | Property               | Token     | Hex      |

      | ---------------------- | --------- | -------- |

      | Bg color               | $white    | \#ffffff |

      | Border-color           | $tonal400 | \#545454 |

      | Label font-color       | $tonal500 | \#333333 |

      | Description font-color | $tonal300 | \#757575 |

      | Placeholder font-color | $tonal300 | \#757575 |


      ![textarea focus variant](/assets/images/textarea-variant-3.svg "textarea focus variant")

      Focus


      | Property         | Token     | Hex      |

      | ---------------- | --------- | -------- |

      | Bg color         | $white    | \#ffffff |

      | Border-color     | $primary  | \#0F67F5 |

      | Label font-color | $tonal500 | \#333333 |

      | Text font-color  | $tonal600 | \#1F1F1F |


      ![textarea disabled variant](/assets/images/textarea-variant-4.svg "textarea disabled variant")

      Disabled


      | Property         | Token     | Hex      |

      | ---------------- | --------- | -------- |

      | Bg color         | $tonal100 | \#EEEEEE |

      | Border-color     | $tonal400 | \#545454 |

      | Label font-color | $tonal500 | \#333333 |

      | Text font-color  | $tonal600 | \#1F1F1F |


      ![textarea error variant](/assets/images/textarea-variant-5.svg "textarea error variant")

      Error


      | Property                 | Token     | Hex      |

      | ------------------------ | --------- | -------- |

      | Bg color                 | $tonal100 | \#EEEEEE |

      | Border-color             | $danger   | \#EE0505 |

      | Label font-color         | $tonal500 | \#333333 |

      | Text font-color          | $danger   | \#EE0505 |

      | Error message font-color | $danger   | \#EE0505 |
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - textarea-field
---
