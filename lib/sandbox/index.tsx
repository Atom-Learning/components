import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { ArrowRight } from '@atom-learning/icons'
import { Root, Trigger, Content } from '@radix-ui/react-collapsible'

import { styled } from '~/stitches'
const StyledContent = styled(Content, {
  '&[data-state="closed"]': { display: 'none' }
})


import { Box, Flex, globalCss, CheckboxGroup, CheckboxTree, InlineFieldWrapper, ActionIcon, Icon, Tooltip, Tree, Divider } from '../src'
import { TooltipProvider } from '@radix-ui/react-tooltip'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const App = () => (
  <TooltipProvider>
    <Flex
      css={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Box css={{ width: 300 }}>
        <Tree>
          <Tree.Item>One</Tree.Item>
          <Tree.Item>Two</Tree.Item>
          <Tree.Collapsible>
            <Tree.CollapsibleTrigger>Trigger 1</Tree.CollapsibleTrigger>
            <Tree.CollapsibleContent>
              <Tree.Item>Nested: One</Tree.Item>
              <Tree.Item>Nested: Two</Tree.Item>
            </Tree.CollapsibleContent>
          </Tree.Collapsible>
          <Tree.Collapsible defaultOpen={true}>
            <Tree.CollapsibleTrigger>Trigger 2</Tree.CollapsibleTrigger>
            <Tree.CollapsibleContent>
              <Tree.Item>Nested: Three</Tree.Item>
              <Tree.Item>Nested: Four</Tree.Item>
            </Tree.CollapsibleContent>
          </Tree.Collapsible>
          <Tree.Collapsible>
            <Tree.CollapsibleTrigger>Trigger With Submenu</Tree.CollapsibleTrigger>
            <Tree.CollapsibleContent>
              <Tree.Item>Nested: #1</Tree.Item>
              <Tree.Item>Nested: #2</Tree.Item>
              <Tree.Item>Nested: #3</Tree.Item>
              <Tree.Collapsible>
                <Tree.CollapsibleTrigger >Nested</Tree.CollapsibleTrigger>
                <Tree.CollapsibleContent>
                  <Tree.Item>Nested: #4</Tree.Item>
                  <Tree.Collapsible>
                    <Tree.CollapsibleTrigger>Nested Nested</Tree.CollapsibleTrigger>
                    <Tree.CollapsibleContent>
                      <Tree.Item>Nested: #5</Tree.Item>
                    </Tree.CollapsibleContent>
                  </Tree.Collapsible>
                </Tree.CollapsibleContent>
              </Tree.Collapsible>
            </Tree.CollapsibleContent>
          </Tree.Collapsible>
        </Tree>
      </Box>
      <Divider />
      <Box css={{ width: 300 }}>
        <CheckboxTree>
          <CheckboxTree.Item value={1}>One</CheckboxTree.Item>
          <CheckboxTree.Item value={2}>Two</CheckboxTree.Item>
          <CheckboxTree.Collapsible>
            <CheckboxTree.CollapsibleTrigger>Trigger 1</CheckboxTree.CollapsibleTrigger>
            <CheckboxTree.CollapsibleContent>
              <CheckboxTree.Item value={3}>Nested: One</CheckboxTree.Item>
              <CheckboxTree.Item value={4}>Nested: Two</CheckboxTree.Item>
            </CheckboxTree.CollapsibleContent>
          </CheckboxTree.Collapsible>
          <CheckboxTree.Collapsible defaultOpen={true}>
            <CheckboxTree.CollapsibleTrigger>Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2</CheckboxTree.CollapsibleTrigger>
            <CheckboxTree.CollapsibleContent>
              <CheckboxTree.Item value={5}>Nested: Three</CheckboxTree.Item>
              <CheckboxTree.Item value={6}>Nested: Four</CheckboxTree.Item>
            </CheckboxTree.CollapsibleContent>
          </CheckboxTree.Collapsible>
          <CheckboxTree.Collapsible>
            <CheckboxTree.CollapsibleTrigger>Trigger With Submenu</CheckboxTree.CollapsibleTrigger>
            <CheckboxTree.CollapsibleContent>
              <CheckboxTree.Item value={7}>Nested: #1</CheckboxTree.Item>
              <CheckboxTree.Item value={8}>Nested: #2</CheckboxTree.Item>
              <CheckboxTree.Item value={9}>Nested: #3</CheckboxTree.Item>
              <CheckboxTree.Collapsible>
                <CheckboxTree.CollapsibleTrigger >Nested</CheckboxTree.CollapsibleTrigger>
                <CheckboxTree.CollapsibleContent>
                  <CheckboxTree.Item value={10}>Nested: #4</CheckboxTree.Item>
                  <CheckboxTree.Collapsible>
                    <CheckboxTree.CollapsibleTrigger>Nested Nested</CheckboxTree.CollapsibleTrigger>
                    <CheckboxTree.CollapsibleContent>
                      <CheckboxTree.Item value={11}>Nested: #5</CheckboxTree.Item>
                    </CheckboxTree.CollapsibleContent>
                  </CheckboxTree.Collapsible>
                </CheckboxTree.CollapsibleContent>
              </CheckboxTree.Collapsible>
            </CheckboxTree.CollapsibleContent>
          </CheckboxTree.Collapsible>
        </CheckboxTree>
      </Box>
      <Divider />
      <CheckboxGroup>
        <InlineFieldWrapper label='All'><CheckboxGroup.AllItem /></InlineFieldWrapper>
        <InlineFieldWrapper label='1'><CheckboxGroup.Item value={1} /></InlineFieldWrapper>
        <InlineFieldWrapper label='2'><CheckboxGroup.Item value={2} /></InlineFieldWrapper>
        <InlineFieldWrapper label='3'><CheckboxGroup.Item value={3} /></InlineFieldWrapper>
        <Root>
          <CheckboxGroup>
            <Trigger asChild><ActionIcon hasTooltip={false}><Icon is={ArrowRight} /></ActionIcon></Trigger><InlineFieldWrapper label='All but nested' value="all-but-nested"><CheckboxGroup.AllItem /></InlineFieldWrapper>
            <StyledContent forceMount>
              <InlineFieldWrapper label='1 but nested'><CheckboxGroup.Item value='1 but nested' /></InlineFieldWrapper>
              <InlineFieldWrapper label='2 but nested'><CheckboxGroup.Item value='2 but nested' /></InlineFieldWrapper>
            </StyledContent>
          </CheckboxGroup>
        </Root>
      </CheckboxGroup>

    </Flex >
  </TooltipProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
