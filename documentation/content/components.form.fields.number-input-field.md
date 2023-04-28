---
slug: number-input-field
title: Number Input Field
links:
  viewSource: components/number-input-field
  showReportAnIssue: true
tabs:
  - content: >-
      `NumberInputField` renders a field composed of an NumberInput, a Label
      and a InlineMessage. It is the preferred way to render a form field for a
      number input.


      In addition to text `Label` (required) and a validation error (optional), `NumberInputField` accepts all the same props as `NumberInput` and will pass them on to the `NumberInput` it renders.


      <CodeBlock live={true} preview={true} code={`<Form>
        <NumberInputField
          label="Number of cats"
          name="cats"
          min={3}
          validation={{
            min: {
              value: 3,
              message: 'You must have at least 3 cats!'
            }
          }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="NumberInputField" />
    title: Code
  - title: Visual
    content: >-
      

      ## Structure


      An Input control for editing a numeric/quantity value with increment and decrement buttons next to it.


      ![number input structure](/assets/images/01-number-input-structure.png "number input structure")


      | Property             | Token    | Pixel | Rem  |

      | -------------------- | -------- | ----- | ---- |

      | Border radius        | radii-04 | 4px   | 0.25 |

      | Border radius merged | none     | 0     | 0    |


      ### Size


      Number input has the same height as a regular Input Field. The buttons also correspond to the size of Action Icons “sm” and “md”.


      ![number input size](/assets/images/02-number-input-size.png "number input size")


      | Property  | sm           | md           | lg  |

      | --------- | ------------ | ------------ | --- |

      | height    | 32px size-$4 | 40px size-$4 | \-  |

      | icon size | 16px         | 24px         | \-  |


      | Property | size    | px   |

      | -------- | ------- | ---- |

      | Width    | size-$6 | 56px |


      ## Typography


      No changes, same as Input Field


      ## Color


      \*Input same as Input Field


      ![number input color](/assets/images/03-number-input-color-input.png "number input color")


      Buttons


      ![number input color buttons](/assets/images/04-number-input-color-buttons.png "number input color buttons")


      | Property & Element - State     | Token    | Hex |

      | ------------------------------ | -------- | --- |

      | Bg color - Default, Disabled   | $white   | \#  |

      | Bg color - Hover               | $grey100 | \#  |

      | Bg color - Pressed             | $grey200 | \#  |

      | Border-color                   | $grey800 | \#  |

      | Icon color - Default, Disabled | $grey600 | \#  |

      | Icon color - Hover             | $grey800 | \#  |

      | Icon color - Pressed           | $grey900 | \#  |
  - title: Usage
    content: >-
      ## Overview


      An Input control for editing a numeric/quantity value with increment and decrement buttons next to it.


      The buttons requires less effort from the user than selecting the input field, tapping the digit “2” on the keypad, and hitting Enter or dismissing the keyboard. For example, to increase the number of students from 1 to 2 in a form, the user only needs one tap on the plus button.


      ![number input overview](/assets/images/05-number-input-overview.png "number input overview")


      ## When to use


      To make the already laborious task of filling out forms as easy and intuitive as possible we have designed this input field to reduce input effort for fields with values that deviate little from the default by allowing users to increase or decrease the number in a single button press.


      * Use when you need to incrementally change a value.

      * Use when values are tied to a unit of measure.

      * Don't use for binary settings.

      * Don't use for a range of three values or less (use toggle group instead).


      The user can choose to type or click to their desired number.


      The buttons work best for numbers between 0 and ~10. More than that, and it can get very laborious for the user to click through, and it’s better to use the input.


      If you expect the user to deviate substantially from the default, use a regular input without buttons.


      Number Input should always have a default. The default will usually be ‘1’. Sometimes, you will have steppers defaulted to ‘0’ too.


      **State**\

      The default state allows the user change the number using the buttons.


      ![number input state](/assets/images/06-number-input-state.png "number input state")


      Disabled means that the numeric stepper is disabled and that you can’t change its value. It may be disabled due to business rules or because the user needs to select something else first.


      ![number input disabled](/assets/images/07-number-input-state-disabled.png "number input disabled")


      ## Do's and Don'ts


      ![number input dos and donts](/assets/images/08-number-input-dos-and-dont-s.png "number input dos and donts")


      ![number input dos and donts 2](/assets/images/09-number-input-dos-and-dont-s.png "number input dos and donts 2")


      ![number input dos and donts 3](/assets/images/10-number-input-dos-and-dont-s.png "number input dos and donts 3")
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - number-input-field
---
