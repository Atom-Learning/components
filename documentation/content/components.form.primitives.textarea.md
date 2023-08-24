---
slug: textarea
title: Textarea
links:
  viewSource: components/textarea
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      Textarea is the lowest-level textarea component for longer text.

      Textareas should be accompanied by labels, so rather than using `Textarea` directly in a UI, it’s normally best to use a `field` component, which combines an `Textarea` with a `Label` and displays validation errors. If none of the existing field components suit your needs, it might be worth adding a new one.


      <CodeBlock live={true} preview={true} code={`<Textarea placeholder="Placeholder text" css={{ width: 340 }} />`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Textarea" />
  - title: Usage
    content: >-
      ## Overview


      A textarea is an input area in a user interface where users can input and edit multi-line text, such as comments, descriptions, or messages.


      ![01 textarea default overview](/assets/images/textarea-01-overview.svg "01 textarea default overview")


      Textarea default


      ## When to use


      A textarea component is typically used in situations where users need to input or edit multi-line text.


      ![02 textarea usage](/assets/images/textarea-usage.svg "02 textarea usage")


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


      <DosAndDonts items={[{"image":"/assets/images/textarea-01-do.svg","type":"do","description":"Use textarea as an affordance to input longer-form text content."},{"description":"Use placeholder as a replacement for label, as this creates accessibility and usability issues.","type":"dont","image":"/assets/images/textarea-02-dont.svg"},{"description":"Set the min-height of the textarea row to ensure that the text entered is visible without scrolling.","type":"do","image":"/assets/images/textarea-01-do.svg"},{"description":"Change the textarea's min-height to a smaller value.","type":"dont","image":"/assets/images/textarea-03-dont.svg"},{"image":"/assets/images/textarea-04-do.svg","description":"Be specific to help users understand the context of their input.","type":"do"},{"description":"Use vague labels, like \"Enter text here\". ","type":"dont","image":"/assets/images/textarea-05-dont.svg"},{"type":"do","image":"/assets/images/textarea-6-do.svg","description":"If the field is required use * to highlight it."},{"description":"Add a description if you are concerned that textarea is not clear enough to the user.","type":"do","image":"/assets/images/textarea-7-do.svg"}]} />
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


      | Property               | Token     | Hex      |

      | ---------------------- | --------- | -------- |

      | Bg color               | $white    | \#ffffff |

      | Border-color           | $tonal400 | \#545454 |

      | Label font-color       | $tonal500 | \#333333 |

      | Description font-color | $tonal300 | \#757575 |

      | Text font-color        | $tonal600 | \#1F1F1F |


      ![textarea placeholder variant](/assets/images/textarea-variant-2.svg "textarea placeholder variant")


      | Property               | Token     | Hex      |

      | ---------------------- | --------- | -------- |

      | Bg color               | $white    | \#ffffff |

      | Border-color           | $tonal400 | \#545454 |

      | Label font-color       | $tonal500 | \#333333 |

      | Description font-color | $tonal300 | \#757575 |

      | Placeholder font-color | $tonal300 | \#757575 |


      ![textarea focus variant](/assets/images/textarea-variant-3.svg "textarea focus variant")


      | Property         | Token     | Hex      |

      | ---------------- | --------- | -------- |

      | Bg color         | $white    | \#ffffff |

      | Border-color     | $primary  | \#0F67F5 |

      | Label font-color | $tonal500 | \#333333 |

      | Text font-color  | $tonal600 | \#1F1F1F |


      ![textarea disabled variant](/assets/images/textarea-variant-4.svg "textarea disabled variant")


      | Property         | Token     | Hex      |

      | ---------------- | --------- | -------- |

      | Bg color         | $tonal100 | \#EEEEEE |

      | Border-color     | $tonal400 | \#545454 |

      | Label font-color | $tonal500 | \#333333 |

      | Text font-color  | $tonal600 | \#1F1F1F |


      ![textarea error variant](/assets/images/textarea-variant-5.svg "textarea error variant")


      | Property                 | Token     | Hex      |

      | ------------------------ | --------- | -------- |

      | Bg color                 | $tonal100 | \#EEEEEE |

      | Border-color             | $danger   | \#EE0505 |

      | Label font-color         | $tonal500 | \#333333 |

      | Text font-color          | $danger   | \#EE0505 |

      | Error message font-color | $danger   | \#EE0505 |
parent: E7irFEo7JeV-MtxTony9G
uuid: 9HM9e4pqy4oAnboi8xRQi
nestedSlug:
  - components
  - form
  - primitives
  - textarea
---
