---
slug: pagination
title: Pagination
tabs:
  - title: Code
    content: >-
      
      The `Pagination` component comes with 3 components that combine to make the `Pagination`. The parent Pagination contains `Pagination.PreviousButton`, `Pagination.Pages`, `Pagination.NextButton` components.


      NOTE: Currently, only the `md` variant has been implemented.


      The `Pagination` component also in a `colorScheme` object to customise the colours of the component. ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options [on the repository's github](https://github.com/Atom-Learning/components/tree/main/lib/src/experiments/color-scheme#readme).


      # Anatomy


      The root `Pagination` component allows the user to pass in a `numOfPages` prop, which is a number that tells the component how many pages to render, or it can take in a `pages` prop which is an array that contains objects with properties relating to the page number, whether the question number is answered or even disabled, this prop is used for the case when we wish to handle navigation within the non-adaptive mock tests. 


      It also takes in a `numOfElements` prop it can take 6 or 8, which dictates how many elements in the pagination we wish to render including the navigation buttons, by default, it is set to 8. This component can also takes in an `onPageChange` props which is a function that can allow the parent component to have access to the current page set on the `pagination` component.



      `Pagination.PreviousButton` represents the backwards navigation element. It has a default label of `Previous page` but it can also receive a `label` prop to override the default one. This is important for providing translated strings to the component. It can receive an onClick prop to override its default behaviour in case some logic or validation needs to be applied before going to the next page. It is automatically disabled while the user is viewing the first page.



      `Pagination.NextButton` represents the forwards navigation element. It has a default label of `Next page` but it can also receive a `label` prop to override the default one. This is important for providing translated strings to the component. It can receive an onClick prop to override its default behaviour in case some logic or validation needs to be applied before going to the next page. It is automatically disabled while the user is viewing the last page.



      `Pagination.Pages` holds the list of pages and the action icon to trigger the popover, where we render all the page numbers, it can receive an onClick prop to override its default behaviour in case some logic or validation needs to be applied when a page button is clicked.

       
      # Examples 

      <CodeBlock live={true} preview={true} code={`

      <Pagination
        numOfPages={6}
        colorScheme={{ base: 'purple2', accent: 'purple1'}}
        css={{ display: 'flex' }}
      >
        <Pagination.PreviousButton />
        <Pagination.Pages />
        <Pagination.NextButton />
      </Pagination> `} language={"tsx"} />

      Above is an example of passing in a number to the `numOfPages` prop that will render 6 pages the `numOfElements` prop is set to 8 by default. So the user will see two navigation buttons, an action button to trigger the popover and five page numbers.


      <CodeBlock live={true} preview={true} code={`

      <Pagination
        numOfPages={6}
        css={{ display: 'flex' }}
        numOfElements={6}
        colorScheme={{ base: 'grey2', accent: 'blue1'}}
      >
        <Pagination.PreviousButton />
        <Pagination.Pages />
        <Pagination.NextButton />
      </Pagination> `} language={"tsx"} />

      Above is an example of passing `numOfElements` prop and setting it to 6. The user will see two navigation buttons, an action button to trigger the popover and three page numbers.


      <CodeBlock live={true} preview={true} code={`

      <Pagination
        colorScheme={{ base: 'grey2', accent: 'blue1'}}
        css={{ display: 'flex' }}
        pages={[{pageNumber: 1, isCompleted: false}, {pageNumber: 2, isCompleted: false},{pageNumber: 3, isCompleted: true}, {pageNumber: 4, isCompleted: false, isDisabled: true}]}
      >
        <Pagination.PreviousButton />
        <Pagination.Pages />
        <Pagination.NextButton />
      </Pagination> `} language={"tsx"} /> 


      Above is an example of the mock test variation of the `Pagination` component were we use `mockTestQuestions` instead of `numOfPages` to render the page numbers.



      ## API Reference


      <ComponentProps component="Pagination" />


      <ComponentProps component="Pagination.PreviousButton" />


      <ComponentProps component="Pagination.Pages" />


      <ComponentProps component="Pagination.NextButton" />
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
