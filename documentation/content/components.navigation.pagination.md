---
slug: pagination
title: Pagination
tabs:
  - title: Code
    content: >-

      NOTE: Currently, only the `md` variant has been implemented.


      The `Pagination` component takes in a `colorScheme` object to customise the colours of the component. ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options [on the repository's github](https://github.com/Atom-Learning/components/tree/main/lib/src/experiments/color-scheme#readme).


      # Anatomy


      The root `Pagination` component allows the user to pass in a `pagesCount` prop, it is a number that tells the component how many pagination items to render. It also takes in a `labels`  prop which is an object which has this shape  `{ popoverTiggerLabel: string, nextPageButtonLabel: string, previousPageButtonLabel: string }`, this prop is responsible for adding labels to the next/previous buttons and the popover trigger, if this prop is not added the default labels are  "Next page" for the next page button, "Previous page" for the previous page button and "Open pagination popover" for the popover trigger.


      It also takes in a `visibleElementsCount` prop it can take a value 6 or 8, which dictates how many elements in the pagination we wish to render, inclusive of the next, previous, and popup buttons. For example, with `visibleElementsCount` set to `6`, it will display a previous page button, a next page button, a popup button, and 3 more page buttons. With `visibleElementsCount` set to `8` it may display up to 5 page buttons. By default, it is set to 6. This component can also takes in an `onSelectedPageChange` prop which is a function that can allow the parent component to have access to the selected page set on the `pagination` component. There is also an `onItemHover` prop which is a function that take a page number as argument and is triggered when a pagination item has been hovered over, we advise you debounce you call back function to prevent function calls.


      It can also take in a `selectedPage` prop which allows the parent component to pass in a numerical value indicating which page the parent component is currently showing, if the `selectedPage` prop is not passed in, the `Pagination` component as an internal state to keep track of the current page, by default this state is set to the first page.



      The `Pagination` component also takes in a `disabledPages` props which is an array of numbers, which indicate which pagination items should be disabled, and it also takes in a `indicatedPages` prop which is also an array of numbers to indicate which pagination item should be display a dot under the page number, which represents the page as completed.



            
      # Examples 

      <CodeBlock live={true} preview={true} code={`

      <Pagination
        pagesCount={6}
        colorScheme={{ base: 'purple2', accent: 'purple1'}}
      /> `} language={"tsx"} />

      Above is an example of passing in a number to the `pagesCount` prop that will render 6 pagination items, the `visibleElementsCount` prop is set to 6 by default. So the user will see two navigation buttons, an action button to trigger the popover and 3 page numbers.


      <CodeBlock live={true} preview={true} code={`

      <Pagination
        pagesCount={6}
        visibleElementsCount={8}
        colorScheme={{ base: 'grey2', accent: 'blue1'}}
      /> `} language={"tsx"} />

      Above is an example of passing `visibleElementsCount` prop and setting it to 8. The user will see two navigation buttons, an action button to trigger the popover and five page numbers.


      <CodeBlock live={true} preview={true} code={`

      <Pagination
        colorScheme={{ base: 'grey2', accent: 'blue1'}}
        disabledPages={[1,2]}
        indicatedPages={[4,5]}
        pagesCount={5}
        labels={{ popoverTiggerLabel: 'popover label', nextPageButtonLabel: 'next page label', previousPageButtonLabel: 'previous page label' }}
      />`} language={"tsx"} /> 


      Above is an example of when we use the `disabledPages` prop allowing us to render the pagination items for page 1 and 2 as disabled, and using the `indicatedPages` prop which renders a dot under the page numbers 4 and 5,  and adding custom labels to the next/previous button and popover trigger.


      ## API Reference


      <ComponentProps component="Pagination" />
  - title: Visual
    content: >-
      ## Structure


      The pagination component is used whenever a user needs to navigate through a list of items that is too long to fit on one page.


      It includes a "previous" and "next" chevron button, and several numbered buttons that correspond to different pages of the data.


      ### Anatomy


      * The pagination component typically consists of several buttons that allow the user to navigate to different pages of the data.

      * The buttons will typically include a "previous" button, a "next" button, and several numbered buttons that correspond to different pages of the data.

      * When the number of pages exceeds the maximum display limit, an ellipsis button is used to truncate the remaining pages. This button will appear as the last but one element to let users know the total amount of pages.

      * The current page will be indicated with a different style and color to make it clear to the user which page they are currently on.

      * Additionally, it may include a text or label indicating the current page and the total number of pages.


      The default/basic component:


      ![Pagination default basic component](/assets/images/01-pagination-structure.png "Pagination default basic component")


      A special variant for Mock tests that display a blue dot and different font color when the question has been answered:


      ![Pagination mock tests](/assets/images/02-pagination-structure-mock-tests.png "Pagination mock tests")


      ### Spacing and sizing


      ![Pagination size](/assets/images/03-pagination-sizing.png "Pagination size")


      | Property                 | Token   | px   | rem  |

      | ------------------------ | ------- | ---- | ---- |

      | Button size sm           | size $3 | 32px | 2    |

      | Button size md           | size $4 | 40px | 2.5  |

      | Button size lg (default) | size $5 | 48px | 3    |

      | Dot size                 | :(      | 4px  | 0.25 |


      ![Pagination spacing](/assets/images/04-pagination-spacing.png "Pagination spacing")


      | Property            | Token    | px  | rem  |

      | ------------------- | -------- | --- | ---- |

      | Space between items | space $1 | 4px | 0.25 |

      | Border-radious      | radii $0 | 4px | 0.25 |


      ![Pagination action icon](/assets/images/05-pagination-action-icon.png "Pagination action icon")


      | Property & element | Size            | Appearance | Theme     | isRounded |

      | ------------------ | --------------- | ---------- | --------- | --------- |

      | Action Icon        | ‘sm’, ‘md, ‘lg’ | 'simple'   | 'neutral' | 'no'      |


      ![Pagination popover padding](/assets/images/06-pagination-padding-popup.png "Pagination popover padding")


      | Property      | Token     | px   | rem |

      | ------------- | --------- | ---- | --- |

      | Border radius | radii-$1  | 8px  | 0.5 |

      | Padding       | space-$4  | 16px | 1   |

      | Shadow        | shadow $2 | \-   | \-  |


      ![Pagination typography](/assets/images/07-pagination-typography.png "Pagination typography")


      | Element                                 | Family | Weight | Size | Rem  | px  |

      | --------------------------------------- | ------ | ------ | ---- | ---- | --- |

      | default                                 | $body  | 400    | $md  | 1rem | 16  |

      | Completed, selected, selected completed | $body  | 600    | $md  | 1rem | 16  |


      ## Color


      ![Pagination color default](/assets/images/08-pagination-color-default.png "Pagination color default")


      | Property & Element - State                          | Token       | Hex |

      | --------------------------------------------------- | ----------- | --- |

      | Bg color - default, disabled                        | transparent | \-  |

      | Bg color - hover                                    | $grey100    | \#  |

      | Bg color - pressed                                  | $grey200    | \#  |

      | Bg color - focus                                    | $blue100    | \#  |

      | Border color - focus (2px)                          | $blue800    | \#  |

      | Inside border/shadow - selected focus (2px-2px gap) | $white      | \#  |

      | Font-color - Default, focus, disabled               | $grey800    | \#  |

      | Font-color - Hover, pressed                         | $grey1000   | \#  |


      ![Pagination color completed](/assets/images/09-pagination-color-completed.png "Pagination color completed")


      | Property & Element - State                          | Token       | Hex |

      | --------------------------------------------------- | ----------- | --- |

      | Bg color - default, disabled                        | transparent | \-  |

      | Bg color - hover                                    | $grey100    | \#  |

      | Bg color - pressed                                  | $grey200    | \#  |

      | Bg color - focus                                    | $blue100    | \#  |

      | Border color - focus (2px)                          | $blue800    | \#  |

      | Inside border/shadow - selected focus (2px-2px gap) | $white      | \#  |

      | Font-color - Default, focus, disabled               | $blue800    | \#  |

      | Font-color - Hover                                  | $blue900    | \#  |

      | Font-color - Pressed                                | $blue1000   | \#  |


      ![Pagination color selected default](/assets/images/10-pagination-color-selected.png "Pagination color selected default")


      Same as the one above with the addition of border-color


      | Property & Element - State              | Token     | Hex |

      | --------------------------------------- | --------- | --- |

      | Border-color - default, focus, disabled | $blue800  | \#  |

      | Border-color - hover                    | $blue900  | \#  |

      | Border-color - pressed                  | $blue1000 | \#  |

      | Border-color - focus (2px)              | $blue800  | \#  |




      ![Pagination color completed](/assets/images/11-pagination-color-selected-completed.png "Pagination color completed")


      | Property & Element - State           | Token       | Hex |

      | ------------------------------------ | ----------- | --- |

      | Dot color - default, focus, disabled | transparent | \-  |

      | Doc color - hover                    | $grey100    | \#  |

      | Doc color - pressed                  | $grey200    | \#  |

      | Doc color - focus                    | $blue100    | \#  |
  - title: Usage
    content: >-
      ## Overview


      A component used whenever a user needs to navigate through sets of data that are too long to fit on one page.


      ![Pagination overview](/assets/images/12-pagination-overview.png "Pagination overview")


      ## When to use


      * Use whenever a user needs to navigate through a list of items that is too long to fit on one page.

      * Used in conjunction with other components such as a table or a list to allow users to easily navigate to different pages of the list.

      * Used whenever a user needs to navigate through a large set of data that is too long to fit on one page. This can include lists of items, search results, or any other data that is divided into multiple pages.

      * Used in conjunction with other components such as a list or a card grid, to allow users to easily navigate to different pages of the data.


      #### Placement


      * The pagination component should be placed at the bottom of the component with the data that it is associated with.

      * It should be placed in a consistent location on the page to make it easy for users to find and use.


      ![Pagination placemente](/assets/images/13-pagination-placement.png "Pagination placemente")


      Pagination component allowing the user to navigate through a list of Mock test.


      #### Truncation


      When a threshold of pages is reached, the list is truncated using an ellipsis button. This button triggers a popup containing allowing the user to navigate through the different pages.


      ![Pagination truncation](/assets/images/14-pagination-truncation.png "Pagination truncation")


      #### Completed


      A special variant for Mock tests that display a blue dot and different font color when the question has been answered:


      ![Pagination completed mock tests](/assets/images/15-pagination-completed.png "Pagination completed mock tests")


      #### Content


      * The buttons in the pagination component should be labeled clearly with the page number or with "previous" or "next" to indicate the action that will occur when the button is clicked.

      * The current page should be indicated clearly to the user.


      #### Behaviors


      * The pagination component should update to reflect the current page and the total number of pages in the data as the user navigates through it.


      The buttons should have interaction states that indicate to the user that the buttons are interactive:


      * default: default, hover, pressed, focus, disabled

      * selected: default, hover, pressed, focus, disabled


      To indicate completed mock tests:


      * completed: default, hover, pressed, focus, disabled

      * completed-selected: default, hover, pressed, focus, disabled:


      The design system user (dev) should be able to choose the max amount of items shown in the navigation (including or excluding action buttons?)\

      What would be a good default? max 8 elements?\

      The number of items shown should respond according to the parent container available space.


      ![Pagination max elements](/assets/images/16-pagination-number-of-elements.png "Pagination max elements")


      When you're on the first page the left chevron is disabled. When you're on the last page the right chevron is disabled.


      ![Pagination chevron disabled](/assets/images/17-pagination-disabled-buttons.png "Pagination chevron disabled")


      The selected page will be in the middle except for the pages that are at the start and end of the set (this is how it currently works).\

      The ellipsis button will always be the one before the last item (this is new).


      ![Pagination ellipsis button placement](/assets/images/18-pagination-selected.png "Pagination ellipsis button placement")


      ## Accessibility


      * The pagination component should be screen-reader accessible.

      * The buttons should be keyboard-navigable, allowing the user to navigate through the pages using the keyboard.

      * The current page should be clearly indicated to users of assistive technology.

      * The "previous" and "next" buttons should be labeled clearly and have a clear action associated with them.

      * It is important to ensure that the pagination component is usable by users with different abilities and disabilities.

      * Action icons inside the component must have accessible names for assistive technologies. For example: “Next”, “Previous”.

      * Place the pager in a `<nav>` element when you can.

      * If you do not use a `<nav>` element, you need to add `role="navigation"` to the markup. Note: this role is implied when you use the `<nav>` element so it is a bit redundant to use both at the same time.

      * The markup includes an `aria-label="pagination"` to describe the type of navigation.

      * Add `aria-current="page"` to the link that points to the current page. This will tell AT that the focused link is pointing to the current page.

      * Add `aria-disabled="true"` to the link when the link is disabled.


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/pagination-do-01.png","type":"do","description":"If there's only a small number of pages, show all the page buttons without an ellipsis."},{"image":"/assets/images/pagination-do-01.png","type":"avoid","description":"If there's only a small number of pages, show all the page buttons without an ellipsis."},{"type":"dont","image":"/assets/images/pagination-do-01.png","description":"If there's only a small number of pages, show all the page buttons without an ellipsis."}]} />
parent: 95SvEwV7BznSChttFanpW
uuid: d9e3b0af-6a46-4168-96db-c98bac9ee6d1
nestedSlug:
  - components
  - navigation
  - pagination
---
