import * as React from 'react'

import { Flex } from '~/components/flex'
import { styled } from '~/stitches'

import { focusVisibleStyleBlock } from '../../utilities'
import { AnswerFeedbackIcon } from './AnswerFeedbackIcon'
import { colorSchemes as answerColorSchemesTheme, colorSchemesState as answerColorSchemesState } from './stitches.answer.colorscheme.config'

export const StyledRoot = styled(Flex, {
  position: 'relative',
  p: '$3',
  boxShadow: 'inset $colors$border 0px 0px 0px 1px',
  border: 'none',
  borderRadius: '$2',
  maxWidth: '100%',
  minHeight: '$5',
  color: '$text',
  bg: '$background',
  '&[disabled]': {
    pointerEvents: 'none'
  },
  '&:not([disabled])': {
    cursor: 'pointer',
    '&:focus-visible': {
      ...focusVisibleStyleBlock({ boxShadow: 'inset $colors$border 0px 0px 0px 1px' })
    },
    '&:hover': {
      color: '$textHover',
      bg: '$backgroundHover',
      boxShadow: 'inset $colors$borderHover 0px 0px 0px 1px',

    },
    '&:active': {
      color: '$textPressed',
      bg: '$backgroundPressed',
      boxShadow: 'inset $colors$borderPressed 0px 0px 0px 1px',
    }
  },
  '&[data-state="on"]': {
    boxShadow: 'inset $colors$borderSelected 0px 0px 0px 4px',
    color: '$textSelected',
    bg: '$backgroundSelected',
    '&:not([disabled])': {
      '&:hover': {
        color: '$textSelectedHover',
        bg: '$backgroundSelectedHover',
        boxShadow: 'inset $colors$borderSelected 0px 0px 0px 4px',
      },
      '&:active': {
        color: '$textSelectedPressed',
        bg: '$backgroundSelectedPressed',
        boxShadow: 'inset $colors$borderSelected 0px 0px 0px 4px',
      },
      '&:focus-visible': {
        ...focusVisibleStyleBlock({ boxShadow: 'inset $colors$borderSelected 0px 0px 0px 4px' })
      },
    }
  }
})

export type AnswerProps = React.ComponentProps<typeof StyledRoot> & {
  state?: keyof typeof answerColorSchemesState
  theme?: keyof typeof answerColorSchemesTheme
}

export const Answer: React.ForwardRefExoticComponent<AnswerProps> =
  React.forwardRef(({ state, theme = 'default', className = '', children, ...rest }, ref) => {
    const colorSchemeClassName = state ? answerColorSchemesState[state] : answerColorSchemesTheme[theme]

    return (
      <StyledRoot
        gap={3}
        ref={ref}
        align="center"
        {...rest}
        className={`${colorSchemeClassName} ${className}`}
      >
        <AnswerFeedbackIcon state={state} />
        {children}
      </StyledRoot>
    )
  })

Answer.displayName = 'Answer'
