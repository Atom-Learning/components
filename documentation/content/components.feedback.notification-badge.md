---
slug: notification-badge
title: Notification Badge
links:
  viewSource: components/notification-badge
  showReportAnIssue: true
tabs:
  - content: >-
      The NotificationBadge component is a lightweight wrapper for content such
      as ActionIcons, but can be wrapped around any block-level element.


      It displays a badge in top right of the content it is wrapping, which displays a `value` passed in as a prop. This could be, for example, the number of filters selected on a select filters badge.


      <CodeBlock live={true} preview={true} code={`<NotificationBadge value={3}>
        <ActionIcon appearance="outline" size="lg" isRounded>
          <Icon is={Controls} />
        </ActionIcon>
      </NotificationBadge>`} language={"tsx"} />


      ## Value


      Whilst you would normally want to display a number, the `value` prop also supports strings. Here are some usage examples:


      <CodeBlock live={true} preview={true} code={`<Stack gap={3}>
        <NotificationBadge value={88}>
          <ActionIcon appearance="outline" size="lg">
            <Icon is={Controls} />
          </ActionIcon>
        </NotificationBadge>
        <NotificationBadge value="hi">
          <Button theme="warning">I'm a button!</Button>
        </NotificationBadge>
      </Stack>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="NotificationBadge" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - notification-badge
---
