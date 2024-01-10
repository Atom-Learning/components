---
slug: markdown-content
title: MarkdownContent
links:
  viewSource: components/markdown-content
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      MarkdownContent is a content component that will transform a Markdown
      string into Atom Learning design system components.


      Currently it suppports converts the following Markdown elements into components:


      | Type               | Component           | Default component implemented |

      | ------------------ | ------------------- | ----------------------------- |

      | blockquote         |                     | ⛔                             |

      | code               | `<Box as="pre" />`  | ✅                             |

      | containerDirective |                     | ⛔                             |

      | emphasis           | `<em />`            | ✅                             |

      | heading            | `<Heading />`       | ✅                             |

      | image              | `<Image />`         | ✅                             |

      | inlineCode         | `<Box as="code" />` | ✅                             |

      | leafDirective      |                     | ⛔                             |

      | link               | `<Link />`          | ✅                             |

      | list               | `<List />`          | ✅                             |

      | listItem           | `<List.Item />`     | ✅                             |

      | paragraph          | `<Text />`          | ✅                             |

      | strong             | `<strong />`        | ✅                             |

      | text               | `{value}`           | ✅                             |

      | textDirective      |                     | ⛔                             |

      | thematicBreak      | `<Divider />`       | ✅                             |


      <CodeBlock live={true} preview={true} code={`<MarkdownContent
        content={\`
      ## This is a heading 2


      This will be a paragraph


      [And this will  be a link](https://atomlearning.co.uk)

      \`}

      />`} language={"tsx"} />


      ## Override with custom components


      You can override the component `MarkdownContent` will render for each type by passing an object to the `customComponents` prop where each key is the name of a Markdown Type (see the table above) and the value is a reference to the component you want to render:


      <CodeBlock live={true} preview={true} code={`<MarkdownContent
        content="This paragraph will have a red color"
        customComponents={{
          paragraph: ({ node, handleNode }) => (
            <Text css={{ color: 'red' }}>{node.children.map(handleNode)}</Text>
          )
        }}
      />`} language={"tsx"} />


      ## Markdown directives


      The `MarkdownContent` component supports [Markdown directives](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444). There are no directives built in by default, but you can define your own directives by using the `customComponents` prop.


      See the following example that transform the following directive into a `Button` component:


      <CodeBlock live={true} preview={true} code={`<MarkdownContent
        content=":button[This is a button]{href=https://atomlearning.co.uk isRounded=true}"
        customComponents={{
          textDirective: ({ node, handleNode }) => {
            const { name, attributes, children } = node

            if (name === 'button') {
              return <Button {...attributes}>{children.map(handleNode)}</Button>
            }

            return null
          }
        }}
      />`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="MarkdownContent" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: 0dDh777AyFvsKcVV-lyeI
nestedSlug:
  - components
  - content
  - markdown-content
---
