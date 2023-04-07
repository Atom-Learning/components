---
slug: stepper
title: Stepper
links:
  viewSource: components/stepper
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      Stepper provides a bullet list of steps and forward/backwards
      navigation buttons. It exports multiple components that combine to create
      a stepped progress view.


      `Stepper.StepBack` represents the backwards navigation element. It can receive either a child text node or a `label` prop as a function that receives `activeStep` as an argument in order to possibly render different labels based on the current step the user is on. It is automatically disabled while the user is viewing the first step.


      `Stepper.StepForward` represents the forward navigation element. It can receive either a child text node or a `label` prop as a function that receives `activeStep` as an argument in order to possibly render different labels based on the current step the user is on. It can receive an onClick prop to override its default behaviour in case some logic or validation needs to be applied before going to the next step.


      `Stepper.Steps` holds the actual bullet list. It can receive a `css` prop, allowing for full customization.


      The root `Stepper` component must be passed `stepCount` as a number in order to display the desired number of bullet steps. It also takes `onStepChange` as a function that takes `activeStep` as an argument. This can be used to determine what content to display, based on the current step. It can also take `onComplete` as a function that gets called when the user clicks the `StepForward` button while on the last step.


      <CodeBlock live={true} preview={true} code={`<Stepper
        stepCount={3}
        css={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}
      >
        <Stepper.StepBack>Back</Stepper.StepBack>
        <Stepper.Steps />
        <Stepper.StepForward>Next</Stepper.StepForward>
      </Stepper>`} language={"tsx"} />


      The root `Stepper` component can also take an `allowSkip` prop that allows the user to navigate by clicking the actual bullets. However, navigating by clicking a bullet is only possible if the user has already viewed it by using the `Next` button.


      Below is a more complex example that shows how to dynamically render the button labels, get the activeStep in order to potentially use it to determine what content to render based on the current position, and use an `onComplete` function to trigger custom behaviour when the user reaches the final step.


      <CodeBlock live={true} preview={true} code={`<Stepper
        stepCount={3}
        allowSkip
        onComplete={() => console.log('Finished')}
        onStepChange={(activeStep) =>
          console.log('Do something with the active step')
        }
        css={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}
      >
        <Stepper.StepBack label={(activeStep) => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Finish' : 'Next')}
        />
      </Stepper>`} language={"tsx"} />


      Below is how to override the forward default behavior if some logic or validation need to be done before moving to the next step.


      <CodeBlock live={true} preview={true} code={`<Stepper
        stepCount={3}
        css={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}
      >
        <Stepper.StepBack>Back</Stepper.StepBack>
        <Stepper.Steps />
        <Stepper.StepForward
          onClick={(goToNextStep) => {
            // do something before
            goToNextStep()
          }}
        >
          Next
        </Stepper.StepForward>
      </Stepper>`} language={"tsx"} />


      The root `Stepper` component also allows the user to pass a `steps` prop in order to render step labels. When the `steps` prop is passed, the `Stepper` component will be used as a controlled component thereby taking control of its state. When used as a controlled component, navigation across steps, and identifying the state of a step would be controlled by the array of steps passed to the component.


      Below is an example that shows how to use the controlled component. Each object in the `steps` array must include a `label` and a `status` property to determine what content to render based on the current position.


      <CodeBlock live={true} preview={true} code={`<Stepper
        steps={[
          {
            label: 'Step 1',
            status: 'viewed'
          },
          {
            label: 'Step 2',
            status: 'active'
          },
          {
            label: 'Step 3',
            status: 'default'
          }
        ]}
      >
        <Stepper.Steps />
      </Stepper>`} language={"tsx"} />


      The root `Stepper` component also allows the user to pass a `hideLabels` prop in order to hide step labels passed in the `step` object.


      Below is an example that shows how to hide step labels.


      <CodeBlock live={true} preview={true} code={`<Stepper
        steps={[
          {
            label: 'Step 1',
            status: 'viewed'
          },
          {
            label: 'Step 2',
            status: 'active'
          },
          {
            label: 'Step 3',
            status: 'default'
          }
        ]}
        hideLabels={true}
      >
        <Stepper.Steps />
      </Stepper>

      `} language={"tsx"} />


      The root `Stepper` component also allows the user to pass a `showCompletedIcons` prop in order to replace step numbers with tick icons when the step has been completed. This defaults to `false`.


      <CodeBlock live={true} preview={true} code={`<Stepper
        steps={[
          {
            label: 'Step 1',
            status: 'completed'
          },
          {
            label: 'Step 2',
            status: 'active'
          },
          {
            label: 'Step 3',
            status: 'default'
          }
        ]}
        showCompletedIcons
      >
        <Stepper.Steps />
      </Stepper>`} language={"tsx"} />


      The root `Stepper` component also allows the user to pass a `direction` prop in order to the alternate the component direction .


      Below is an example that shows how to render steps in vertical direction.


      <CodeBlock live={true} preview={true} code={`<Stepper stepCount={2} direction="vertical">
        <Stepper.Steps />
      </Stepper>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Stepper" />


      <ComponentProps component="Stepper.StepBack" />


      <ComponentProps component="Stepper.StepForward" />


      <ComponentProps component="Stepper.Steps" />
  - title: Visual
    content: >-
      ## Structure


      A stepper is a visual representation of a user’s progress through a set of steps, indicating how much the user has completed or how far they are from completing a task.


      ![Stepper overview](/admin/images/01-stepper-overview.png "Stepper overview")


      ### Anatony


      * Step identifier: Current status of a step

      * Step title (optional): Step name

      * Step sub-title (optional): Text that provides additional information about a step

      * Connection line: Connects steps and pagination arrows within the stepper

      * Nagination: Buttons enabling navigation to previous and forward steps


      ### Size


      ![Stepper vertical vs horizontal](/admin/images/02-stepper.png "Stepper vertical vs horizontal")


      ![Stepper size and margins](/admin/images/03-stepper.png "Stepper size and margins")


      | Property              | Token    | px   | rem  |

      | --------------------- | -------- | ---- | ---- |

      | Step identifier size  | size $3  | 32px | 2    |

      | Margin step-title     | space $4 | 16px | 1    |

      | Margin-bottom title   | space $3 | 12px | 0.75 |

      | Connection line width | \-       | 4px  | \-   |


      ### States


      ![Stepper states](/admin/images/04-stepper.png "Stepper states")


      ## Typography


      ![](/admin/images/05-stepper.png)


      | Element - status                         | Family | Weight | Size | Rem      | px  |

      | ---------------------------------------- | ------ | ------ | ---- | -------- | --- |

      | Number font                              | $body  | 600    | $md  | 1rem     | 16  |

      | Title font (completed, visited selected) | $body  | 600    | $md  | 1rem     | 16  |

      | Title font (everything else)             | $body  | 600    | $md  | 1rem     | 16  |

      | Subtitle font                            | $body  | 400    | $sm  | 0.875rem | 14  |


      ## Color


      We also use color to communicate the status of the steps.


      ![Stepper color states](/admin/images/06-stepper.png "Stepper color states")


      | Property & Element - Completed | Token    | Hex |

      | ------------------------------ | -------- | --- |

      | Circle bg - default, focus     | $blue800 | \#  |

      | Circle bg - hover & selected   | $blue900 | \#  |

      | Title font - default, focus    | $blue800 | \#  |

      | Title font - hover&selected    | $blue900 | \#  |

      | Subtitle font                  | $grey800 |     |


      .


      | Property & Element - Visited                 | Token     | Hex |

      | -------------------------------------------- | --------- | --- |

      | Circle bg - default, focus, selected         | $white    | \#  |

      | Circle bg - hover                            | $grey100  | \#  |

      | Border - default, focus                      | $grey600  | \#  |

      | Border - hover                               | $grey800  | \#  |

      | Border - selected                            | $blue900  | \#  |

      | Font (title, number) - default, hover, focus | $grey1000 | \#  |

      | Font (title, number) - selected              | $blue900  | \#  |

      | Font (subtitle)                              | $grey800  | \#  |


      .


      | Property & Element - Inactive  | Token    | Hex |

      | ------------------------------ | -------- | --- |

      | Circle bg                      | $grey200 | \#  |

      | Font (number, title, subtitle) | $grey600 | \#  |


      .


      | Property & Element - Success | Token     | Hex |

      | ---------------------------- | --------- | --- |

      | Circle bg                    | $success  | \#  |

      | Checkmark icon               | $white    | \#  |

      | Font (title)                 | $grey1000 | \#  |

      | Font (subtitle)              | $grey800  | \#  |


      .


      | Property & Element - Completed & Current | Token    | Hex |

      | ---------------------------------------- | -------- | --- |

      | Focus shadow. -  2px blue                | $blue800 | \#  |

      | Focus shadow - 2px white gap             | $white   | \#  |


      .
  - title: Usage
    content: >-
      ## Overview


      Component to indicate progress during more than one step processes.


      ![Stepper overview](/admin/images/07-stepper.png "Stepper overview")


      Steppers are flexible to be placed in different containers such as panels or dialog modals. Placement depends on each use case but the general guideline is for them to sit at the top of the container, taking full-width space and close to related information in the page.


      * Always center a stepper above content.

      * Steppers automatically distribute steps evenly within the horizontal space they are afforded.




      ## When to use


      Use in processes that involve more than one step and you want the user to see their progress and how much is left.


      ![Stepper when to use](/admin/images/08-stepper-when-to-use.png "Stepper when to use")


      Sign up proccess


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/admin/images/09-stepper-do-1.png","type":"do","description":"Use in proccesses that involve more than one step and you want the user to see their progress and how much is left."},{"image":"/admin/images/10-stepper-don-t-2.png","type":"dont","description":"Show error via color on the stepper. Use other components within the page."},{"image":"/admin/images/11-stepper-do-3.png","type":"do","description":"Adapt for mobile version "},{"image":"/admin/images/12-stepper-avoid-4.png","type":"avoid","description":"Using long or unclear copies"},{"image":"/admin/images/13-stepper-do-5.png","type":"do","description":"Show success with a microinteractions"}]} />
parent: 95SvEwV7BznSChttFanpW
uuid: 2dFVvw4YSnn_Ab-Z9-gLw
nestedSlug:
  - components
  - navigation
  - stepper
---
