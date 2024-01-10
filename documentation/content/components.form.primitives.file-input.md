---
slug: file-input
title: File Input
links:
  viewSource: components/file-input
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      FileInput is the lowest-level input component for the file type


      `FileInput` is a specialised input that allows file uploads.


      <CodeBlock live={true} preview={true} code={`<FileInput>Upload</FileInput>`} language={"tsx"} />


      ## Required props


      The required props `FileInput` needs are: `onSelect` and `children`.


      `onSelect` is a callback that accepts the file selection (as a `FileList`), when the user interacts with the file browser interface. The file selection can then be used by the parent, for example: to be passed in a `POST` API call to be saved.


      **Note:** The action of uploading the file to a backend is the parent's responsibility.


      `children` is used to add text to the visible button.


      ## Multiple files


      The input can also accept multiple files at once, via the `multiple` prop.


      <CodeBlock live={true} preview={true} code={`<FileInput onSelect={(fileSelection) => console.log(fileSelection)} multiple>
        Upload
      </FileInput>`} language={"tsx"} />


      ## Restricting the MIME type


      The `accept` prop makes the input filter out unwanted file types and prevent the user from selecting them.


      <CodeBlock live={true} preview={true} code={`<FileInput
        onSelect={(fileSelection) => console.log(fileSelection)}
        accept="application/pdf"
      >
        Upload
      </FileInput>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="FileInput" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: xCCHe_ZmprcpoIz0526gr
nestedSlug:
  - components
  - form
  - primitives
  - file-input
---
