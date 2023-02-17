---
slug: chip-toggle-group
title: Chip Toggle Group
links:
  viewSource: components/chip-toggle-group
  showReportAnIssue: true
tabs:
  - content: >-
      Combines the Toggle Group radix component with the Chip primitive
      styling


      Used as a method for filtering a collection of data. Acts like multiple or single selection. Each chip toggles between selected and unselected. When selected, a checkmark appears as the leading icon.


      <CodeBlock live={true} preview={true} code={`<ChipToggleGroup
        type="multiple"
        defaultValue={['a', 'b']}
        onValueChange={(value) => {
          console.log(value)
        }}
      >
        <ChipToggleGroup.Item value="a">A</ChipToggleGroup.Item>
        <ChipToggleGroup.Item value="b" disabled>
          B
        </ChipToggleGroup.Item>
        <ChipToggleGroup.Item value="c">C</ChipToggleGroup.Item>
        <ChipToggleGroup.Item value="d" disabled>
          D
        </ChipToggleGroup.Item>
      </ChipToggleGroup>`} language={"tsx"} />

      ## API Reference

      <ComponentProps component="ChipToggleGroup" />

      <ComponentProps component="ChipToggleGroup.Item" />
    title: Main
parent: HGItoEG3XVs9DpOLugTot
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - chip-toggle-group
---
