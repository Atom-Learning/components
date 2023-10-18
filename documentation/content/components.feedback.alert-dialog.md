---
slug: alert-dialog
title: Alert Dialog
links:
  viewSource: components/alert-dialog
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      A modal dialog that interrupts the user with important content and
      expects a response


      `AlertDialog` exports a number of components that can be composed together to create a modal pop up that expects a response from the user.


      `AlertDialog` also exports a custom hook `useAlert`, that can be used to dynamically render an alert based on some content and a callback. `showAlert` accepts a few props allowing the `AlertDialog` to be customised in a number of ways; you can see an example of this below.


      <CodeBlock live={true} preview={true} noInline code={`const MyComponent = () =>{
        const { showAlert } = useAlert()

        const handleClick = () => {
          showAlert({
            id: 'my-alert',
            theme: 'warning',
            size: 'md',
            title: 'Are you sure you want to delete this school?',
            description: 'This will remove all restrictions from your school',
            confirmActionText: 'Delete school',
            confirmButtonTheme: 'warning',
            confirmButtonAppearance: 'solid',
            cancelActionText: 'Cancel',
            cancelButtonTheme: 'primary',
            cancelButtonAppearance: 'outline',
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
