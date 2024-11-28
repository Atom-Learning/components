import * as React from 'react'

import { KeyboardShortcut } from '~/components/keyboard-shortcut'
import { styled } from '~/stitches'


const StyledAnswerIdentifier = styled(KeyboardShortcut.Indicator, {
  bg: '$identifierBackground',
  color: '$identifierText',
  '[data-state="on"] &': {
    bg: '$identifierSelectedBackground',
    color: '$identifierSelectedText',
  }
})

export const AnswerIdentifier = (props: React.ComponentProps<typeof KeyboardShortcut.Indicator>) => {
  return <StyledAnswerIdentifier size="sm" {...props} />
}

AnswerIdentifier.displayName = 'AnswerIdentifier'
