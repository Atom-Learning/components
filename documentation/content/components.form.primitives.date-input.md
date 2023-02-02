---
slug: date-input
title: Date Input
links:
  viewSource: components/date-input
  showReportAnIssue: true
tabs:
  - content: >-
      A form component that provides a styled date selector.


      Date Inputs should be accompanied by labels, so rather than using `DateInput` directly in a UI, it’s normally best to the `DateField` component, which combines a `DateInput` with a `Label` and displays validation errors. Alternatively, use this `DateInput` component to compose other field components with more specific requirements.


      `DateInput` is composed from [Dayzed](https://github.com/deseretdigital/dayzed), so further reading on the API can be found there. Some options from Dayzed are set by default in order to provide a uniform experience. For example, the prop `showOutsideDays`, which shows days outside the current calendar month that would appear on the grid, defaults to true in order to avoid extra whitespace.


      <CodeBlock live={true} preview={true} code={`<DateInput />`} language={"tsx"} />


      ## Initial Date


      The `DateInput` component allows passing of an initial date, which will be selected by default. If you wish this to be the current date, you can use `new Date()` as per the preview below. Strings are also accepted and default to the `DD/MM/YYYY` format. It is recommended to use standard constructors for the date object as per MDN specifications.


      <CodeBlock live={true} preview={true} code={`<DateInput initialDate={new Date()} />`} language={"tsx"} />


      ## Date Format


      Any combination of date formats can be passed in as a string, such as `DD/MM/YY` or `YYYY/MM/DD`. The default is `DD/MM/YYYY`. A full list of possible formats can be found [here](https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens).


      <CodeBlock live={true} preview={true} code={`<DateInput dateFormat="YYYY/MM/DD" />`} language={"tsx"} />


      ## Dayzed customisation


      ### First Day of Week


      The calendar that is rendered by this component can have its first day of the week customised for different locales. The default is 1 (Monday), but for locales such as the US, pass in `firstDayOfWeek={0}` to set it to Sunday.


      <CodeBlock live={true} preview={true} code={`<DateInput firstDayOfWeek={0} />

      `} language={"undefined"} />


      ## Translations


      The weekday and month names can be changed to anything you wish by passing in an array of strings to `weekdayNames` and `monthNames`.


      > NOTE: It is very important that you keep these labels in the right order. Weekdays must be `Sun -> Sat` and months must be `Jan -> Dec`.


      <CodeBlock live={true} preview={true} code={`<DateInput
        weekdayNames={['D', 'L', 'M', 'X', 'J', 'V', 'S']}
        monthNames={[
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ]}
      />`} language={"tsx"} />


      You can also translate the internal labels for accessibility purposes. The `labels` prop accepts an object containing three keys, `open`, `next`, and `previous`. These should all be strings.


      <CodeBlock live={true} preview={true} code={`<DateInput
        labels={{
          open: 'Open label',
          next: 'Next month label',
          previous: 'Previous month label'
        }}
      />`} language={"tsx"} />


      If you need even finer control over what happens with the selected date, you can pass `onChange`, which takes a `Date` type as input.


      <CodeBlock code={`<DateInput onChange={(date) => doSomethingWith(date)} />`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="DateInput" />
    title: Main
parent: E7irFEo7JeV-MtxTony9G
uuid: bmVNXH8LPoqmZIeXrYe7J
nestedSlug:
  - components
  - form
  - primitives
  - date-input
---
