---
slug: empty-state
title: Empty State
links:
  viewSource: components/empty-state
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      Empty states are messages that provide an explanation of an interface in
      absence of content.


      `EmptyState` exports a number of components that can be composed together to create a message. The message can include Title and/or Body and sometimes they appear together with an illustration and actionable buttons. There are 5 different size variants of `EmptyState` ( 'xs', 'sm', 'md', 'lg' and 'xl').


      <CodeBlock live={true} preview={true} code={`<EmptyState size="sm">
        <EmptyState.Image src="https://app.atomlearning.com/dist/29a378dc127c669808f2.svg" alt="" />
        <EmptyState.Title>No users found!</EmptyState.Title>
        <EmptyState.Body>
          You need to add some users before you can use this feature
        </EmptyState.Body>
      </EmptyState>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="EmptyState" />
  - title: Visual
    content: >-
      

      ## Structure


      Empty states are messages that provide an explanation of an interface in absence of content.


      The message can include Title and/or Body and sometimes they appear together with an illustration and actionable buttons.


      ![empty state structure](/assets/images/01-empty-state-structure.png "empty state structure")


      | Element & Property                      | Token     | Pixel | Rem  |

      | --------------------------------------- | --------- | ----- | ---- |

      | xs, sm, md - Illustration Margin-bottom | space $4  | 16px  | 1    |

      | lg, xl - Illustration Margin-bottom     | space $24 | 24px  | \-   |

      | xs, sm, md - Title Margin-bottom        | space $3  | 12px  | 0.75 |

      | lg, xl - Illustration Margin-bottom     | space $4  | 16px  | 1    |

      | lg, xl - Illustration Margin-bottom     | space $4  | 16px  | 1    |

      | lg, xl - Illustration Margin-bottom     | space $24 | 24px  | \-   |


      ### Size


      There’s 5 different sizes for empty state illustrations. We start designing for “xs” 56x32px and then we multiply each size by x1.5.\

      “md” and “lg” share the same illustration size but “lg” adds a semicircle on the background that comes from the logo of Atom making the total illustration bigger (also for “xl”).


      ![empty state size](/assets/images/02-empty-state-size.png "empty state size")


      | Illustration container size | Width x Height (pixels)        |

      | --------------------------- | ------------------------------ |

      | xs                          | max-width & max-height 56x32   |

      | sm                          | max-width & max-height 84x48   |

      | md                          | max-width & max-height 126x72  |

      | lg                          | max-width & max-height 190x142 |

      | xl                          | max-width & max-height 285x213 |


      ## Typography


      ![empty state typography](/assets/images/03-empty-state-typography.png "empty state typography")


      All text is centered aligned.


      | Font               | Family | Size | Weight | Pixels | Rem    |

      | ------------------ | ------ | ---- | ------ | ------ | ------ |

      | Title - xs, sm, md | $body  | $md  | 600    | 16     | 1      |

      | Title - lg, xl     | $body  | $lg  | 600    | 21     | 1.3125 |

      | Body - xs, sm, md  | $body  | $sm  | 400    | 14     | 0.875  |

      | Body - lg, xl      | $body  | $md  | 400    | 16     | 1      |


      ## Color


      We use a minimal and simple approach to colour for empty states, using a muted greyscale that makes it clear that it’s an unactive illustration communicating that something is missing or doesn’t fully work yet. It also helps to bring users attention to the primary action instead of the illustration.\

      We have two different background colours for our apps:


      * White

      * Light-blue


      The semicircle colour in lg and xl images would change from grey to white when placed within a light-blue background. That means we have 2 images for each illustration.


      ![empty state color](/assets/images/04-empty-state-color.png "empty state color")


      | Property & Element | Token    | Hex |

      | ------------------ | -------- | --- |

      | Font-color Title   | $grey800 | \#  |

      | Font-color Body    | $grey800 | \#  |
  - title: Usage
    content: >-
      ## Overview


      Empty states are messages that provide an explanation of an interface in absence of content.


      Commonly seen the first time a user interacts with a product or page, but can be used when content has been deleted or is unavailable. An empty state is an opportunity to engage, help, and educate users adding an informative message and actionable buttons.


      ![empty state overview](/assets/images/05-empty-state-overview.png "empty state overview")


      None of the elements are required. In cases where the space is very limited, only a body text would be needed to provide the message. Just try to always be informative and provide enought information to orient the user.


      1. **Illustration**: A non-interactive image that is relevant to the message and context.

      2. **Title**: A short and concise description.

      3. **Body**: A short message that clearly explain why the space is empty and what to do next. Direct the user to a primary action button positioned underneath the copy or to a specific UI element.

      4. **Call to action**: The primary call to action referenced in the message above. There could be one or multiple buttons styled as primary, secondary or ghost.


      ## When to use

       Use Empty states when there’s an absence of content or data to provide explanation or to help and educate users.\
      They can appear anywhere your app can display data, including but not limited to panels, tables, cards, modals and full pages.


      Each case will be unique and should be thought of as a problem to solve.


      **The primary goals should be to:**


      * Improve learnability and feature discovery.

      * Increase feature adoption.

      * Improve usability.


      **Examples of use:**


      * When no results are found after a search or filter.

      * When no content or items exists on a page.

      * When a certain feature isn‘t available under the current tier.

      * When data is missing.

      * When there are features that need to be configured first, before having the ability to show or create content.

      * When something is amiss or there is some error.


      ![empty state when to use size](/assets/images/06-empty-state-when-to-use.png "empty state when to use size")


      You should choose the size of the image acording to the context and size of the space for the empty state.


      Large illustrations are likeley to be the only thing on the page or big containers. For example full-screen messages.


      Small illustrations will be more commonly used for smaller containers and when there could be multiple empty states on the same page.


      If space is limited, use just text. Also in a dashboard with panels that could show multiple empty states at the same time consider using just text to avoid repetition.


      ![empty state when to use limited space](/assets/images/07-empty-state-when-to-use-2.png "empty state when to use limited space")


      When choosing the type of button that you are going to use for the empty state consider what other content might appear on the same screen and if there could be other empty states shown at once, in that case we recommend using ghost or link buttons. This avoid scenarios with multiple primary buttons in the UI.


      ![empty state when to use button](/assets/images/08-empty-state-when-to-use-3.png "empty state when to use button")


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/empty-state-dos-and-donts-01.svg","type":"do","description":"Include a relevant call to action for a possible next step."},{"image":"/assets/images/empty-state-dos-and-donts-02.svg","type":"dont","description":"Include too many primary CTA buttons on one page."},{"image":"/assets/images/empty-state-dos-and-donts-03.svg","type":"do","description":"Limit the number of words in the message as much as possible."},{"image":"/assets/images/empty-state-dos-and-donts-04.svg","type":"avoid","description":"Using negative tone for images or message. Choose an image that has neutral tone."},{"image":"/assets/images/empty-state-dos-and-donts-05.svg","type":"do","description":"Use sentence case for messages and no punctuation on Titles."},{"image":"/assets/images/empty-state-dos-and-donts-06.svg","type":"avoid","description":"Avoid repeating content from the title. "}]} />
parent: J3bsmpB7-_uuqm05peuTA
uuid: bTeUsimX8-KTOKy95aqze
nestedSlug:
  - components
  - feedback
  - empty-state
---
