---
slug: keyboard-shortcut
title: Keyboard Shortcut
links:
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      Utility component to allow for consistently handling keyDown user
      events to perform actions.


      A `KeyboardShortcut.Indicator` is also exported. This is a simple styled `<Text as="kbd" />` element but the goal is to maintain consistency across uses.


      <CodeBlock live={true} preview={true} code={`<KeyboardShortcut css={{ width: '100%', maxWidth: '100%', background: '$grey700', color: 'white', p: '$4' }} tabIndex="0" config={[
          {
            shortcut: { key: 's', metaKey: true },
            action: ({ event }) => {
              event.stopPropagation()
              event.preventDefault()
              alert('You tried to save!')
            }
          },
          {
            shortcut: { key: 'a' },
            action: ({event}) => {
              event.stopPropagation()
              alert('A')
            }
          }
        ]}
        >
        <Text>Click on this area, then press <KeyboardShortcut.Indicator>⌘ + S</KeyboardShortcut.Indicator> to save </Text>
      </KeyboardShortcut>`} language={"tsx"} />


      ## Config


      The `KeyboardShortcut` must be given a config. The config is an array of objects including a `shortcut`, which is a partial `KeyboardEvent` to match on and an `action`, which is the function to call when a `KeyboardEvent` is matched.


      <CodeBlock live={true} preview={true} code={`[
        {
          shortcut: { key: 'a', metaKey: true },
          action: () => setValueM(toggleFromArray("1", valueM))
        },
        {
          shortcut: { key: '1' },
          action: () => setValueM(toggleFromArray("1", valueM))
        },
        {
          shortcut: { key: 'b', metaKey: true },
          action: () => setValueM(toggleFromArray("2", valueM))
        },
        {
          shortcut: { key: '2' },
          action: () => setValueM(toggleFromArray("2", valueM))
        }
      ]`} language={"ts"} />


      ## Targeting events on the window


      A `KeyboardShortcut` is a container so by default it listens for key events within itself. To listen on events on the window, use the `targetWindow` prop. 


      <CodeBlock live={true} preview={true} code={`<KeyboardShortcut 

      targetWindow tabIndex="0" config={[
          {
            shortcut: { key: 's', metaKey: true },
            action: ({ event }) => {
              event.preventDefault()
              alert('You tried to save (window)!')
            }
          },
          {
            shortcut: { key: 'a' },
            action: () => {
              alert('A (window)')
            }
          }
        ]}
        >
        <Text>Press <KeyboardShortcut.Indicator>⌘ + S</KeyboardShortcut.Indicator> to save (anywhere on the window)</Text> 





        
      </KeyboardShortcut>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="KeyboardShortcut" />


      <ComponentProps component="KeyboardShortcut.Indicator" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: b7a97ff6-417a-4258-bf43-8cfa5362a81f
nestedSlug:
  - components
  - keyboard-shortcut
---
