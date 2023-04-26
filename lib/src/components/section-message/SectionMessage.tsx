import { Danger, Error, Info, OkCircle } from '@atom-learning/icons'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import React from 'react'

import { CSS } from '~/stitches'

import { Dismissible } from '../dismissible'
import { Flex } from '../flex'
import { SectionMessageClose } from './SectionMessageClose'
import { SectionMessageContext } from './SectionMessageContext'
import { SectionMessageDescription } from './SectionMessageDescription'
import { SectionMessageIcon } from './SectionMessageIcon'
import {
  SectionMessageActions,
  SectionMessageContent
} from './SectionMessageLayout'
import { SectionMessageTitle } from './SectionMessageTitle'

export const THEMES = {
  success: {
    bg: '$successLight',
    color: '$successDark',
    icon: OkCircle
  },
  warning: {
    bg: '$warningLight',
    color: '$warningText',
    icon: Danger
  },
  error: {
    bg: '$dangerLight',
    color: '$dangerDark',
    icon: Error
  },
  neutral: {
    bg: '$grey100',
    color: '$grey1000',
    icon: Info
  },
  info: {
    bg: '$blue100',
    color: '$blue1000',
    icon: Info
  }
}

export type SectionMessageTheme = keyof typeof THEMES

interface SectionMessageProps
  extends Omit<
    Partial<React.ComponentProps<typeof Dismissible>>,
    'asChild' | 'disabled'
  > {
  theme?: SectionMessageTheme
  css?: CSS
}

const SectionMessage = ({
  theme = 'info',
  css,
  onDismiss,
  value = 'section-message',
  children
}: SectionMessageProps): JSX.Element => {
  return (
    <TooltipProvider>
      <SectionMessageContext.Provider value={{ theme }}>
        <Dismissible value={value} onDismiss={onDismiss} asChild>
          <Flex
            css={{
              fontFamily: '$body',
              borderRadius: '$0',
              fontSize: '$sm',
              color: THEMES[theme].color,
              p: '$4',
              border: '1px solid white',
              bg: THEMES[theme].bg,
              ...css
            }}
          >
            {children}
          </Flex>
        </Dismissible>
      </SectionMessageContext.Provider>
    </TooltipProvider>
  )
}

SectionMessage.Title = SectionMessageTitle
SectionMessage.Description = SectionMessageDescription
SectionMessage.Icon = SectionMessageIcon
SectionMessage.Close = SectionMessageClose
SectionMessage.Content = SectionMessageContent
SectionMessage.Actions = SectionMessageActions

export { SectionMessage }
