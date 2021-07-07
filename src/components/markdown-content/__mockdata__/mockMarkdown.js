export const mockMarkdown = `
---
## Headings
---

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

---

## Emphasis

---

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~This is strikethrough text~~

---

## Blockquotes

---

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

---

## Lists

---

### Unordered

- Create a list by starting a line with \`+\`, \`-\`, or \`\*\`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as \`1.\`

---

## Code

---

### Inline code

This is inline \`code\`

### Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

### Block code "fences"

\`\`\`
Sample text here...
\`\`\`

---

## Links

---

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

---

## Images

---

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')"
`
