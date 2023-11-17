---
slug: date-formatting
title: Date formatting
tabs:
  - title: Main
    content: >-
      We have three ‘standard’ ways of formatting dates. You can use these on
      any `dayjs` object (for example `dayjs().formatShort()` ).


      Try to always use one of these utils to format dates in the app, and only use other ways of formatting when there is a specific use case that these three utils don’t cover.




      ## `formatRelative`


      This displays either `Yesterday`, `Today`, or `Tomorrow`. For all other dates, it will format the same as `formatLong`.


      **Use this when:**


      * There is an action required by the user, relevant to this date. For example a homework due date.

      * There is enough space in the UI.




      ## `formatLong`


      This formats the date as `Friday 17th November`.


      **Use this when:**


      * The day of the week can help the user find the correct information. For example, when displaying mock tests in a score card.

      * There is enough space in the UI.




      ## `formatShort`


      This formats the date as `17/11/2023`.


      **Use this when:**


      * The day of the week is not relevant, for example when displaying a date of birth or a payment date.

      * There is *not* enough space in the UI to use `formatRelative` or `formatLong`.
parent: 5265ee0d-991b-4af8-bcc3-1533e8c908dd
uuid: 1e9f77e1-9002-46dc-9bf4-08ae04e29d1b
---
