---
slug: badge
title: Badge
links:
  viewSource: components/badge
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      The `Badge` component can be used to highlight a short piece of
      information, like a status.


      <CodeBlock live={true} preview={true} code={`<Badge>New Data</Badge>`} language={"tsx"} />


      ## Theme


      These are the available `theme`s for this component: `success`, `warning`, `danger`, `neutral`, `info` and `purple`. The default is `info`


      <CodeBlock live={true} preview={true} code={`<Stack gap={3}>
        <Badge>Info</Badge>
        <Badge theme="neutral">Neutral</Badge>
        <Badge theme="success">Success</Badge>
        <Badge theme="warning">Warning</Badge>
        <Badge theme="danger">Danger</Badge>
        <Badge theme="purple">Purple</Badge>
      </Stack>`} language={"tsx"} />


      ## With icons


      An `<Icon />` can be passed as a child to show alongside text.


      <CodeBlock live={true} preview={true} code={`<Badge>
          <Icon is={Wifi} />
          Info with icon
          <Icon is={Wifi} />
       </Badge>`} language={"tsx"} />

      ## Size


      These are the available `size`s for this component: `xs`, `sm` and `md`. The default is `sm`


      <CodeBlock live={true} preview={true} code={`<Badge size="xs"><Icon is={Wifi} />Size</Badge>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Badge" />
  - title: Visual
    content: >-
      ## Structure


      Badges are visual indicators for labels, useful to emphasize information to the user. Works best with single word values.


      ![Badges structure](/assets/images/01-badges-structure.png "Badges structure")


      | Property      | Token    | px   | rem |

      | ------------- | -------- | ---- | --- |

      | Border radius | radii $1 | 8px  | 0.5 |

      | Padding       | space $5 | 32px | 2   |

      | Margin-bottom | space $5 | 32px | 2   |


      ![Badges size and margins](/assets/images/02-badges-paddings.png "Badges size and margins")


      | Property - variant            | Token    | px   | rem  |

      | ----------------------------- | -------- | ---- | ---- |

      | Height - sm                   | size $2  | 24px | \-   |

      | Height - md                   | size $3  | 32px | 2    |

      | Height - lg                   | size $4  | 40px | 2.5  |

      | Padding - lg                  | space $2 | 8px  | 0.5  |

      | Padding - sm & md             | space $1 | 4px  | 0.25 |

      | Icon margin-right, sm, md, lg | space $1 | 4px  | 0.25 |


      ## Typography


      ![Badges typography](/assets/images/03-badges-typography.png "Badges typography")


      | Element  | Family | Weight | Size | Rem      | px  |

      | -------- | ------ | ------ | ---- | -------- | --- |

      | badge sm | $body  | 400    | $sm  | 0.875rem | 14  |

      | badge md | $body  | 400    | $md  | 1rem     | 16  |

      | badge md | $body  | 400    | $md  | 1rem     | 16  |


      ## Color


      ![badges color examples](/assets/images/04-badges-color.png "badges color examples")


      | Property & Element - State | Token         | Hex |

      | -------------------------- | ------------- | --- |

      | Icon & Text - Info         | $blue800      | \#  |

      | Icon & Text - Neutral      | $grey800      | \#  |

      | Icon & Text - Success      | $successMid   | \#  |

      | Icon & Text - Danger       | $dangerMid    | \#  |

      | Icon & Text - Warning      | $warningMid   | \#  |

      | Icon & Text - Purple       | $purple1000   | \#  |

      | Bg - Info                  | $blue100      | \#  |

      | Bg - Neutral               | $grey200      | \#  |

      | Bg - Success               | $successLight | \#  |

      | Bg - Danger                | $dangerLight  | \#  |

      | Bg - Warning               | $warningLight | \#  |

      | Bg - Purple                | $purple200    | \#  |
parent: HGItoEG3XVs9DpOLugTot
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - feedback
  - badge
---
