---
slug: tabs
title: Tabs
links:
  viewSource: components/tabs
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      Tabs is a component that provides different sections of content that are
      displayed one at a time.

      Functionality based on the [`Tab`](https://www.radix-ui.com/docs/primitives/components/tabs) radix component, which already allows for: controlled/uncontrolled tabbing, disabling or partly disabling options, adds keyboard navigation and orientation and more.


      Implements experimental ColorScheme component to allow multiple colour setups.


      <CodeBlock live={true} preview={true} code={`<Tabs defaultValue="tab2">
        <Tabs.TriggerList>
          <Tabs.Trigger value="tab1">
            Nested component under the Tabs.Trigger component
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2">Simple text</Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content css={{ p: '$3' }} value="tab1">
          <Text>Content for tab1.</Text>
        </Tabs.Content>
        <Tabs.Content css={{ p: '$3' }} value="tab2">
          <Text>
            Content for the second tab. It can also hold other components, like a
          </Text>
          <Button>Button</Button>
        </Tabs.Content>
      </Tabs>`} language={"tsx"} />


      ## Disabled


      A `Tabs.Trigger` component can take a `disabled` prop, which would make it unselectable. The corresponding `Tabs.Content` component's content will be, in this case, permanently hidden.


      <CodeBlock live={true} preview={true} code={`<Tabs defaultValue="tab1">
        <Tabs.TriggerList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2" disabled>
            Tab 2
          </Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content css={{ p: '$3' }} value="tab1">
          <Text>Content for tab1.</Text>
        </Tabs.Content>
        <Tabs.Content css={{ p: '$3' }} value="tab2">
          <Text>Content for tab2.</Text>
        </Tabs.Content>
      </Tabs>`} language={"tsx"} />


      ## Color Scheme


      You can pass in a `colorScheme` object to the TriggerList to customise the colours of the component. Defaults to `{ base: "grey1", accent: "blue1", interactive: "hiContrast"}` ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options [on the repository's github](https://github.com/Atom-Learning/components/tree/main/lib/src/experiments/color-scheme#readme).


      <CodeBlock live={true} preview={true} code={`<Tabs defaultValue="tab2">
        <Tabs.TriggerList
          colorScheme={{ base: 'grey1', accent: 'grey1', interactive: 'hiContrast' }}
        >
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content css={{ p: '$3' }} value="tab1">
          <Text>Content for tab1.</Text>
        </Tabs.Content>
        <Tabs.Content css={{ p: '$3' }} value="tab2">
          <Text>Content for tab2.</Text>
        </Tabs.Content>
      </Tabs>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Tabs" />


      <ComponentProps component="Tabs.TriggerList" />


      <ComponentProps component="Tabs.Trigger" />


      <ComponentProps component="Tabs.Content" />
  - title: Usage
    content: >-
      ## Overview


      Tabs are an easy way to organize content by grouping similar information on the same page. This allows content to be viewed without having to navigate away from that page.


      ![01 Tabs organizing content](/assets/images/01-tabs-usage.svg "01 Tabs organizing content")


      Organizing content


      ## When to use


      Use tabs to allow users to easily navigate between alternate views of similar content on a screen. 


      ![01 Tabs usage](/assets/images/02-tabs-usage.svg "01 Tabs usage")



      Tabs usage


      ## Content guidelines


      * Use sentence case (capitalize only the first word) unless referring to a proper noun.

      * Don't punctuate tab labels.

      * Use plain language and short tab labels. Keep the label text to one or two words. Short labels are easier to scan. Longer labels may indicate that the categories are too complicated for a tab component. 


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/01-tabs-do.svg","type":"do","description":"Use sentence case."},{"description":"Use all caps for tab labels.","type":"dont","image":"/assets/images/02-tabs-dont.svg"},{"description":"Ensure that tab labels clearly communicate the content they represent.","type":"do","image":"/assets/images/03-tabs-do.svg"},{"description":"Use super long labels.","type":"dont","image":"/assets/images/04-tabs-dont.svg"},{"image":"/assets/images/05-tabs-do.svg","description":"Use tabs with at least 2 buttons.","type":"do"},{"description":"Use tabs with only 1 button.","type":"dont","image":"/assets/images/06-tabs-dont.svg"},{"type":"do","image":"/assets/images/07-tabs-do.svg","description":"Use visual cues, such as color changes or underlines, to indicate the active tab and respond to user interactions."},{"description":"Use tabs when you need to compare information in different tabs - memorizing information and switching backwards and forwards can be frustrating.","type":"dont","image":"/assets/images/08-tabs-dont.svg"}]} />
  - title: Visual
    content: >-
      ## Structure


      Organize tabs logically based on content categories or user tasks. Maintain consistent tab sizes for a balanced layout. Use clear labels that succinctly describe the tab's content. Prioritize user experience by considering responsive design, ensuring tabs adapt well to different screen sizes.


      ![tabs structure](/assets/images/01-tabs-visual.svg "tabs structure")

      Tabs


      ![tabs paddings](/assets/images/02-tabs-visual.svg "tabs paddings")

      Paddings


      | Property             | Token    | rem | px  |

      | -------------------- | -------- | --- | --- |

      | Padding left & right | space $4 | 1   | 16  |

      | Padding top & bottom | space $4 | 1   | 16  |


      ## Typography


      Maintain a consistent font size and style for tab labels to create visual hierarchy.


      ![textarea typography](/assets/images/03-tabs-visual.svg "textarea typography")

      Tabs typography


      | Property            | Token | Weight | Size | rem | px  |

      | ------------------- | ----- | ------ | ---- | --- | --- |

      | Active tab font     | $body | 600    | $md  | 1   | 16  |

      | Not active tab font | $body | 400    | $md  | 1   | 16  |


      ## Colors & Variants


      Tabs can be preselected, unselected, or disabled. One tab can be selected at a time, and if a user navigates away from a tab, a user should return to the last tab selected.


      ![Active tabs](/assets/images/04-tabs-visual.svg "Active tabs")


      Active


      | Property                    | Token     | Hex      |

      | --------------------------- | --------- | -------- |

      | Bg color                    | $white    | \#FFFFFF |

      | Active tab font-color       | $primary  | \#0F67F5 |

      | Active tab bottom line      | $primary  | \#0F67F5 |

      | Not active tab font-color   | $tonal500 | \#333333 |

      | Not active tabs bottom line | $tonal100 | \#EEEEEE |



      ![Hover tabs](/assets/images/05-tabs-visual.svg "Hover tabs")


      Hover


      | Property             | Token    | Hex      |

      | -------------------- | -------- | -------- |

      | Hover tab bg color   | $blue200 | \#E8F1FE |

      | Hover tab font-color | $blue900 | \#184BC8 |



      ![Focus tabs](/assets/images/06-tabs-visual.svg "Focus tabs")


      Focus


      | Property              | Token    | Hex      |

      | --------------------- | -------- | -------- |

      | Focus tab bg color    | $white   | \#FFFFFF |

      | Focus tab font-color  | $blue900 | \#184BC8 |

      | Focus tab bottom line | $blue900 | \#184BC8 |



      ![Disabled tabs](/assets/images/07-tabs-visual.svg "Disabled tabs")


      Disabled


      | Property                | Token    | Hex      |

      | ----------------------- | -------- | -------- |

      | Diasbled tab bg color   | $white   | \#FFFFFF |

      | Disabled tab font-color | $grey600 | \#9E9E9E |


      ## Mobile


      Use buttons to communicate actions users can take and to allow them to interact with the content.


      ![Mobile tabs](/assets/images/08-tabs-visual.svg "Mobile tabs")


      Mobile
parent: UtnFsFtDrPgQNFrm3NcAP
uuid: JNymd_5n-zALi2KcmUEtq
nestedSlug:
  - components
  - layout
  - tabs
---
