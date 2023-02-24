---
slug: chip-dismissible-group
title: Chip Dismissible Group
links:
  viewSource: components/chip-dismissible-group
  showReportAnIssue: true
tabs:
  - content: >-
      Combines the DismissibleGroup logic together with the Chip primitive
      styling


      Used to visualise groups of dismissible information, in fields such as an entity or different attributes. Can also be used to represent removable filtering criteria.


      <CodeBlock live={true} preview={true} code={`<ChipDismissibleGroup
        onDismiss={(value) => {
          alert(\`dismiss $\{value\}\`)
        }}
      >
        <ChipDismissibleGroup.Item value="a" dismissActionLabel="Dismiss 'A'">
          <Icon is={Person} />
          Dismissible
        </ChipDismissibleGroup.Item>
        <ChipDismissibleGroup.Item value="b" dismissActionLabel="Dismiss 'B'">
          <Icon is={Person} />
          Dismissible
        </ChipDismissibleGroup.Item>
        <ChipDismissibleGroup.Item
          value="c"
          dismissActionLabel="Dismiss 'C'"
          disabled
        >
          <Icon is={Person} />
          Dismissible
        </ChipDismissibleGroup.Item>
      </ChipDismissibleGroup>`} language={"tsx"} />

      ## API Reference

      <ComponentProps component="ChipDismissibleGroup" />

      <ComponentProps component="ChipDismissibleGroup.Item" />
    title: Main
parent: HGItoEG3XVs9DpOLugTot
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - chip-dismissible-group
---
