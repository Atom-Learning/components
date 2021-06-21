import * as React from 'react'
import { Trigger } from '@radix-ui/react-tabs'
import { CSS, styled } from '~/stitches'

const StyledTabTrigger = styled(Trigger, {
  flexShrink: 0,
  padding: '10px 20px',
  color: '$primary500',
  userSelect: 'none',
  '& *': { color: '$primary500' },

  '&:hover': { color: '$primary900' },
  '& *:hover': { color: '$primary900' },

  '&[data-disabled]': { color: '$tonal600' },
  '&[data-disabled] *': { color: '$tonal600' },

  '&[data-disabled]:hover': { color: '$tonal600' },
  '&[data-disabled] *:hover': { color: '$tonal600' },

  '&[data-state="active"]': {
    color: '$primary900',
    boxShadow: 'inset 0 -3px 0 0 currentColor'
  },
  '&[data-state="active"] *': {
    color: '$primary900'
  }
})

const renderChildren = (children: string | React.ReactNode, css: CSS) =>
  React.Children.map(children, (child: any) => {
    if (typeof child === 'string') {
      return child
    }

    return React.cloneElement(child, {
      css
    })
  })

type TabTriggerProps = React.ComponentProps<typeof StyledTabTrigger> & {
  value: string
  disabled: boolean
}

export const TabTrigger: React.FC<TabTriggerProps> = ({
  children,
  css,
  value,
  disabled = false
}) => (
  <StyledTabTrigger css={css} value={value} disabled={disabled}>
    {renderChildren(children, css as CSS)}
  </StyledTabTrigger>
)

TabTrigger.displayName = 'TabTrigger'
