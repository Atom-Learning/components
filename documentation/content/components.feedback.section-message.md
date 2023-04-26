---
slug: section-message
title: Section message
links:
  viewSource: ""
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      A section message displays a contextual feedback message in a
      particular section of the page. They’re persistent and nonmodal. It can
      include a ‘close’ button to be dismissed, allowing the user to either
      ignore them or interact with them at any time.

      <CodeBlock live={true} preview={true} code={`<SectionMessage>
        <SectionMessage.Icon />
        <SectionMessage.Content>
          <SectionMessage.Title>Title message</SectionMessage.Title>
          <SectionMessage.Description>
            This is the description
          </SectionMessage.Description>
        </SectionMessage.Content>
        <SectionMessage.Close />
      </SectionMessage>`} language={"tsx"} />


      ## Theme

      These are the available `theme`s for this component: `success`, `warning`, `error`, `neutral` and `info`. The default is `info` (due to most frequent context).

      <CodeBlock 
        live={true} 
        preview={true} 
        language={"tsx"}
        code={`
          <Stack direction="column" css={{ width: 325 }} gap={3}>
            <SectionMessage theme="error">
              <SectionMessage.Icon />
              <SectionMessage.Content>
                <SectionMessage.Title>Title message</SectionMessage.Title>
                <SectionMessage.Description>
                  This is the description
                </SectionMessage.Description>
              </SectionMessage.Content>
              <SectionMessage.Close />
            </SectionMessage>

            <SectionMessage theme="warning">
              <SectionMessage.Icon />
              <SectionMessage.Content>
                <SectionMessage.Title>Title message</SectionMessage.Title>
                <SectionMessage.Description>
                  This is the description
                </SectionMessage.Description>
              </SectionMessage.Content>
              <SectionMessage.Close />
            </SectionMessage>

            <SectionMessage theme="success">
              <SectionMessage.Icon />
              <SectionMessage.Content>
                <SectionMessage.Title>Title message</SectionMessage.Title>
                <SectionMessage.Description>
                  This is the description
                </SectionMessage.Description>
              </SectionMessage.Content>
              <SectionMessage.Close />
            </SectionMessage>

            <SectionMessage theme="info">
              <SectionMessage.Icon />
              <SectionMessage.Content>
                <SectionMessage.Title>Title message</SectionMessage.Title>
                <SectionMessage.Description>
                  This is the description
                </SectionMessage.Description>
              </SectionMessage.Content>
              <SectionMessage.Close />
            </SectionMessage>

            <SectionMessage theme="neutral">
              <SectionMessage.Icon />
              <SectionMessage.Content>
                <SectionMessage.Title>Title message</SectionMessage.Title>
                <SectionMessage.Description>
                  This is the description
                </SectionMessage.Description>
              </SectionMessage.Content>
              <SectionMessage.Close />
            </SectionMessage>
          </Stack>
        `} 
      />

      ## Composition

      `SectionMessage` ships with smaller components to allow for flexibility in creating all kinds of layouts. The below example shows a very basic layout.

      ### Simple layout

      <CodeBlock 
        live={true} 
        preview={true} 
        language={"tsx"}
        code={`
          <SectionMessage>
            <SectionMessage.Icon />
            This is the description
            <SectionMessage.Close />
          </SectionMessage>
        `} 
      />

      ### Complex layout


      Note that elements contained within `SectionMessage.Content` will be displayed inline if there is enough space and automatically wrap when there isn't. 


      `SectionMessage.Actions` will always align to the right when contained within `SectionMessage.Content` and shown inline.

      <CodeBlock 
        live={true} 
        preview={true} 
        language={"tsx"}
        code={`
          <SectionMessage css={{ width: 500 }}>
            <SectionMessage.Icon />
            <SectionMessage.Content>
              <SectionMessage.Title>Title message</SectionMessage.Title>
              <SectionMessage.Description>
                This is the description
              </SectionMessage.Description>
            </SectionMessage.Content>
            <SectionMessage.Actions>
                <Button size="sm">Button</Button>
                <Button size="sm" appearance="outline">
                  Button
                </Button>
              </SectionMessage.Actions>
            <SectionMessage.Close />
          </SectionMessage>
        `} 
      />


      ## API Reference

      <ComponentProps component="SectionMessage" />
  - title: Visual
    content: >-
      ## Structure


      A section message displays a contextual feedback message in a particular section of the page. They’re persistent and nonmodal. It can include a ‘close’ button to be dismissed, allowing the user to either ignore them or interact with them at any time.


      ![section message structure](/admin/images/01-section-message-structure.png "section message structure")


      **Anatony**


      * **Icon**: The icon and section colour pairing signifies the message type and is available in pre-defined styles for each message type.  

      * **Title**: The title should be a clear and concise representation of the message's purpose.   

      * **Description**: This should detail the message and any necessary actions for the user to take, if any. The message should remain as brief as possible.   

      * **Actions** (optional): One or more buttons that allows the user to take action.

      * **Close** (optional): A button situated in the top-right corner that lets users dismiss the message.


      ### Paddings and margins


      ![section message paddings and margins](/admin/images/02-section-message-paddings-and-margins.png "section message paddings and margins")


      | Component           | Theme   | Appearance | Size | isRounded |

      | ------------------- | ------- | ---------- | ---- | --------- |

      | ‘Close’ Action icon | neutral | simple     | sm   | no        |


      | Property & element                  | Token    | px    | rem  |

      | ----------------------------------- | -------- | ----- | ---- |

      | Padding container                   | space $4 | 16px  | 1    |

      | Action Icon margin left             | space $2 | 8px   | 0.5  |

      | Action icon margin top/right/bottom | space $2 | \-8px | 0.5  |

      | Corner radius container             | radii $0 | 4px   | 0.25 |


      ![section message buttons](/admin/images/03-section-message-margin-buttons.png "section message buttons")


      | Property & element  | Token    | px  | rem |

      | ------------------- | -------- | --- | --- |

      | Margin-left actions | space $2 | 8px | 0.5 |


      ![](/admin/images/04-section-message-margins.png)


      | Property & element     | Token    | px   | rem |

      | ---------------------- | -------- | ---- | --- |

      | Margin-right Icon      | space $2 | 8px  | 0.5 |

      | Margin-bottom title    | space $2 | 8px  | 0.5 |

      | Margin-top Actions     | space $4 | 16px | 1   |

      | Margin between actions | space $4 | 16px | 1   |


      ## Typography


      ![section message margins](/admin/images/05-section-message-typography.png "section message margins")


      | Element   | Family | Weight | Size | Rem      | px  |

      | --------- | ------ | ------ | ---- | -------- | --- |

      | Title     | $body  | 600    | $sm  | 0.75rem  | 12  |

      | Body text | $body  | 400    | $md  | 0.875rem | 14  |


      ## Color


      ![section message color](/admin/images/06-section-message-color.png "section message color")


      | Property & Element - State      | Token         | Hex |

      | ------------------------------- | ------------- | --- |

      | All variants - border           | $white        | \#  |

      | All variants - description text | $grey900      | \#  |

      | Info - icon/title               | $blue1000     | \#  |

      | Info - background               | $blue100      | \#  |

      | Success - icon/title            | $successDark  | \#  |

      | Success - background            | $successLight | \#  |

      | Error - icon/title              | $dangerDark   | \#  |

      | Error - background              | $dangerLight  | \#  |

      | Warning - icon                  | $warningDark  | \#  |

      | Warning - title                 | $warningText  | \#  |

      | Warning - background            | $warningLight | \#  |

      | Neutral/help - icon/title       | $grey900      | \#  |

      | Neutral/help - background       | $grey100      | \#  |
  - title: Usage
    content: >-
      ## Overview


      A section message displays a contextual notification message for communicating with the user in a particular section of the page, attracting user’s attention without interrupting the user’s task.  


      They are persistent and non-modal. They can include a ‘close’ button to be dismissed, allowing the user to either ignore them or interact with them at any time.


      ![section message overview](/admin/images/07-section-message-overview.png "section message overview")


      ## When to use


      Use Section messages when:  


      * Conveying important information to users within a section of a page without blocking any other part of the interface or disrupting the flow. 

      * Displaying surface-level information to the user.

      * Providing persistent, non-blocking feedback. 


      Don’t use Section messages when:  


      * Displaying information that is intented for promotional/marketing purposes. Use Promo banner instead.   

      * When interacting with the message is required for the user to proceed with a task or flow. Use Dialog instead.


      ## Types


      Section messages can be of different type and severity. Usually, you’ll want to differentiate between at least five types of messages:  


      • **Error** messages are used to inform users that something went wrong and help them out.\

      • **Warnings** should appear when users are about to do something that is destructive or when the result of an action is unexpected, but isn't an error.\

      • **Success** messages make it obvious to users that their interaction with your application was successful and also help communicate positive messages.\

      • **Info** messages let users know that something happened in the system that wasn't out of the ordinary or unexpected and usually isn't tied to user interaction like "Verify your e-mail to unlock all features".\

      • **Neutral** messages inform the user of general events and important information related to a page or section.


      ![section message types](/admin/images/08-section-message-types.png "section message types")


      ## Actions


      Section messages can have multiple actions following the message. These actions can be links when referencing to a separate site, by specifying the href property, or Buttons, when no href is supplied.  


      If needed, actions can become disabled after clicking by setting disabled: true in the action data.


      ![section message actions](/admin/images/09-section-message-actions.png "section message actions")


      ## Content guidelines


      * The title of the message should provide a clear and concise indication of the  reason for the message

      * The description text should be informative, empathetic, and succinctly convey the message.

      * Ensure the copy is easily scannable. Focus on the objective and limit the number of concepts in each sentence.

      * Active verbs should be used to direct users towards any necessary actions.


      ![section message content guidelines](/admin/images/10-section-message-content.png "section message content guidelines")


      ## Do's and Don'ts


      ![section message dos and donts 1](/admin/images/11-section-message-dos-and-donts.png "section message dos and donts 1")


      ![section message dos and donts 2](/admin/images/12-section-message-dos-and-donts.png "section message dos and donts 2")


      ![section message dos and donts 3](/admin/images/13-section-message-dos-and-donts.png "section message dos and donts 3")


      ![section message dos and donts 4](/admin/images/14-section-message-dos-and-donts.png "section message dos and donts 4")
parent: HGItoEG3XVs9DpOLugTot
uuid: 0820a98e-0682-4c11-bed0-d6b751d98c7e
nestedSlug:
  - components
  - feedback
  - section-message
---
