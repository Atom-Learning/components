---
slug: navigation-menu-vertical
title: NavigationMenuVertical
links:
  viewSource: components/navigation-menu-vertical
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      The `NavigationMenuVertical` component is _almost_ a vertical version
      of the `NavigationMenu` component. It is meant to be used the same way as
      `NavigationMenu` - but in sidedrawers and similar narrow panels where the
      horizontal navigation wouldn't work. 


      Functionality is a mix between the [`NavigationMenu`](https://www.radix-ui.com/docs/primitives/components/navigation-menu) and the [`Collapsible`](https://www.radix-ui.com/docs/primitives/components/collapsible) radix components.


      From `NavigationMenu` this allows for marking links as `active`, and adds navigation-relevant accessibility information.


      From `Collapsible` the `NavigationMenuVertical.Accordion` allows for: `defaultOpen` (uncontrolled), `open` (controlled) and `onOpenChange` props. 


      *Note!*: Unfortunately `value`, `defaultValue`, `onValueChange` props which are usually available on `NavigationMenu` will have no effect (replaced directly with the `Collapsible` props on the `Accordion` as per above, instead). This was necessary as `NavigationMenu` (radix) itself was buggy when attempting to use vertically. Causing both issues with nested open Accordions, as well as buggy tabbing behaviour which was not acceptable. Provided radix solves this, this component may be modified.


      <CodeBlock live={true} preview={true} code={`<Box css={{width: 300}}>
        <NavigationMenuVertical>
            <NavigationMenuVertical.Link active onClick={()=>{console.log(1)}}>One</NavigationMenuVertical.Link>    
            <NavigationMenuVertical.Link href="google.com">Two</NavigationMenuVertical.Link>    
            <NavigationMenuVertical.Accordion>
              <NavigationMenuVertical.AccordionTrigger>Trigger 1</NavigationMenuVertical.AccordionTrigger>
              <NavigationMenuVertical.AccordionContent>
                <NavigationMenuVertical.Link onClick={()=>{console.log(1)}}>Nested: One</NavigationMenuVertical.Link>
                <NavigationMenuVertical.Link onClick={()=>{console.log(2)}}>Nested: Two</NavigationMenuVertical.Link>
              </NavigationMenuVertical.AccordionContent>
            </NavigationMenuVertical.Accordion>
            <NavigationMenuVertical.Accordion defaultOpen={true}>
              <NavigationMenuVertical.AccordionTrigger>Trigger 2</NavigationMenuVertical.AccordionTrigger>
              <NavigationMenuVertical.AccordionContent>
                <NavigationMenuVertical.Link onClick={()=>{console.log(3)}}>Nested: Three</NavigationMenuVertical.Link>
                <NavigationMenuVertical.Link onClick={()=>{console.log(4)}}>Nested: Four</NavigationMenuVertical.Link>
              </NavigationMenuVertical.AccordionContent>
            </NavigationMenuVertical.Accordion>
            <NavigationMenuVertical.Accordion value={4}>
            <NavigationMenuVertical.AccordionTrigger>Trigger With Submenu</NavigationMenuVertical.AccordionTrigger>
            <NavigationMenuVertical.AccordionContent>
                <NavigationMenuVertical.Link href="#1">Nested: #1</NavigationMenuVertical.Link>
                <NavigationMenuVertical.Link href="#2">Nested: #2</NavigationMenuVertical.Link>    
                <NavigationMenuVertical.Link href="#3">Nested: #3</NavigationMenuVertical.Link>    
                <NavigationMenuVertical.Accordion value='nested-trigger-1'>
                  <NavigationMenuVertical.AccordionTrigger >Nested</NavigationMenuVertical.AccordionTrigger>
                  <NavigationMenuVertical.AccordionContent>
                    <NavigationMenuVertical.Link href="#4">Nested: #4</NavigationMenuVertical.Link>
                    <NavigationMenuVertical.Accordion value='nested-trigger-2'>
                    <NavigationMenuVertical.AccordionTrigger>Nested Nested</NavigationMenuVertical.AccordionTrigger>
                    <NavigationMenuVertical.AccordionContent>
                      <NavigationMenuVertical.Link href="#5">Nested: #5</NavigationMenuVertical.Link>
                    </NavigationMenuVertical.AccordionContent>
                  </NavigationMenuVertical.Accordion>
                </NavigationMenuVertical.AccordionContent>
              </NavigationMenuVertical.Accordion>
            </NavigationMenuVertical.AccordionContent>
          </NavigationMenuVertical.Accordion>
        </NavigationMenuVertical>
      </Box>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="NavigationMenuVertical" />


      <ComponentProps component="NavigationMenuVertical.Accordion" />


      <ComponentProps component="NavigationMenuVertical.AccordionContent" />


      <ComponentProps component="NavigationMenuVertical.AccordionTrigger" />


      <ComponentProps component="NavigationMenuVertical.Link" />


      <ComponentProps component="NavigationMenuVertical.Item" />


      <ComponentProps component="NavigationMenuVertical.ItemContent" />


      <ComponentProps component="NavigationMenuVertical.Icon" />


      <ComponentProps component="NavigationMenuVertical.Text" />
parent: 95SvEwV7BznSChttFanpW
uuid: 96eOG7OAjxOpfsmMD-rCr
nestedSlug:
  - components
  - navigation
  - navigation-menu-vertical
---
