---
slug: avatar
title: Avatar
links:
  viewSource: components/avatar
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      The `Avatar` component can be used to show a visual representation of a
      user or entity. It helps to quickly identify users or objects. An image,
      the initial of the name or a placeholder icon can be used.


      <CodeBlock live={true} preview={true} code={`<Flex gap="3">
        <Avatar name="Alice Smith">
          <Avatar.Image
            alt="Alice Smith's avatar"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=100&q=80"
          />
        </Avatar>
         <Avatar name="Alice Smith">
          <Avatar.Initial />
        </Avatar>
        <Avatar>
          <Avatar.Placeholder />
        </Avatar>
      </Flex>`} language={"tsx"} />


      ## Fallback behaviour


      When an image src is missing it will fallback to the initial of the name.


      <CodeBlock live={true} preview={true} code={`<Avatar name="Alice Smith">
        <Avatar.Image alt="" src="" />
      </Avatar>`} language={"tsx"} />


      When the name is also missing it will fallback to the placeholder icon.


      <CodeBlock live={true} preview={true} code={`<Flex gap="3">
        <Avatar name="">
          <Avatar.Image alt="Alice Smith's avatar" src="" />
        </Avatar>

        <Avatar name="">
          <Avatar.Initial />
        </Avatar>
      </Flex>`} language={"tsx"} />


      ## onClick


      An `onClick` prop can be used, this will make the component focusable using the keyboard, as it uses a `<button>` under the hood.


      <CodeBlock live={true} preview={true} code={`<Avatar name="Alice Smith" onClick={() => alert('Thanks for clicking')}>
        <Avatar.Initial />
      </Avatar>`} language={"tsx"} />


      When disabled, the onClick won't work.


      <CodeBlock live={true} preview={true} code={`<Avatar
        name="Alice Smith"
        disabled
        onClick={() => alert('This message will not appear')}
      >
        <Avatar.Initial />
      </Avatar>`} language={"tsx"} />


      ## Size


      The available `size`s for this component are: `xs`, `sm`, `md`, `lg`, `xl` and `xxl`. The default is `lg`.


      <CodeBlock live={true} preview={true} code={`  <Avatar size="xs" name="Alice Smith">
          <Avatar.Image
            alt="Alice Smith's avatar"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=100&q=80"
          />
        </Avatar>`} language={"tsx"} />

      ## API Reference


      <ComponentProps component="Avatar" />


      <ComponentProps component="Avatar.Image" />


      <ComponentProps component="Avatar.Initial" />


      <ComponentProps component="Avatar.Placeholder" />


      <ComponentProps component="Avatar.Icon" />
  - title: Visual
    content: >-
      ## Structure


      Avatars are used to show a thumbnail representation of an individual or entity in the interface.


      Avatars can be interactive, in which case has interactive states (hover, focus, etc), or read only, with no interactive states.


      ![avatar structure](/assets/images/avatar-01-structure.png "avatar structure")


      For avatars representing the user, the user picture is displayed. If there is an error loading the src of the avatar, there are 2 fallbacks:


      * If there's a name prop, we use it to generate the initials

      * If there's no name prop, we use a placeholder image.


      ### Size


      ![avatar size](/assets/images/avatar-02-size.png "avatar size")


      | Property       | xxl       | xl        | lg        | md        | sm        | xs        |

      | -------------- | --------- | --------- | --------- | --------- | --------- | --------- |

      | container size | $7 96px   | $6 64px   | $5 48px   | $4 40px   | $3 32px   | $2 24px   |

      | Icon size      | "lg" 32px | "lg" 32px | "md" 24px | "md" 24px | "sm" 16px | "sm" 16px |


      | Property                       | Token       | Pixel |

      | ------------------------------ | ----------- | ----- |

      | Border stroke                  | not-defined | 1px   |

      | Border stroke: selected, focus | not-defined | 2px   |


      ### Avatar groups


      In some cases, you might need to stack avatars as a group. To limit the amount of avatars to show, use the max prop. It'll truncate the avatars and show a "+X" label (where X is the remaining avatars).


      ![avatar groups](/assets/images/avatar-03-groups.png "avatar groups")


      | Property         | xxl     | xl      | lg      | md      | sm      | xs      |

      | ---------------- | ------- | ------- | ------- | ------- | ------- | ------- |

      | Distance between | $9 64px | $7 40px | $6 32px | $5 24px | $4 16px | $3 12px |


      ## Typography


      ![avatar typography](/assets/images/avatar-04-typography.png "avatar typography")


      | Font size | px  | weight   | size |

      | --------- | --- | -------- | ---- |

      | xs        | 12  | 0.750rem | $xs  |

      | sm, md    | 14  | 0.875    | $sm  |

      | lg        | 16  | 1        | $md  |

      | xl, xxl   | 21  | 1.3125   | $lg  |


      ## Color


      ![avatar color](/assets/images/avatar-05-color.png "avatar color")


      | Property, element - state                        | Token     | Hex      |

      | ------------------------------------------------ | --------- | -------- |

      | Bg color - default, focus, disabled              | $white    | \#ffffff |

      | Bg color - hover                                 | $grey100  | \#       |

      | Bg color - selected/pressed                      | $grey200  | \#       |

      | Border-color - default, focus, disabled          | $grey200  | \#       |

      | Border-color - hover                             | $grey800  | \#       |

      | Border-color - selected/pressed                  | $blue800  | \#       |

      | Icon-color/font-color - default, focus, disabled | $grey800  | \#       |

      | Icon-color/font-color - hover, selected          | $grey1000 | \#       |
  - title: Usage
    content: >-
      ## Overview


      An avatar is a component that visually represents a user or entity. It helps to identify users or objects quickly.


      ![avatar overview](/assets/images/avatar-01-overview.png "avatar overview")


      For avatars representing the user, the user picture is displayed. If there is an error loading the src of the avatar, there are 2 fallbacks:


      * If there's a name prop, we use it to generate the initials

      * If there's no name prop, we use a placeholder image.


      ### Anatomy


      ![avatar anatomy](/assets/images/avatar-02-anatomy.png "avatar anatomy")


      **Image**


      A circular container with grey border that wraps an image of the user.


      **Initial**


      The user's name initial appear in the component's center with white background and border.


      **Icon**


      White background and border with an icon representing users or entities.


      ### Behaviour


      In addition to providing access to a user's profile, the Avatar can be used as a way to link a user to a specific set of data like for example an overlay menu.


      ![avatar behaviour](/assets/images/avatar-03-behaviour.png "avatar behaviour")


      ### Accessibility


      Whenever you use an image to communicate a concept, it’s important to use descriptive alt text for accessibility because it allows screen readers to describe what’s in the image to people who may not be able to see it.


      For avatars, we recommend using a format that describes what will show in the image:


      * alt="Person’s name" if the avatar represents a person.

      * alt="Product’s name" if the avatar represents a product.

      * alt="" if the name of the person/product appears next to the avatar as text.


      ### Usage


      To provide context, avatars are often combined with status. Users usually upload their own images; otherwise, their initials appear.\

      Use:


      * to display an avatar for a user

      * profile images expand to 100% of their container width by default

      * according to accessibility, it is important to remember to use descriptive alt text for avatars,

      * automatically adjust avatar sizes based on the size of the screen circular avatars for quick identification

      * a status indicator to indicate the presence for a single user

      * avatars with badges to show reminders and notifications

      * tap on the avatar to reveal its details on mobile.


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/avatar-dos-and-donts-01.svg","type":"do","description":"Use avatars with circular shapes"},{"image":"/assets/images/avatar-dos-and-donts-02.svg","type":"avoid","description":"To use avatars with square shapes"},{"image":"/assets/images/avatar-dos-and-donts-03.svg","type":"do","description":"Avatars can have different types; image, letter, icon"},{"image":"/assets/images/avatar-dos-and-donts-04.svg","description":"Use shadows or other decoration","type":"dont"},{"image":"/assets/images/avatar-dos-and-donts-05.svg","type":"do","description":"Use Avatars to navigate users to user profiles, or to associate users with a set of information."}]} />
parent: XPLFvowY8sBRhG2IUn5Zk
uuid: 1tFvJEHLzSO0EKyC-RGIM
nestedSlug:
  - components
  - media
  - avatar
---
