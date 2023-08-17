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


      ## Text overflow

      <CodeBlock live={true} preview={true} code={`<Tooltip.Provider>
        <Badge css={{width: 100}} overflow="ellipsis">
        <Icon is={Wifi} /> New Data New Data New Data New Data New Data</Badge>
      </Tooltip.Provider>`} language={"tsx"} />


      ## Emphasis

      <CodeBlock live={true} preview={true} code={`<Stack gap={3}>
        <Badge emphasis="subtle">Subtle</Badge>
        <Badge emphasis="bold">Bold</Badge>
      </Stack>`} language={"tsx"} />


      ## Theme

      The following `theme`s semantic themes are available: `success`, `warning`, `danger`, `neutral`, `info`.


      Moreover, any colour that has been set up as a ColorScheme accent is also available to use.  Currently the available non-semantic colours are `grey`, `blue`, `purple`, `cyan`,  `green`, `magenta`, `red`, `teal`, `orange`, `yellow`, `lime`.


      If NO theme is passed in. The badge will attempt to pick up a colour based on the accent of the closest parent with a `ColorScheme`.


      <CodeBlock live={true} preview={true} code={`<Stack gap={3} direction="column" align="center">
        <Badge>Picks up from ColorScheme</Badge>
        <Stack gap={3}>
          <Badge theme="info">Info</Badge>
          <Badge theme="neutral">Neutral</Badge>
          <Badge theme="success">Success</Badge>
          <Badge theme="warning">Warning</Badge>
          <Badge theme="danger">Danger</Badge>
        </Stack>
        <Stack gap={3}>
          <Badge theme="grey">Grey</Badge>
          <Badge theme="blue">Blue</Badge>
          <Badge theme="purple">Purple</Badge>
          <Badge theme="cyan">Cyan</Badge>
          <Badge theme="green">Green</Badge>
          <Badge theme="magenta">Magenta</Badge>
          <Badge theme="red">Red</Badge>
          <Badge theme="teal">Teal</Badge>
          <Badge theme="orange">Orange</Badge>
          <Badge theme="yellow">Yellow</Badge>
          <Badge theme="lime">Lime</Badge>
        </Stack>
        <Badge emphasis="bold">Picks up from ColorScheme</Badge>

        <Stack gap={3}>
          <Badge theme="info" emphasis="bold">Info</Badge>
          <Badge theme="neutral" emphasis="bold">Neutral</Badge>
          <Badge theme="success" emphasis="bold">Success</Badge>
          <Badge theme="warning" emphasis="bold">Warning</Badge>
          <Badge theme="danger" emphasis="bold">Danger</Badge>
          </Stack>
        <Stack gap={3}>
          <Badge theme="grey" emphasis="bold">Grey</Badge>
          <Badge theme="blue" emphasis="bold">Blue</Badge>
          <Badge theme="purple" emphasis="bold">Purple</Badge>
          <Badge theme="cyan" emphasis="bold">Cyan</Badge>
          <Badge theme="green" emphasis="bold">Green</Badge>
          <Badge theme="magenta" emphasis="bold">Magenta</Badge>
          <Badge theme="red" emphasis="bold">Red</Badge>
          <Badge theme="teal" emphasis="bold">Teal</Badge>
          <Badge theme="orange" emphasis="bold">Orange</Badge>
          <Badge theme="yellow" emphasis="bold">Yellow</Badge>
          <Badge theme="lime" emphasis="bold">Lime</Badge>
        </Stack>
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


      <ComponentProps component="Badge.Icon" />


      <ComponentProps component="Badge.Text" />
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
