---
slug: link
title: Link
links:
  viewSource: components/link
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      Link is a light wrapper around the HTML anchor element. It adds default
      styling and the `css` prop.


      ## Sizes


      `size="xs"|"sm"|"md"|"lg"|"xl"`


      <CodeBlock live={true} preview={true} code={`<Link href="http://example.com/" size="sm">
        I'm a link
      </Link>`} language={"tsx"} />


      ## Polymorphism


      The `Link` component supports polymorphism, therefore depending on whether it receives an `onClick`/`href` as a prop, it will produce a `button` or `link` respectively


      <CodeBlock live={true} preview={true} code={`<Link href="http://example.com/">
        I'm a link
      </Link>`} language={"tsx"} />


      <CodeBlock live={true} preview={true} code={`<Link onClick={() => alert('clicked')}>
        I'm a link
      </Link>`} language={"tsx"} />

      ## API Reference


      <ComponentProps component="Link" />
  - content: >-
      ## Overview


      Links allow users to navigate between different locations. They can be used as standalone (optionally with an icon) or inline within text.


      Also known as Anchor, Text Link or Hyperlink .


      ![01 link overview](/assets/images/01-link-usage.svg "01 link overview")




      ## When to use


      Link is mainly used as a navigational element and usually appear within or directly following a paragraph or sentence. Use a hyperlink when linking to another document or URL.


      ![02 link usage examples](/assets/images/02-link-usage.svg "02 link usage examples")


      Usage examples


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/01-link-do.svg","type":"do","description":"Match Link to the text size and font-weight of the content they are accompanying for consistency and visual balance."},{"description":"Apply multiple text styles, when using links paired with text, as this can create inconsistency.","type":"dont","image":"/assets/images/02-link-dont.svg"},{"description":"Give the link a meaningful description that clearly indicates its destination.","type":"do","image":"/assets/images/03-link-do.svg"},{"description":"Use generic phrases like \"click here\" or \"go to\" on links.","type":"dont","image":"/assets/images/04-link-dont.svg"},{"image":"/assets/images/05-link-do.svg","description":"Provide an external icon (e.g.\"new-window\" icon) when the link text needs to refer to an external domain.","type":"do"},{"description":"Overuse icons, especially when they are part of text content.","type":"dont","image":"/assets/images/06-link-dont.svg"},{"type":"do","description":"Use the linked text with the default DS colour.","image":"/assets/images/07-link-do.svg"},{"description":"Change the colour of the linked text.","type":"dont","image":"/assets/images/08-link-dont.svg"},{"image":"/assets/images/09-link-dont.svg","description":"Replace link text with URL.","type":"dont"}]} />
    title: Usage
  - title: Visuals
    content: >
      ## Structure


      ![Subtle link](/assets/images/01-link-structure.svg "Subtle link")


      Subtle link


      ![Bold link](/assets/images/02-link-structure.svg "Bold link")


      Bold link


      ![Bold link with icon](/assets/images/03-link-structure.svg "Bold link with icon")


      Bold link with icon


      ## Sizes & Typography


      There are three size variants for the link component: small, medium, and large. It is recommended that the link size matches the type size of the text it is inline with. Link sizes should match the page's default body copy size if they are used apart from other content.


      ![Link sizes](/assets/images/04-link-sizes-typography.svg "Link sizes")


      Sizes


      | Property  | Family | Size | rem    | px   | 

      | ----------| ------ | -----| -------| -----|

      | Link xs   | $body  | $xs  | 0.75   | 12   |

      | Link sm   | $body  | $sm  | 0.875  | 14   |

      | Link md   | $body  | $md  | 1      | 16   |

      | Link lg   | $body  | $lg  | 1.3125 | 21   |

      | Link xl   | $body  | $xl  | 1.75   | 28   |


      ## Variants & Color


      ![Link variants](/assets/images/05-link-variants.svg "Link variants")


      Variants


      | Property       | Token                 | Hex      |

      | ---------------| ----------------------| -------- |

      | Link default   | $blue800              | \#0f67f5 |

      | Link hover     | $blue900              | \#194ac8 |

      | Link pressed   | $blue1000             | \#102da2 |

      | Link focus     | $blue1000             | \#102da2 |

      | Link disabled  | $blue800, opacity 30% | \#0f67f5 |
parent: 95SvEwV7BznSChttFanpW
uuid: yO-SuTjsVIBo9FkHt5v44
nestedSlug:
  - components
  - navigation
  - link
---
