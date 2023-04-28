---
slug: inline-message
title: Inline Message
links:
  viewSource: components/inline-message
  showReportAnIssue: true
tabs:
  - content: >-
      Inline messages consist of an inline feedback message in the form of
      simple text that inform the user of relevant information, revealed in
      context.


      <CodeBlock live={true} preview={true} code={`
        <InlineMessage>This is an Inline Message</InlineMessage>
      `} language={"tsx"} />


      ## Theme


      These are the available `theme`s for this component: `success`, `warning`, `error`, `neutral` and `info`. The default is `error` (due to most frequent context).


      <CodeBlock live={true} preview={true} code={`<Stack gap={3}>
        <InlineMessage theme="error">This is an error Inline Message</InlineMessage>
        <InlineMessage theme="warning">
          This is a warning Inline Message
        </InlineMessage>
        <InlineMessage theme="success">
          This is a success Inline Message
        </InlineMessage>
        <InlineMessage theme="info">This is an info Inline Message</InlineMessage>
        <InlineMessage theme="neutral">
          This is a neutral Inline Message
        </InlineMessage>
      </Stack>`} language={"tsx"} />


      ## Size


      These are the available `size`s for this component: `xs`, `sm` and `md`. The default is `sm`


      <CodeBlock live={true} preview={true} code={`<InlineMessage size="xs">This is an xs Inline Message</InlineMessage>`} language={"tsx"} />


      ## Icon


      Each theme has a specific icon it should export, so showing or hiding an icon is simply done using the `showIcon` prop. Default is `true`.


      <CodeBlock live={true} preview={true} code={`<InlineMessage showIcon={false}>This is an Inline Message</InlineMessage>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="InlineMessage" />
    title: Code
  - title: Visual
    content: >-
      ## Structure


      Simple text and optional icon to inform the user of relevant information, revealed in context.


      There are two sizes for inline messages. The message can appear by itself, icons are optional.


      When the text is too long for the available horizontal space, it wraps to form another line. The optional icon stays aligned to the top-left corner.


      ![inline messages structure specs](/assets/images/inline-messages-structure-specs.png "inline messages structure specs")


      | Property - element | Token                   | Pixel | Rem |

      | ------------------ | ----------------------- | ----- | --- |

      | Size icon          | $1 (variant: size="sm") | 16px  | 1   |

      | Margin-right icon  | space $2                | 8px   | 0.5 |


      ## Typography


      ![Typography specs for Inline messages](/assets/images/typography-specs-for-inline-messages.png "Typography specs for Inline messages")


      | Element          | Family | Weight | Size | rem      | px  |

      | ---------------- | ------ | ------ | ---- | -------- | --- |

      | XSmall text font | $body  | 400    | $xs  | 0.75rem  | 12  |

      | Small text font  | $body  | 400    | $sm  | 0.875rem | 14  |

      | Medium text font | $body  | 400    | $md  | 1rem     | 16  |


      ## Color


      ![color specs for inline messages](/assets/images/color-specs-for-inline-messages.png "color specs for inline messages")


      | Property - State - Element | Token        | Hex      |

      | -------------------------- | ------------ | -------- |

      | Error - icon/text          | $danger      | \#EE0505 |

      | Warning - icon             | $warningDark | \#D08E00 |

      | Warning - text             | $warningText | \#BD4B00 |

      | Success - icon/text        | $success     | \#028A00 |

      | Neutral/help - icon/text   | $grey800     | \#545454 |

      | Info - icon/text           | $blue800     | \#0F67F5 |
  - title: Usage
    content: >-
      ## Overview


      Inline messages consist of an inline feedback message in the form of simple text that inform the user of relevant information, revealed in context.


      • Inline Messages are the best way to communicate alerts or help in context, without blocking any other part of the interface.\

      • They draw user’s attention to specific elements without disrupting the flow of the using the app.


      ![inline message success example](/assets/images/inline-message.png "inline message success example")


      ## When to use


      Inline messages are useful when space is limited and they are less prominent and can use or not color and icons, all depending on the context and the message you are communicating.\

      Inline messages are always displayed inline, inside or next to another UI component and can use motion (ease in/out) to grab user’s attention when they appear and disappear.


      There's the option to add a [Tooltip](https://atomlearning.design/components/surfaces/tooltip) for extended information. The user can click/hover the title of the alert to read more details of the message.


      ### Examples


      **Empty state:** when data is absent or unavailable.\

      E.g. It is a way of communicating that an item’s content cannot be shown because there is no data or results available and should be designed to prevent user confusion. It’s usually displayed together with a empty state illustration.


      ![Inline message example on an empty state](/assets/images/empty-state.png "Inline message example on an empty state")


      **Information messages**: may offer additional assistance or information to let the user know why we are asking for particular information.


      ![example of information messages (inline messages)](/assets/images/information-messages-inline-messages-.png "example of information messages (inline messages)")


      **Error**: when the system cannot load content, or when a form field is problematic.\

      E.g. When text input isn’t accepted, an error message can display instructions on how to fix it. Error messages are displayed below the input line. It can include an icon with color and replace hint text until fixed.


      ![example of Error (inline messages)](/assets/images/error-inline-messages-.png "example of Error (inline messages)")


      **Informational warning**: when an item has an atypical status, e.g. duplicates.


      ![example of informational warning (inline messages)](/assets/images/informational-warning-inline-messages-.png "example of informational warning (inline messages)")


      **Success**: make obvious to users that their interaction with the application was successful.


      ![example of success (inline messages)](/assets/images/success-inline-messages-.png "example of success (inline messages)")


      **Transitional**: when the system is processing an action, e.g. uploading, saving, loading, sending email, etc\

      Text will have an ellipsis at the end, showing a small delay and it will be combined with a loading component with animation.\

      Word should be related to the action as much as possible. For example “mapping” while loading a map.\

      When the effect of finishing the transition is subtle, provide confirmation success feedback.


      ![example of transitional (inline messages)](/assets/images/transactional-inline-messages-.png "example of transitional (inline messages)")


      ## Do’s and Don’ts


      ![do and dont 1](/assets/images/do-and-dont-1.png "do and dont 1")


      ![do and dont 2](/assets/images/do-and-dont-2.png "do and dont 2")


      ![do and dont 3](/assets/images/do-and-dont-3.png "do and dont 3")
parent: HGItoEG3XVs9DpOLugTot
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - inline-message
---
