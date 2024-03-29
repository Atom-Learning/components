---
slug: toast
title: Toast
links:
  viewSource: components/progress-bar
  showReportAnIssue: true
tabs:
  - content: >-
      A toast notification that gives non-intrusive feedback to the user and
      times out automatically.


      `Toast` has 2 exports, the `ToastProvider` component which is the container for all the notifications and the `toast` function that allows triggering the notification. It sets all the default behaviour, like pausing on hover and positioning and styles the different types of notification (`blank` (default), `error` and `success`).


      This is the preferred user feedback way as it is not intrusive and it simply provides some state information to the user without waiting for feedback, ie: the information was saved. When feedback is required consider using the `AlertDialog` component.


      <CodeBlock live={true} preview={true} code={`<ToastProvider>
        <Button onClick={() => toast.success('This is the toast message')}>
          Click for toast
        </Button>
      </ToastProvider>`} language={"tsx"} />


      This component can render a string message by default. However, it can be overriden to show more complex component structure [Render more than a string](https://react-hot-toast.com/docs/toast). For more information on other configuration options and props, please read about the underlying behaviour at [react-hot-toast](https://react-hot-toast.com/).


      We can create a custom toast UI by passing in a component to the `toast` function. The Toast component used by the ToastProvider is exported for easy reuse.

      <CodeBlock 
        live={true} 
        preview={true} 
        language={"tsx"}
        code={
          `<ToastProvider>
             <Button
                onClick={() => toast(
                  <Toast>
                    <Toast.Icon is={Info} />
                    <Text>This is my custom toast</Text>
                    <Toast.Close onDismiss={() => alert('Toast has been dismissed.')} />
                  </Toast>
                )
              }
              >
                Click for custom toast
              </Button>
            </ToastProvider>`
          }
        />

      ## API Reference


      <ComponentProps component="ToastProvider" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - toast
---
