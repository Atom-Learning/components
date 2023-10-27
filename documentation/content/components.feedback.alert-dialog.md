---
slug: alert-dialog
title: Alert Dialog
links:
  viewSource: components/alert-dialog
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      #### Related components


      [Dialog](https://atomlearning.design/components/surfaces/dialog)


      <br />


      A modal dialog that interrupts the user with important content and expects a response


      `AlertDialog` exports a number of components that can be composed together to create a modal pop up that expects a response from the user.


      `AlertDialog` also exports a custom hook `useAlert`, that can be used to dynamically render an alert based on some content and a callback. `showAlert` accepts a `theme` and `size` prop which can be used to customise the `AlertDialog`.


      <CodeBlock live={true} preview={true} code={`const MyComponent = () =>{
        const { showAlert } = useAlert()

        const handleClick = () => {
          showAlert({
            id: 'my-alert',
            theme: 'warning',
            size: 'md',
            title: 'Are you sure you want to delete this school?',
            description: 'This will remove all restrictions from your school',
            confirmActionText: 'Delete school',
            cancelActionText: 'No',
            onAction: (result) => {
              if (result) console.log('Confirmation')
            }
          })
        }

        return <Button onClick={handleClick}>Delete school</Button>
      }

      const App = () => (
        <AlertProvider>
          <MyComponent />
        </AlertProvider>
      )

      render(<App />)`} language={"tsx"} />


      It is recommended to use the `confirmActionText`and `cancelActionText`options to specify button labels in the alert dialog. This approach ensures a consistent look and feel while simplifying the setup process. However, if you require more granular control, you can opt for the custom button elements using the `confirmElement` and `cancelElement` options:


      <CodeBlock live={true} preview={true} code={`const MyComponent = () =>{
        const { showAlert } = useAlert()

        const handleClick = () => {
          showAlert({
            id: 'my-alert',
            theme: 'danger',
            size: 'lg',
            title: 'Delete student',
            description: 'You are going to delete this student. Are you sure?',
            confirmElement: (
              <Button theme="danger" size="sm" onClick={() => console.log("Delete user")}>
                Yes, delete them please
              </Button>
            ),
            cancelElement: (
              <Button appearance="outline" size="sm" onClick={() => console.log("Don't delete user")}>
                Nah, don't do that
              </Button>
            )
          })
        }

        return <Button onClick={handleClick}>Delete student</Button>
      }


      const App = () => (
        <AlertProvider>
          <MyComponent />
        </AlertProvider>
      )

      render(<App />)`} language={"tsx"} />


      ## Accessibility


      Consider pairing the `onAction` function with a method that can announce a message to the user. In the above example a message of "School has been deleted" would be appropriate for screen reader users. [Radix UI Announce](https://radix-ui.com/primitives/docs/utilities/announce) would be a good candidate for this.


      ## API Reference


      <ComponentProps component="AlertDialog" />


      <ComponentProps component="AlertDialog.Description" />


      <ComponentProps component="AlertDialog.Title" />


      <ComponentProps component="AlertDialog.Action" />


      <ComponentProps component="AlertDialog.Cancel" />


      <ComponentProps component="AlertDialog.Content" />


      <ComponentProps component="AlertDialog.Trigger" />
parent: HGItoEG3XVs9DpOLugTot
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - feedback
  - alert-dialog
---
